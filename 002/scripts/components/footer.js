var React = require('react');

function getClearCompletedButton(completed) {
  if (completed === 0) {
    return undefined;
  }

  return (
    <button
      id="clear-completed"
      onClick={this._onClearCompletedClick}>
      Clear completed ({completed})
    </button>
  );
}

var Footer = React.createClass({
  render: function() {
    var completed = 0;
    var itemsLeft = 0;
    var itemsLeftPhrase = ( itemsLeft === 1 ? ' item ' : ' items ' ) + 'left';
    var clearCompletedButton = getClearCompletedButton(completed);
    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    );
  },

  /**
   * Event handler to delete all completed TODOs
   */
  _onClearCompletedClick: function() {
  }
});

module.exports = Footer;
