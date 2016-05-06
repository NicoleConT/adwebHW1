var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var hanlde = {}
hanlde["/"] = requestHandlers.start;
hanlde["/start"] = requestHandlers.start;
hanlde["/upload"] = requestHandlers.upload;
hanlde["/show"] = requestHandlers.show;

server.start(router.route, hanlde);