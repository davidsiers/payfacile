// User sign in with email
Template.header.helpers({
        'email': function(){
            if(Meteor.user() && Meteor.user().emails){
                return Meteor.user().emails[0].address; //default user mail address
            }
            else{
                return ''; //to go to else condition in Blaze (other accounts like Google or FB)
            }
        }
});