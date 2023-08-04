import {prefixPluginTranslations} from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: "datetime",
      pluginId: "sensible-date-picker",
      type: "datetime",
      intlLabel: {
        id: "sensible-date-picker.datetime.label",
        defaultMessage: "DateTime Picker",
      },
      intlDescription: {
        id: "sensible-date-picker.datetime.description",
        defaultMessage: "A sensible datetime picker for busy people",
      },
      icon: undefined,
      components: {
        Input: async () => import("./components/DateTimePicker"),
      },
      options: {
        // declare options here
      },
    });

    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {
  },
  async registerTrads({locales}) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
          )
          .then(({default: data}) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
