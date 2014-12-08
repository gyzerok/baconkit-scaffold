'use strict';

var BaconKit = require('baconkit');

exports.start = function () {
    var App = new BaconKit.Application(window);
    App.start();
};