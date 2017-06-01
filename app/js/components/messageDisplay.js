/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */
let Container = require('./Container');
let _const = require('../const');

class MessageDisplay extends Container {

    constructor() {
        super();
        // select message display div
        this.messageDisplayElement = document.getElementsByClassName('messages');
        console.log(this.messageDisplayElement);
        // register event
        // arrow functions are not working for some reasons.
        this.register(_const.MESSAGE_DISPLAY, this.messageDisplayHandler.bind(this));
    }

    messageDisplayHandler(value) {
        this.messageDisplayElement[0].innerHTML = value;
    }
}

module.exports = new MessageDisplay();