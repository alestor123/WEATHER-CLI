#!/usr/bin/env node
var axios = require('axios'),
    pck = require('./package.json'),  
city = process.argv[2] || 'Kochi';
