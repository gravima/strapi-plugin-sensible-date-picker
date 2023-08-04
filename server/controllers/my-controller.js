'use strict';

module.exports = ({strapi}) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('sensible-date-picker')
      .service('myService')
      .getWelcomeMessage();
  },
});
