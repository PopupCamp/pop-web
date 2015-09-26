ShareIt.configure({
  sites: {
    'facebook': {
        'appId': "837829179669486"
    },
    'twitter': {}
  },
  siteOrder: ['twitter', 'facebook', null, null, null]
});

Meteor.startup ->
  # SEO.config
  #   title: "Popup Camp"
  #   meta:
  #     description: "Halte-garderie mobile événementielle / Mobile Child Care for Events"
  #   og:
  #     image: "http://popupcamp.com/img/profile.png"
