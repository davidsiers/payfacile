Template.index.events({
    'click .btn-google': function() {
        return Meteor.loginWithGoogle({
            requestPermissions: ['email']
        }, function(error) {
            if (error) {
                return console.log(error.reason);
            }
        });
    }
});

createServiceConfiguration('google', 'Insert your clientId here.', 'Insert your secret here.')
