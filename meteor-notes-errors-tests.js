Tinytest.add("Errors", function(test) {
  test.equal(Errors.errors.find({}).count(), 0);
  Errors.throwError('A new error!');
  test.equal(Errors.errors.find({}).count(), 1);
  Errors.errors.remove({});
});

Tinytest.add("Notifications", function(test) {
  test.equal(Errors.notifications.find({}).count(), 0);
  Errors.throwNotification('A new notification!');
  test.equal(Errors.notifications.find({}).count(), 1);
  Errors.notifications.remove({});
});
