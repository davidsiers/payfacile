Router.configure({
    layoutTemplate: 'layout'
});

AccountsTemplates.configureRoute('signIn');

AccountsTemplates.configureRoute('changePwd');

AccountsTemplates.configureRoute('enrollAccount');

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd');

AccountsTemplates.configureRoute('signUp');

AccountsTemplates.configureRoute('resendVerificationEmail');

AccountsTemplates.configureRoute('verifyEmail');

/*AccountsTemplates.configureRoute('ensureSignedIn', {
    template: 'myLogin',
    layoutTemplate: 'myLayout'
});*/

/*Router.plugin('ensureSignedIn', {
    except: ['home', 'SignIn', 'SignUp', 'ForgotPassword']
}); content protection*/

Router.route('/', {
    name: 'welcome'
});

Router.route('/signup', { //route name
    name: 'signup' //template name
});

Router.route('/home', { //route name
    name: 'home' //template name
});

Router.route('/test', { //route name
    name: 'test' //template name
});

Router.route('/login', { //route name
    name: 'login' //template name
});

Router.route('/loginemail', { //route name
    name: 'loginemail' //template name
});

Router.route('/signupwith', { //route name
    name: 'signupwith' //template name
});

Router.route('/signlog', { //route name
    name: 'signlog' //template name
});

