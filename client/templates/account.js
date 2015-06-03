$(document).ready(function(){
    $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

document.addEventListener("DOMContentLoaded", function() {
    $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});


Template.collapsible.onRendered(function(){
    // we're using the template instance scoped jQuery
    this.$('.collapsible').collapsible({
        accordion: false
    });
});