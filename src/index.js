'use strict';

exports.start = function () {
    var BaconKit = require('./baconkit');
    var App = BaconKit(window);
    App.start();
};