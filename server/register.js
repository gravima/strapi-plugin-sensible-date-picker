'use strict';

module.exports = ({strapi}) => {
  strapi.customFields.register({
    name: 'datetime',
    plugin: 'sensible-date-picker',
    type: 'datetime',
  })
};
