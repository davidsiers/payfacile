Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'welcome'
});

Router.route('/signup', { //route name
    name: 'signup' //template name
});
