/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */
let Container = require('./Container');

class MessageWriter extends Container {
    constructor() {
        // pass element ids as array
        super(['messageInput', 'submitbtn']);
        // and we get normalized data in elements
        // then add our normal event listeners
        this.elements.submitbtn.onclick = this.onSubmit.bind(this);
    }

    onSubmit() {
        let text = this.elements.messageInput.value;
        let message = text ? `User has written "${text}"` : 'User said nothing :(';
        this.messageDisplay(message);
        // to prevent reloading page
        return false;
    }
}

module.exports = new MessageWriter();