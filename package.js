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
  api.use(["templating", "ui", "blaze", "less", "reactive-var"]);
  // api.use("isobuild:cordova@5.2.0");

  // Include official Wit.ai browser integration
  api.addFiles('browser/witai-browser-client/witai.min.css', ['web.browser']);
  api.addfiles('browser/witai-browser-client/witai.min.js', ['web.browser']);
  api.addFiles('browser/witai-browser-client/fonts/microphone.eot', ['web.browser'], {isAsset:true});
  api.addFiles('browser/witai-browser-client/fonts/microphone.svg', ['web.browser'], {isAsset:true});
  api.addFiles('browser/witai-browser-client/fonts/microphone.ttf', ['web.browser'], {isAsset:true});
  api.addFiles('browser/witai-browser-client/fonts/microphone.woff', ['web.browser'], {isAsset:true});
  // Include Meteor interface for Wit.ai's browser integration
  api.addFiles('browser/witai-interface.html', ['web.browser']);
  api.addFiles('browser/witai-interface.js');

  // api.addFiles('witai.less', ['web.browser']);
  // api.addFiles('witai-browser.js', ['web.browser']);
  // api.addFiles('witai-cordova.js', ['web.cordova']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bfla:witai');
  api.addFiles('witai-tests.js');
});
