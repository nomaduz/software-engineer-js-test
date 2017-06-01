/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */

let broadcaster = require('../broadcaster');
let _const = require('../const');

class Container {
    constructor(componentType) {
        broadcaster.register(componentType);
    }

    register(eventName, callback) {
        broadcaster.register(eventName, callback);
    }

    // will broadcast to messageDisplay component
    messageDisplay(value) {
        broadcaster.broadcast(_const.MESSAGE_DISPLAY, value);
    }
}

module.exports = Container;