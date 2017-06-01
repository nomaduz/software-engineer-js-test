/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */
let _ = require('lodash');
let _const = require('./const');

/**
 * @description class that handles all broadcasting states
 */
class Broadcaster {
    constructor() {
        // keep all state callbacks in this container
        this.container = {};
    }

    /**
     * @param stateName string
     * @param callback function
     * @description registers states and adds their callbacks
     */
    register(stateName, callback) {
        this.container[stateName] = callback;
    }

    /***
     * @param stateName string
     * @param value any
     * @description goes through the container array and runs callback functions
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