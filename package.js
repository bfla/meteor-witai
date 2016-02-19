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
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('witai.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bfla:witai');
  api.addFiles('witai-tests.js');
});
