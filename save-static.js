
var fs = require('fs');
var system = require('system');

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit(1);
}

console.log('Starting cache for static pages');

var directory = system.args[2];
console.log('output directory: ' + directory);


var config = JSON.parse(fs.read(system.args[1]));
console.log('JSON config: ' + config);

var routes = config.routes.map(function(route) {
	return { 'url': config.host + '/' + config.prefix + '/' + route, 'name': route };
});
console.log('Routes: ' + routes);
console.log('Routes: ' + routes[0].url + "    " +  routes[0].name);

function handle_page(route) {
var page = require('webpage').create();
   page.open(route.url, function() {
   fs.write(directory + '/' + (route.name ? route.name : 'index') + '.static.html', page.content, 'w');
  });
   setTimeout(next_page, 10000);
}

function next_page(){
    var route = routes.shift();
    if (!route) { phantom.exit(0); }
    handle_page(route);
}

next_page();
