/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */
let Container = require('./Container');
let _const = require('../const');

// this component will show on html whatever you send
class MessageDisplay extends Container {

    constructor() {
        // sending element id to parent constructor
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