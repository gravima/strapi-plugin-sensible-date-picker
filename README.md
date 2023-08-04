# Strapi Custom DateTime Plugin

[![GitHub License](https://img.shields.io/github/license/gravima/strapi-plugin-sensible-date-picker)](https://github.com/gravima/strapi-plugin-sensible-date-picker/blob/main/LICENSE)

> A Strapi plugin that enables user-friendly input of DateTime values.

## Table of Contents

- About the Plugin
- Installation
- Usage
- Examples
- Compatibility
- Notes
- Support and Contribution
- License

About the Plugin:

Strapi currently uses a DateTime Picker with a dropdown for minute selection. However, this solution is not
user-friendly and makes it challenging to input precise time, especially when seconds or specific minutes are required.

The Strapi Custom DateTime Plugin was developed to address this issue. It adds a new custom field to Strapi that allows
easy input of DateTime values without relying on dropdowns or other distracting elements. With this plugin, you can
enter and save time in the "HH:mm" format directly.

Installation:

To install the plugin, execute the following commands:

```bash
# With npm
npm install strapi-plugin-custom-datetime

# With yarn
yarn add strapi-plugin-custom-datetime
```

After installation, restart your Strapi server to apply the changes.

Usage:

After installation, the plugin will add a new custom field named "customdatetime" to Strapi. Use this field in your
Content Types to input DateTime values easily.

Examples:

```javascript
// Example of using the Custom DateTime Field in a Content Type
module.exports = {
  attributes: {
    meetingTime: {
      type: 'customdatetime', // Use the 'customdatetime' type for the custom DateTime field
      label: 'Meeting Time',
    },
    // Other attributes of this Content Type...
  },
};
```

Compatibility:

The Strapi Custom DateTime Plugin is compatible with the following Strapi versions:

- Strapi v3.x

Notes:

- The plugin uses the 24-hour format for time representation (e.g., "14:37").
- Seconds cannot be entered in this format, as it is limited to hours and minutes.

Support and Contribution:

For questions, issues, or suggestions, feel free to open an issue in this repository. Pull requests are also welcome.

License:

This project is licensed under the MIT License.
