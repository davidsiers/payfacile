// User sign in with email
Template.header.helpers({
        'email': function(){
            if(Meteor.user() && Meteor.user().emails){
                return Meteor.user().emails[0].address;
            }
            else{
                return '';
            }
        }
});