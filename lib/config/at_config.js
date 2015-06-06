//useraccounts package logic configuration

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "First Name",
    required: true
});

AccountsTemplates.addField({
    _id: 'surname',
    type: 'text',
    displayName: "Last Name",
    required: true
});

AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "Phone",
    required: true
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
    homeRoutePath: '/',
    redirectTimeout: 4000,

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