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

fs.readFile(`androidLocales/strings-${locale}.xml`, 'utf8', (error, data) => {
  if (error) {
    throw new Error(error);
  }

  fs.writeFile('android/app/src/main/res/values/strings.xml', data, 'utf8', (err) => {
    if (err) throw new Error(err);
  });
});

fs.readFile(`iosLocales/Info-${locale}.plist`, 'utf8', (error, data) => {
  if (error) {
    throw new Error(error);
  }

  fs.writeFile('ios/firebasePlayground/Info.plist', data, 'utf8', (err) => {
    if (err) throw new Error(err);
  });
});
