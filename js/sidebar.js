/**
 * Scripts for handling the lab sidebar (contains Table of Contents).
 */

var SIDEBAR_JQ = "#sidebar";
var CONTENT_CONTAINER_JQ = "#content-container";
var CONTENT_SPACER_CLASS = "content-spacer";

/**
 * Decide what to do with the sidebar based on the screen size.
 * If the screen is too small, hide the sidebar. Otherwise, show it.
 */
var showOrHideSidebar = function() {
    var screen = $(window)
    if (screen.width() < 1150) {
        hideSidebar();
        addTocButton();
        $(CONTENT_CONTAINER_JQ).removeClass(CONTENT_SPACER_CLASS);
    } else {
        showSidebar();
        removeTocButton();
        $(CONTENT_CONTAINER_JQ).addClass(CONTENT_SPACER_CLASS);
    }
}

var showSidebar = function() {
    $(SIDEBAR_JQ).show();
}

var hideSidebar = function() {
    $(SIDEBAR_JQ).hide();
}

/**
 * If the sidebar is shown, hide it. If hidden, show it.
 * Occurs when user clicks on the Table of Contents button.
 */
var flipSidebar = function() {
    if ($(SIDEBAR_JQ).is(":visible")) {
        hideSidebar();
    } else {
        showSidebar();
    }
}



$(document).ready(showOrHideSidebar);

$(window).bind('resize', function() {
    showOrHideSidebar();
});
