"use strict";
// this is only set in a build, not at all in the dev environment
require.config({
  shim: {
    shortcut: {
      exports: "shortcut"
    },
    Promise: {
      exports: "Promise"
    },
  },
  paths: {
    "fetch": "/node_modules/whatwg-fetch/fetch",
    "handlebars": "/node_modules/handlebars/dist/handlebars",
    "jquery": "/node_modules/jquery/dist/jquery",
    "Promise": "/node_modules/promise-polyfill/promise",
    "webidl2": "/node_modules/webidl2/lib/webidl2",
  },
  deps: [
    "fetch",
    "jquery",
    "Promise",
    "core/jquery-enhanced",
  ],
});

define([
    // order is significant
            "domReady"
        ,   "core/base-runner"
        ,   "core/ui"
    ,   "core/utils"
    ,   "core/webidl-oldschool-converter"
    ,    "ui/save-html"
  ],
  function(domReady, runner, ui) {
    var args = Array.from(arguments);
    domReady(function() {
      ui.addCommand("Save Snapshot", "ui/save-html", "Ctrl+Shift+Alt+S");
     // ui.addCommand("About ReSpec", "ui/about-respec", "Ctrl+Shift+Alt+A");
     // ui.addCommand("Definition List", "ui/dfn-list", "Ctrl+Shift+Alt+D");
     // ui.addCommand("Search Specref DB", "ui/search-specref", "Ctrl+Shift+Alt+space");
      runner
        .runAll(args)
        .then(document.respectIsReady)
        .then(ui.show)
        .catch(function(err){
          console.error(err);
          // even if things go critically bad, we should still try to show the UI
          ui.show();
        })
    });
  }
);
