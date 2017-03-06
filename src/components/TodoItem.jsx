import React from 'react';

class TodoItem extends React.Component {
  render() {
    return <li>
              <span style={{
                textDecoration: this.props.done ? 'line-through' : 'none'
              }}>{ this.props.name } </span>
              <a href="#" onClick={this.props.onToggleDone}>{ this.props.done ? 'Mark as not done' : 'Mark as done' }</a>
               &nbsp;
              <a href="#" onClick={this.props.onRemove}>Remove</a>
            </li>;
  }
}

export default TodoItem;
