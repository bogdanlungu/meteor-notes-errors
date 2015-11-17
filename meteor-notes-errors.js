NotesErrors = {
  errors: new Mongo.Collection(null),
  notifications: new Mongo.Collection(null),

  throwError: function(message){
    NotesErrors.errors.insert({message: message, seen: false});
  },

  throwNotification: function(message){
    NotesErrors.notifications.insert({message: message, seen: false});
  }
};

Template.meteorNotesErrors.helpers({
  errors: function() {
    return NotesErrors.errors.find();
  }
});

Template.meteorNotesNotifications.helpers({
  notifications: function(){
    return NotesErrors.notifications.find();
  }
});

Template.meteorNotesError.rendered = function() {
  var error = this.data;
  Meteor.setTimeout(function () {
    NotesErrors.errors.remove(error._id);
  }, 3000);
};

Template.meteorNotesNotification.rendered = function() {
  var error = this.data;
  Meteor.setTimeout(function () {
    NotesErrors.notifications.remove(error._id);
  }, 3000);
};
