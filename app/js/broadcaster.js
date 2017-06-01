/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */
let _ = require('lodash');
let _const = require('./const');

/**
 * @description class that handles all broadcasting states.
 * you can register your state and reference callback
 * when you register it keeps in normalized container
 * and when state fires it grabs callback and runs with sent value
 */
class Broadcaster {
    constructor() {
        // keep all state callbacks in this container
        this.container = {};
    }

    /**
     * @param stateName string
     * @param callback function
     * @description registers states and adds their callbacks.
     * for now it assumes all components have unique states and can't be register
     * under same state. However, you could build object/array container that can handle that
     * maybe you should send some unique tags on from each component
     * so you won't add one callback several times. then on broadcasting, we just go through array
     * and call all referenced callbacks
     */
    register(stateName, callback) {
        this.container[stateName] = callback;
    }

    /**
     * @param stateName
     * @description removes state and its callback from container
     */
    unregister(stateName) {
        this.container = _.omit(this.container, stateName);
    }

    /***
     * @param stateName string
     * @param value any
     * @description goes through the container array and runs callback functions
     * we could also allow sending multiple values instead of one. we can use call and apply for that
     * however, these are minor tweaks and overall structure/framework should be like this
     */
    broadcast(stateName, value) {
        if (this.container[stateName]) {
            // run callback in state
            this.container[stateName](value);
        } else {
            // tell that we are trying to broadcast something that is not there
            this.error(`event with name ${stateName} is not registered`);
        }
    }

    /***
     * @param message
     * @description broadcasts error so error handler component can pick it up
     */
    error(message) {
        this.broadcast(_const.ERROR_HANDLING, message);
    }
}

module.exports = new Broadcaster();