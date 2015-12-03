#!/usr/local/bin/node

var fs   = require("fs")
,   pth  = require("path")
,   b    = require("./builder")
,   version = JSON.parse(fs.readFileSync(pth.join(__dirname, "../package.json"), "utf-8")).version
,   builds = pth.join(__dirname, "../builds")
,   latest = pth.join(builds, "respec-webidlconvert.js")
;

function build (cb) {
    var opts = { out: latest, name: "profile-webidlconvert" };
    b.build(opts, cb);
}

if (require.main === module) {
    build(true, function () {
        console.log("OK!");
    });
}

exports.build = build;
