/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */

let Container = require('./Container');

class ButtonClicker extends Container {
    constructor() {
        super('clickme');
        // add listener to element
        this.element.onclick = this.onClick.bind(this);
    }

    onClick() {
        // this will broadcast to message display
        this.messageDisplay('User has clicked the button!');
    }
}

module.exports = new ButtonClicker();