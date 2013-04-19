if (Meteor.isClient) {
  Template.splash.greeting = function () {
    return "Welcome to crutch.";
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
