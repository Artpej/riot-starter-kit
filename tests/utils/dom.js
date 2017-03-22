var jsdom = require('jsdom');

var doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
 win = doc.defaultView;
var win = doc.defaultView;
global.document = doc;
global.window = win;
global.navigator = win.navigator;
global.history = win.history;
