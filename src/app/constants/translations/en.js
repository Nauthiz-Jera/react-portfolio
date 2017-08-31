export default {
  portfolio: {
    links: {
      home: 'HOME',
      about: 'ABOUT',
      skill: 'SKILL',
      experience: 'EXPERIENCE',
      portfolio: 'PORTFOLIO',
      contact: 'CONTACT',
    },
    description: {
      personal: ["I'm a web developer", 'Full-Stack developer', 'Versatile in Angular & React'],
    },
    intros: {
      about: {
        description: 'A little about me',
        title: 'About',
      },
      skill: {
        description: "I'm good at",
        title: 'My Skill',
      },
      experience: {
        description: 'My work experience',
        title: 'Experience',
      },
      portfolio: {
        description: 'My Work',
        title: 'Portfolio',
      },
    },
    about: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      nationality: 'Nationality',
      git: 'GitHub',
      location: 'Location',
      description: "I have over 4 years of experience within the development world; a full-stack developer with strong front-end skills. I have a strong passion and love for code and coding, and I'm always looking for opportunities to improve my skills and learn more about development. ",
      quote: 'Available for freelance work, current stack: MongoDB, React/Angular, Express, Node',
    },
    skill: {
      header: 'My Professional Strengths',
      quote: '“There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.”― Ernest Hemingway',
      description: "My professional strengths lay in JavaScript development, in both front-end and back-end development. I'm adapt in Angular and React, two of the biggest MVC/Flux architectural and frameworks/libraries.I also have background in mySql and knowledge in Express, Mongoose, and MongoDB.",
      knowledge: 'Knowledge',
      bulletGroupOne: [
        'Angular Framework',
        'React Library',
        'Ability to pay attention to detail',
        'Ability to adapt',
        'GIT version control',
      ],
      bulletGroupTwo: [
        'MVC principle',
        'Redux',
        'OOP',
        'Functional Paradigm',
        'SVN version control',
      ],
      bulletGroupThree: [
        'Right balance of tools',
        'Agile Development Life Cycle',
        'Node.js',
        'Use of Mongoose Schemas',
        'MongoDb',
      ],
    },
    experience: {
      afs: {
        title: 'Accenture Federal Services',
        timeFrame: '2015 to Present',
        position: 'Front-End Developer',
        description: 'Working on an internal web application for the U.S. Postal service, creating reports using the latest visualization libraries and web application framework.',
      },
      issi: {
        title: 'ISSI Software',
        timeFrame: '2014 to 2015',
        position: 'Full-Stack Developer',
        description: '',
      },
      donor: {
        title: 'DonorSearch',
        timeFrame: '2013 to 2014',
        position: 'Full-Stack Developer',
        description: 'Developed, maintained, and integrated APIs with our web application for internal use as well as client use.',
      },
    },
    item: {
      dashboard: {
        title: 'Dashboard Visualization',
        tech: ['Angular'],
        description: ' A dynamic dashboard table built to summarize the most recent data pertaining to the specific mailing week. A ticker placed at the right transitions periodically showing a high-level summary of the mail class data for the latest time period. The columns of the table can be clicked to prompt a hover over detailing more specifics of the specific cell clicked. Tabs and dropdowns, filter and update the visualized data within the table, based on the category clicked. The detail check box can be toggled to display more details to each specific sub-group within the table.',
        link: 'https://www.screencast.com/users/edkim51191/folders/Default/media/4d3deccc-b9ff-4244-9afa-8677018a2e46/embed',
      },
      table: {
        title: 'Dashboard Table',
        tech: ['Angular', 'D3'],
        description: 'The dashboard table is one way users can navigate within the web application. Buttons within the table indicate drill capability into reports best used to visuilize the data. When the user drills into the report, details show that the user has ran the report based on parameters of the cell the user has clicked on within the dashboard table.',
        link: 'https://www.screencast.com/users/edkim51191/folders/Default/media/81a54bab-475a-4684-b2e4-fb4495fc01c4/embed',
      },
      performance: {
        title: 'Performance Map',
        tech: ['Angular', 'Esri-Leaflet', 'CrossFilter', 'Lodash'],
        description: 'The Performance Map visualization was built using the Esri-Leaflet library, and contains all basic functionalities: panning, scrolling, and others. Radio buttons at the top and the filter panel located to the left are used to dynamically update the map and its legend. With the aid of crossfilter and lodash, the data is aggregated and filtered based on selections at instantaneous speeds. The map can be hover overed to display a information box, located to the bottom left, to give detailed information on the selected area. An area can also be clicked once to zoom-in and twice to create a new call for data and updating the map based on the selection.',
        link: 'https://www.screencast.com/users/edkim51191/folders/Default/media/ad1f53dd-9af5-4998-bfd9-8303eef5554f/embed',
      },
      geo: {
        title: 'Geo Maps',
        tech: ['Angular', 'D3'],
        description: "These D3js maps, in conjunction with AngularJs, create reusable components. The maps displayed using the same angular component display two different sets of data. Using AngularJs, extra capabilities were added, such as expanding a 'tile'. Dropdowns have been added to change the type of data visualized and the interactions created when clicking on the maps.",
        link: 'https://www.screencast.com/users/edkim51191/folders/Default/media/ee2c14e2-dade-4f17-8eac-f3ec9cda54df/embed',
      },
      custom: {
        title: 'Custom Visualizations',
        tech: ['Angular', 'D3', 'C3', 'CrossFilter', 'Lodash'],
        description: "These custom C3js + D3js charts were built with large customizations requested by the client. The calendar, radio, and tabs act as filters, 2 of which dynamically update the data visualizations, standard in most reports. In this customized report the legend, x-axis, and bars of the charts act as filters as well; updating all other charts based on selections. Custom designs were created to use as indicators of data sets for the sections of the bars within the larger chart visualization. Other custom features added to the charts are the 'lollipops' added to the smaller charts in the section below, as well as the custom scroll bar created to allow the user to 'scroll' through the charts data sets.",
        link: 'https://www.screencast.com/users/edkim51191/folders/Default/media/da98e26d-bbba-4005-9d86-4626b3596e11/embed',
      },
      multiple: {
        title: 'Multiple Visuals',
        tech: ['Angular', 'D3', 'CrossFilter', 'Lodash'],
        description: 'This report utilizes three different forms of custom visualizations to display the interconnected data set: a heatmap, a chart, and a table. The heatmap gives a clear high-level representation on how specific regions are doing. The chart communicates a trend overtime on how that specific region is doing. Last, the table gives a more detailed look on how each region is performing. Like other standard reports, these visualizations can be drilled upon to show a nested/child set of data associated to the clicked on value. They are also all dynamically filterable through the filters on the panel located to the left and its own unique filters coupled with the visualization.',
        link: 'https://www.screencast.com/users/edkim51191/folders/Default/media/dc6b2b71-c025-481e-8339-e05bcdeb4c92/embed',
      },
    },
  },
};
