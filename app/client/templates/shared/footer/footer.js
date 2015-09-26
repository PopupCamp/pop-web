/*****************************************************************************/
/* Footer: Event Handlers */
/*****************************************************************************/
Template.Footer.events({
});

/*****************************************************************************/
/* Footer: Helpers */
/*****************************************************************************/
Template.Footer.helpers({
});

/*****************************************************************************/
/* Footer: Lifecycle Hooks */
/*****************************************************************************/
Template.Footer.created = function () {
};

Template.Footer.rendered = function () {
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.4&appId=837829179669486";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  !function(d,s,id) {
    var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)) {
      js=d.createElement(s);
      js.id=id;
      js.src=p+"://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js,fjs);
    }
  }(document,"script","twitter-wjs");
};

Template.Footer.destroyed = function () {
};
