import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import Example from './collapsable-examples-styles';

import Collapsable from '../HOC/Collapsable/collapsable-hoc';

class CollapsableExample extends PureComponent {
  static propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
  };

  render() {
    const { isCollapsed } = this.props;
    return (
      <Example>
        {!isCollapsed && (
          <Example.container>
            <pre>
              {`function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayHelpScreen || WrappedComponent.name || 'Component';
}

export default function CollapsibleWrapper(defaultCollapseValue = true, displayToggle = true) {
  return WrappedComponent => {
    class CollapsibleComponent extends PureComponent {
      static propTypes = {
        className: PropTypes.string,
      };

      static defaultProps = {
        className: '',
        isActive: false,
      };

      constructor(props) {
        super(props);

        this.state = {
          isCollapsed: defaultCollapseValue,
        };

        this.toggleCollapse = this.toggleCollapse.bind(this);
      }

      toggleCollapse() {
        this.setState(prevState => ({ isCollapsed: !prevState.isCollapsed }));
      }

      render() {
        const { className } = this.props;
        const { isCollapsed } = this.state;
        const toggleDirection = isCollapsed ? 'chevron-down' : 'chevron-up';`}
              {`return (
          <Collapsable className={'{className} collapsable-header}'>
            <Collapsable.container className="collapsable-container">
              <WrappedComponent
                toggleCollapse={this.toggleCollapse}
                {...this.state}
                {...this.props}
              />
              {displayToggle && (
                <Collapsable.toggleButton
                  className="collapsable-toggle-button"
                  name={toggleDirection}
                  onClick={this.toggleCollapse}
                />
              )}
            </Collapsable.container>
          </Collapsable>
        );
      }
    }

    CollapsibleComponent.displayName = 'CollapsibleComponent({getDisplayName(WrappedComponent)})';
    return CollapsibleComponent;
  `}
              }
            </pre>
          </Example.container>
        )}
      </Example>
    );
  }
}

export default compose(Collapsable(true, true))(CollapsableExample);
