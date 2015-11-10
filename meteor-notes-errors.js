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
