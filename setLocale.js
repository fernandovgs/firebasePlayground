const fs = require('fs');

const locale = process.env.LOCALE || 'pt';

fs.readFile(`src/i18n/configLocales/${locale}.js`, 'utf8', (error, data) => {
  if (error) {
    throw new Error(error);
  }

  fs.writeFile('src/i18n/configLocales/index.js', data, 'utf8', (err) => {
    if (err) throw new Error(err);
  });
});
