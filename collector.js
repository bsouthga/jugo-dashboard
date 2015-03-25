/*
  example collector using jugo
*/


var jugo = require('../jugo'),
    jugo_config = require('./jugo.json');

var J = jugo(jugo_config);

// start collecting
J.collect();
