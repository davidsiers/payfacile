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

    }

});