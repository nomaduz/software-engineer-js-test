/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */
let Component = require('./component');

class MessageWriter extends Component {
    constructor() {
        // pass element ids as array
        super(['messageInput', 'submitbtn']);
        // and we get normalized data in elements
        // then add our normal event listeners
        this.elements.submitbtn.onclick = this.onSubmit.bind(this);
    }

    onSubmit() {
        // get value from input field
        let text = this.elements.messageInput.value;
        // prepare message
        let message = text ? `User has written "${text}"` : 'User said nothing :(';
        this.messageDisplay(message);
        // to prevent reloading page
        return false;
    }
}

module.exports = new MessageWriter();