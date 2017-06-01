/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */

let _ = require('lodash');
let broadcaster = require('../broadcaster');
let _const = require('../const');

// parent class that all other components will inherit
class Container {
    constructor(viewId) {
        // grab all html nodes
        this.grabView.bind(this)(viewId);
    }

    /***
     * @param viewId
     * get's element id on view and grabs it from document
     */
    grabView(viewId) {
        if (_.isString(viewId)) {
            viewId.length && (this.element = document.getElementById(viewId));
        } else if (_.isArray(viewId)) {
            // we can also send array of ids. in this case we create elements array
            // and stick everything in normalized way with ids
            this.elements = {};
            viewId.forEach(elementId => {
                this.elements[elementId] = document.getElementById(elementId);
            });
        }
    }

    // each component can register their state when they inherit
    register(stateName, callback) {
        broadcaster.register(stateName, callback);
    }

    // only state reaction component we have now is message display component
    // and all other components can broadcast to that.
    // so we can add method for that to parent class
    messageDisplay(value) {
        broadcaster.broadcast(_const.MESSAGE_DISPLAY, value);
    }

    broadcast(stateName, value) {
        broadcaster.broadcast(stateName, value);
    }
}

module.exports = Container;