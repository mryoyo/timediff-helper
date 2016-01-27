Package.describe({
  name: 'mryoyo:timediff',
  version: '1.0.1',
  summary: 'A simple helper that displays duration between now and your another timestamp reactively.',
  git: 'https://github.com/mryoyo/timediff-helper.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('templating', ['client']);
  api.use('momentjs:moment@2.10.6', ['client']);
  api.addFiles('timediff.js', 'client');
});
