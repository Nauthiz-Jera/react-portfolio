import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import Modal from 'react-modal';
import { Croppie } from 'croppie';
import 'croppie/croppie.css';

import { COLORS } from '../../../constants/styles';
import { ModalContent, DropLocationContainer, Image } from './styles';

import Button from '../../BasicComponent/Button/button';
import DropLocation from '../../DropLocation/drop-location';

const ImageCropTarget = {
  drop(props, monitor, component) {
    const urlCreator = window.URL || window.webkitURL;
    const file = monitor.getItem().files[0];
    const fileURL = urlCreator.createObjectURL(file);
    const { type, index } = props;
    const updatedContentConfig = {
      type,
      index,
      blob: file,
    };
    component.setImageSrc(fileURL);
    component.props.callback(updatedContentConfig);
    component.toggleModal(true);
    component.openImageCropper();
  },
};

class DropAndCrop extends Component {
  static bindCroppieToImage(imgRef, options) {
    return new Croppie(imgRef, options);
  }
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      url: props.url,
      cropImage: null,
    };

    this.setImageSrc = this.setImageSrc.bind(this);
    this.openImageCropper = this.openImageCropper.bind(this);
    this.inputCallbackWrapper = this.inputCallbackWrapper.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.saveCroppedImage = this.saveCroppedImage.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.url !== '';
  }

  setImageSrc(url) {
    this.setState({
      ...this.state,
      url,
    });
  }

  openImageCropper() {
    const { url } = this.state;
    const { cropSettings } = this.props;
    const { imgRef } = this;
    const cropOptions = {
      url,
      viewport: cropSettings,
    };
    this.setState({
      ...this.state,
      cropImage: DropAndCrop.bindCroppieToImage(imgRef, cropOptions),
    });
  }

  inputCallbackWrapper(event) {
    const urlCreator = window.URL || window.webkitURL;
    const file = event.target.files[0];
    const fileURL = urlCreator.createObjectURL(file);
    this.setImageSrc(fileURL);
    this.setState(
      {
        modalIsOpen: true,
      },
      () => this.openImageCropper(),
    );
  }

  saveCroppedImage() {
    const { cropImage } = this.state;
    const { callback, index, type } = this.props;

    // Removed format Jpeg for now
    cropImage.result({ type: 'blob', size: 'viewport', format: 'png' }).then(blob => {
      const urlCreator = window.URL || window.webkitURL;
      const fileURL = urlCreator.createObjectURL(blob);

      this.setImageSrc(fileURL);
      const updatedContentConfig = {
        type,
        index,
        blob,
      };
      callback(updatedContentConfig);
      this.toggleModal(false);
    });
  }

  toggleModal(boolean) {
    this.setState({
      modalIsOpen: boolean,
    });
  }

  renderContent = () => {
    const { url } = this.state;
    const { imageStyle } = this.props;
    return url !== '' ? (
      <Image styles={imageStyle} src={url} alt="" />
    ) : (
      <DropLocationContainer>
        <DropLocation callback={this.inputCallbackWrapper} />
      </DropLocationContainer>
    );
  };

  render() {
    const { canDrop, className, connectDropTarget, isOver } = this.props;
    const { modalIsOpen } = this.state;
    const isActive = canDrop && isOver;
    let backgroundColor = 'transparent';
    if (isActive) {
      backgroundColor = COLORS.GREY.VERY_LIGHT_GREY;
    } else if (canDrop) {
      backgroundColor = COLORS.WHITE.WHITE;
    }
    const containerStyle = {
      backgroundColor,
    };

    console.log('Croppie: ', Croppie);

    return connectDropTarget(
      <div className={`${className} drop-and-crop`} style={containerStyle}>
        {this.renderContent()}
        <Modal
          style={{ overlay: { zIndex: 1000 } }}
          isOpen={modalIsOpen}
          onRequestClose={() => this.toggleModal(false)}
          contentLabel="Cropping Modal"
          ariaHideApp={false}
        >
          <ModalContent>
            <img
              id="cropImage"
              alt=""
              ref={img => {
                this.imgRef = img;
              }}
            />
            <Button
              className="cropImage-result"
              title="Crop Image!"
              clickCallback={this.saveCroppedImage}
            />
          </ModalContent>
        </Modal>
      </div>,
    );
  }
}

DropAndCrop.propTypes = {
  className: PropTypes.string,
  callback: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func,
  cropSettings: PropTypes.object,
  imageStyle: PropTypes.object,
  index: PropTypes.number,
  isOver: PropTypes.bool,
  canDrop: PropTypes.bool,
  type: PropTypes.string,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DropAndCrop.defaultProps = {
  className: '',
  url: '',
  cropSettings: {
    height: 150,
    width: 150,
    type: 'square',
  },
};

export default compose(
  DropTarget(NativeTypes.FILE, ImageCropTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })),
)(DropAndCrop);
