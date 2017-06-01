/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */
let _ = require('lodash');

class Broadcaster {
    constructor() {
        // store all callbacks here
        this.container = {};
    }

    register(eventName, callback) {
        this.container[eventName] = callback;
    }

    broadcast(eventName, value) {
        if (this.container[eventName]) {
            this.container[eventName](value);
        } else {
            // broadcast error event
            console.log('error');
        }
    }
}

module.exports = new Broadcaster();