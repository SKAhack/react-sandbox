var AppDispatcher = require('./app-dispatcher');
var Constants = require('./constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _todos = {};

/**
 * Create a TODO item.
 * @param {string} text The content of the TODO
 */
function create(text) {
  // Using the current timestamp in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

/**
 * Delete a TODO item.
 * @param {string} id
 */
function destroy(id) {
  delete _todos[id];
}

var Store = assign({}, EventEmitter.prototype, {
  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function(){
    return _todos;
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }
});


AppDispatcher.register(function(payload){
  var action = payload.action;
  var text;

  switch(action.actionType) {
  case Constants.TODO_CREATE:
    text = action.text.trim();
    if (text !== '') {
      create(text);
    }
    break;

  case Constants.TODO_DESTROY:
    destroy(action.id);
    break;

    // add more cases for other actionTypes, like TODO_UPDATE, etc.
  }
  Store.emitChange();

  return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = Store;
