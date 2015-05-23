AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Hooks
       //onLogoutHook: myLogoutFunc,
       //onSubmitHook: mySubmitFunc,

    // Texts
    texts: {
        button: {
            signUp: "Register Now!"
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        title: {
            forgotPwd: "Recover Your Password"
        }
    }
});

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Name",
    required: true
    /*func: function(value){return value !== 'Full Name';},
    errStr: 'Only "Full Name" allowed!'*/
});

AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "Phone",
    required: true
    /*func: function (number) {
        if (Meteor.isServer){
            if (isValidPhone(number))
                return false; // meaning no error!
            return true; // Validation error!
        }
    },
    errStr: 'Invalid Phone number!'*/
});

AccountsTemplates.addField({
    _id: 'organization',
    type: 'text',
    displayName: "Organization",
    required: true
});

AccountsTemplates.configure({
    texts: {
        socialIcons: {
            stripe: "fa fa-cc-stripe",
            "meteor-developer": "myMeteorIcon"
        }
    }
});


/*AccountsTemplates.configure({
    texts: {
        button: {
            changePwd: "Password Text",
            enrollAccount: "Enroll Text",
            forgotPwd: "Forgot Pwd Text",
            resetPwd: "Reset Pwd Text",
            signIn: "Sign In Text",
            signUp: "Sign Up Text",
        }
    }
});


AccountsTemplates.configure({
 texts: {
 socialIcons: {
 google: "myGoogleIcon",
 "meteor-developer": "myMeteorIcon"
 }
 }
 });
var mySubmitFunc = function(error, state){
    if (!error) {
        if (state === "signIn") {
            // Successfully logged in
            // ...
        }
        if (state === "signUp") {
            // Successfully registered
            // ...
        }
    }
};
*/
