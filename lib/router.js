Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'welcome'
});

Router.route('/signup', { //route name
    name: 'signup' //template name
});

Router.route('/login', { //route name
    name: 'login' //template name
});

Router.route('/index', { //route name
    name: 'index' //template name
});

