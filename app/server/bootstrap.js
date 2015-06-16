Meteor.startup(function () {
  if (Meteor.isClient) {
    return SEO.config({
      title: 'Popup Camp',
      meta: {
        'description': 'Halte-garderie mobile événementielle / Mobile Child Care for Events'
      },
      og: {
        'image': 'http://popupcamp.com/img/profile.png'
      }
    });
  }
});
