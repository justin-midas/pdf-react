/* eslint-disable import/no-extraneous-dependencies */
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
