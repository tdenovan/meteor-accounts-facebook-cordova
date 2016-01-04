var profileFields = [
          "id",
          "name",
          "gender",
          "location",
          "email",
          "first_name",
          "last_name",
          "link",
          "username",
          "locale",
          "age_range"
      ];

CFB.Configure = function (config) {
  appId = process.env.FACEBOOK_APP_ID
  appSecret = process.env.FACEBOOK_APP_SECRET
  if(!appId || !appSecret)
    throw new Error("Meteor settings for accounts-facebook-cordova not configured correctly. Missing FACEBOOK_APP_ID or FACEBOOK_APP_SECRET environment variable");
  ServiceConfiguration.configurations.remove({
      service: "facebook"
  });
  console.log('Configuring facebook using cordova-facebook plugin');
  ServiceConfiguration.configurations.insert({
      service: "facebook",
      appId: appId,
      secret: appSecret
  });
  // https://github.com/meteor/meteor/blob/devel/packages/accounts-facebook/facebook.js#L15
  Accounts.addAutopublishFields({
      // publish all fields including access token, which can legitimately
      // be used from the client (if transmitted over ssl or on
      // localhost). https://developers.facebook.com/docs/concepts/login/access-tokens-and-types/,
      // "Sharing of Access Tokens"
      forLoggedInUser: ['services.facebook'],
      forOtherUsers: [
          // https://www.facebook.com/help/167709519956542
          'services.facebook.id', 'services.facebook.gender'
      ]
  });
};

CFB.getProfileFields = function () {
    return profileFields;
};
