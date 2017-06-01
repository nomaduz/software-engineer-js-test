/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */

let Container = require('./Container');

class ButtonClicker extends Container {
    constructor() {
        super();
        let componentElement = document.getElementById('buttonClicker');
        this.button = componentElement.getElementsByTagName('button');
        this.button[0].onclick = this.onClick.bind(this);
    }

    onClick() {
        this.messageDisplay('User has clicked the button!');
    }
}

module.exports = new ButtonClicker();