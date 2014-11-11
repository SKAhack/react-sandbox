var AppDispatcher = require('./app-dispatcher');
var Constants = require('./constants');

var Action = {
  /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.handleViewAction({
      actionType: Constants.TODO_CREATE,
      text: text
    });
  }
};

module.exports = Action;
