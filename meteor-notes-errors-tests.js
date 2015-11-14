Tinytest.add("Errors", function(test) {
  test.equal(NotesErrors.errors.find({}).count(), 0);
  NotesErrors.throwError('A new error!');
  test.equal(NotesErrors.errors.find({}).count(), 1);
  NotesErrors.errors.remove({});
});

Tinytest.add("Notifications", function(test) {
  test.equal(NotesErrors.notifications.find({}).count(), 0);
  NotesErrors.throwNotification('A new notification!');
  test.equal(NotesErrors.notifications.find({}).count(), 1);
  NotesErrors.notifications.remove({});
});
