
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const contentfulManagement = require('contentful-management');

const accessToken = process.env.REACT_APP_CONTENTFUL_CMS_TOKEN || '';
const space = process.env.REACT_APP_CONTENTFUL_SPACE_ID || '';
const environment = process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || 'master';

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken,
  });

  return contentfulClient
    .getSpace(space)
    .then((space) => space.getEnvironment(environment));
};
