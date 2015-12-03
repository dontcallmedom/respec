/*global respecVersion */

// this is only set in a build, not at all in the dev environment
var requireConfig = {
    shim:   {
        shortcut: {
            exports:    "shortcut"
        }
    }
};
require.config(requireConfig);

define([
            "domReady"
        ,   "core/base-runner"
        ,   "core/utils"
        ,   "core/webidl-oldschool-converter"
        ],
        function (domReady, runner, ui) {
            var args = Array.prototype.slice.call(arguments);
            domReady(function () {
                runner.runAll(args);
            });
        }
);
