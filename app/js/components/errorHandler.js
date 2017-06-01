/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */
let Component = require('./component');
let _const = require('../const');

class ErrorHandler extends Component {

    constructor() {
        super();
        this.register(_const.ERROR_HANDLING, this.printError);
    }

    printError(errorMessage) {
        console.log(errorMessage);
    }
}

module.exports = new ErrorHandler();
