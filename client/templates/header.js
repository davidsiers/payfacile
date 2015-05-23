/**
 * Created by Maria on 5/23/2015.
 */
Template.header.helpers({
        'toto': function(){
            return Meteor.user().emails[0].address;
        }

});