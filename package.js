Package.describe({
  name: 'bogdanlungu:meteor-notes-errors',
  version: '0.0.1',
  summary: 'Package to display errors and notifications in the meteorNotes application',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['meteor-notes-errors.html', 'meteor-notes-errors.js', 'meteor-notes-errors.css'], 'client');
  if (api.export)
  api.export('NotesErrors');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bogdanlungu:meteor-notes-errors');
  api.addFiles('meteor-notes-errors-tests.js');
});
