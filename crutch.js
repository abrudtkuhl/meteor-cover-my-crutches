if (Meteor.isClient) {
  Template.splash.title = function () {
    return "Cover My Crutches";
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
