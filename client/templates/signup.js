/**
 * Created by Maria on 4/19/2015.
 */
Template.signup.events({
   'submit':function(event,template){
       //we avoid the template (and the page to reload)
       // --> because submit a post reload a page by default normally, but it would be less reactive, less fast
       event.preventDefault();

       //we put in variables the values of the input fields we want (add what you want here)
       var lname = template.$('[id=last_name]').val(); //for example here I put the var name "lname" but I could also put "toto"
       var email = template.$('[id=email]').val();

       //we create an object that we will insert in the DataBase
       //we will put it in the collection "signup"
       //so it has to repect the name of the fields you declare yourself in collection.js
       var temp = {
           surname: lname, //here I use "lname" because of the var declaration above
           email: email
       };

       Signup.insert(temp,//we insert our object in the collection (it will create a new record
           //we have to catch by default when the DB answers us to know if the insert worked
           function(error, result){//"error" is an object and will tell you if something was wrong WHAT was wrong, "result" will give you the ID of the new record if everything went good
               if(error){//if we have an error we display it to know what happened and debug
                   console.log('Error when inserting in collection "signup" : ' + error.reason); //error is an object with several attributes, in this case we want the "reason" of the failure, read docs to know all attributes (I don't know them)
               }
               else{//no error so it worked, we do what we want: here I'm gonna display the ID of the new record, you can check it after normally in your Mongo console
                   console.log('Insert OK in collection "signup", the new record ID is : ' + result);

               }
           }
       );
   }

});

/*$(document).ready(function(){
    $(".navbar-brand").click(function(){
        $("#myForm").toggle();
    });
});*/

Template.signupwith.events({
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

