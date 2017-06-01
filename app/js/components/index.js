/**
 * Created by rasulniyazimbetov on 2017-06-01.
 */
// all our components are singleton. assuming all components are unique on their functionality
// it should be enough for small project.
// On load they already grab html node that they need
// so we don't have to do anything expect importing them here
// they talk each other through broadcasting different states.
// if component needs to do something as reaction, it can register state
// and add callback to that
module.exports = {
    buttonCLicker: require('./buttonClicker'),
    messageDisplay: require('./messageDisplay'),
    messageWriter: require('./messageWriter'),
    errorHandler: require('./errorHandler')
};