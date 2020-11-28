import React, { Component } from "react";

class TextInput extends Component {
  state = {};
  render() {
    return (
      <>
        {this.props.label && (
          <label
            className="reusable-text-input-label"
            htmlFor={this.props.name}
          >
            {this.props.label}
          </label>
        )}
        <div className="reusable-text-input">
          {this.props.iconClass && (
            <i
              className={`${this.props.iconClass} reusable-text-input-icon`}
            ></i>
          )}
          <input
            className="reusable-text-input-input" 
            type={this.props.type}
            name={this.props.name}
            id={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
          />
        </div>
        {this.props.error && (
          <small className="reusable-text-input-error">
            {this.props.error}
          </small>
        )}
        {this.props.note && (
          <small className="reusable-text-input-note">{this.props.note}</small>
        )}
      </>
    );
  }
}

export default TextInput;
