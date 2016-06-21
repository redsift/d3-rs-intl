'use strict'

const tape = require("tape"),
    d3f = require("d3-format"),
    d3t = require("d3-time-format"),
    intl = require("../");

tape("default conversion", function(t) {
    let def = intl.units();
    t.ok(def != null);
    
    // should be US
    
    let currency = d3f.formatLocale(def.d3).format('$.2f')(42.12);
    
    t.equal(currency, '$42.12')    
        
    t.end();    
});

tape("fallthrough conversion", function(t) {
    let def = intl.units('no-NO');
    
    t.ok(def != null);
    
    // should be US
    
    let currency = d3f.formatLocale(def.d3).format('$.2f')(42.12);
    
    t.equal(currency, '$42.12')    
        
    t.end();
});


tape("lookup conversion", function(t) {
    let def = intl.units(intl.lookup('Catalan'));
    
    t.ok(def != null);
    
    let currency = d3f.formatLocale(def.d3).format('$.2f')(42.12);
    
    t.equal(currency, '42,12\xa0€')    
        
    t.end();
});

// UTC 1,000,000,000 = Sunday, 9 September 2001, 1,500,000,000 = Friday, 14 July 2017

tape("time default conversion", function(t) {
    let def = intl.time();
    t.ok(def != null);
    
    // should be US
    let time = d3t.timeFormatLocale(def.d3).format('%a')(1);
    t.equal(time, 'Thu')    
        
    time = d3t.timeFormatLocale(def.d3).format('%B')(1);
    t.equal(time, 'January')    
        
    t.end();    
});

tape("time lookup conversion", function(t) {
    let def = intl.time('pt');
    t.ok(def != null);
    
    // should be US
    let time = d3t.timeFormatLocale(def.d3).format('%a')(1500000000000);
    t.equal(time, 'Sex')    
        
    time = d3t.timeFormatLocale(def.d3).format('%B')(1500000000000);
    t.equal(time, 'Julho')    
        
    t.end();    
});


tape("time lookup conversion", function(t) {
    let def = intl.time(intl.lookup('French'));
    t.ok(def != null);
    
    // should be US
    let time = d3t.timeFormatLocale(def.d3).format('%a')(1000000000000);
    t.equal(time, 'dim.')    
        
    time = d3t.timeFormatLocale(def.d3).format('%B')(1000000000000);
    t.equal(time, 'septembre')    
        
    t.end();    
});