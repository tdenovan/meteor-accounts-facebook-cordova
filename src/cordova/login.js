// https://github.com/Wizcorp/phonegap-facebook-plugin#login
CFB.login = function (callback) {
    var onError = function (message) {
        callback(new Error(message.errorMessage), null);
    };
    var onSuccess = function (res) {
        callback(null, res);
    };
    facebookConnectPlugin.login(this.getPermissions(), onSuccess, onError);
};
Meteor.startup(function () {
    CFB.login(function (err, res) {
        console.log(err.message);
        console.log(res);
        console.log('aaaaaaa dcm');
    });
});
/**

Accounts.oauth.registerService('facebook');
Meteor.loginWithFacebook = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
        callback = options;
        options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);

    var fbLoginSuccess = function (data) {
        data.cordova = true;
        Accounts.callLoginMethod({
            methodArguments: [data],
            userCallback: callback
        });
    }

    if (options.requestPermissions == null)
        options.requestPermissions = Meteor.settings.public.facebook.permissions;
      
    if (typeof facebookConnectPlugin != "undefined" && Meteor.settings) {
        facebookConnectPlugin.getLoginStatus(
            function (response) {
                if (response.status != "connected") {
                    facebookConnectPlugin.login(options.requestPermissions,
                        fbLoginSuccess,
                        callback
                    );
                } else {
                    fbLoginSuccess(response);
                }
            },
            callback
        );
    } else {
        Facebook.requestCredential(options, credentialRequestCompleteCallback);
    }
};
*/