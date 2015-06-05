Template.collapsible.onRendered(function(){
    // we're using the template instance scoped jQuery
    this.$('.collapsible').collapsible({
        accordion: false
    });
});