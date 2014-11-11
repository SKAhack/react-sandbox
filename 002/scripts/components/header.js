var React = require('react');
var Action = require('../action');
var TextInput = require('./text-input.js');

var Header = React.createClass({
  render: function() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this._onSave}
        />
      </header>
    );
  },

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
  _onSave: function(text) {
    if (text.trim()){
      Action.create(text);
    }
  }

});

module.exports = Header;
