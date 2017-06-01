/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */
let Container = require('./Container');

class MessageWriter extends Container {
    constructor() {
        super();
        let componentElement = document.getElementById('messageWriter');
        this.text = this.getElementById(componentElement, 'messageInput');
        this.submit = this.getElementById(componentElement.querySelectorAll('input[type=submit]'));
        console.log(this.submit);
        this.submit[0].onclick = this.onSubmit.bind(this);
    }

    getElementById(node, id) {
        if (node.id === id) {
            return node;
        }

        var target;

        node = node.firstChild;
        while (node) {
            target = this.getElementById(node, id);
            if (target) {
                return target;
            }

            node = node.nextSibling;
        }

        return undefined;
    }

    onSubmit() {
        let text = this.text.value;
        this.messageDisplay(`User has written "${text}"`);
        // to prevent reloading page
        return false;
    }
}

module.exports = new MessageWriter();