Template.login.events({
    'click .btn-google': function(e) {
        e.preventDefault();
        Meteor.loginWithGoogle({
                requestPermissions: ['email']}
            , function(result,error){
                if(error)
                    console.log(error.reason);
            }
        );
    },
    'click #facebook-login': function(e) {
        e.preventDefault();
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});
