// Generated by CoffeeScript 1.8.0
(function() {
  var logLevelOpts;

  global.log = require('loglevel');

  logLevelOpts = require("rc")("spacejam", {
    "loglevel": "info"
  });

  log.setLevel(logLevelOpts["loglevel"]);

}).call(this);
