/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */
let Container = require('./Container');
let _const = require('../const');

class MessageDisplay extends Container {

    constructor() {
        super('messages');
        // register callback for state
        this.register(_const.MESSAGE_DISPLAY, this.messageDisplayHandler.bind(this));
    }

    /***
     * @param value
     * @description callback method when state is fired
     */
    messageDisplayHandler(value) {
        this.element.innerHTML = value;
    }
}

module.exports = new MessageDisplay();