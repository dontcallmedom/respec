/*global respecVersion */

// this is only set in a build, not at all in the dev environment
var requireConfig = {
    shim:   {
        shortcut: {
            exports:    "shortcut"
        }
    }
};
if ("respecVersion" in window && respecVersion) {
    requireConfig.paths = {
        ui:   "https://w3c.github.io/respec/js/ui"
    };
}
require.config(requireConfig);

define([
            "domReady"
        ,   "core/base-runner"
        ,   "core/ui"
        ,   "core/utils"
        ,   "core/webidl-oldschool-converter"
        ],
        function (domReady, runner, ui) {
            var args = Array.prototype.slice.call(arguments);
            domReady(function () {
                ui.addCommand("Save Snapshot", "ui/save-html", "Ctrl+Shift+Alt+S");
                runner.runAll(args);
            });
        }
);
