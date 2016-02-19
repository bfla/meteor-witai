Package.describe({
  name: 'bfla:witai',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Wit.ai clients for Browser and iOS',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bfla/meteor-witai',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.export('WitaiClient');
  api.versionsFrom('1.2.1');

  // api.use('ecmascript');
  api.use(["templating", "ui", "blaze", "less@1.0.0||2.0.0", "reactive-var"]);
  api.use("isobuild:cordova@5.2.0");

  api.addFiles('witai.html');
  api.addFiles('witai.less', ['web.browser']);
  api.addFiles('witai-browser.js', ['web.browser']);
  // api.addFiles('witai-cordova.js', ['web.cordova']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bfla:witai');
  api.addFiles('witai-tests.js');
});
