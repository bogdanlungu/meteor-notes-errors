Errors = {
  errors: new Mongo.Collection(null),
  notfications: new Mongo.Collection(null),

  throwError: function(message){
    Errors.errors.insert({message: message, seen: false});
  },

  throwNotification: function(){
    Errors.notifications.insert({message: message, seen: false});
  }
};

Template.meteorNotesErrors.helpers({
  errors: function() {
    return Errors.errors.find();
  }
});

Template.meteorNotesNotifications.helpers({
  notifications: function(){
    return Errors.notifications.find();
  }
});

Template.meteorNotesErrors.rendered = function() {
  var error = this.data;
  Meteor.setTimeout(function () {
    Errors.errors.remove(error._id);
  }, 3000);
};

Template.meteorNotesNotifications.rendered = function() {
  var error = this.data;
  Meteor.setTimeout(function () {
    Errors.notifications.remove(error._id);
  }, 3000);
};
