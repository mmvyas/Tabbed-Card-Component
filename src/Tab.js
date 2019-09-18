import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = e => {
    const { label, onClick } = this.props;
    label === "Disabled" ? e.preventDefault() : onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label }
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    if (label === "Disabled") {
      return (
        <Tooltip title="Login to see your previous orders">
          <span>
            <Button
              disabled
              className={className}
              onClick={onClick}
              tabIndex={0}
              style={{ border: "1px solid #ccc" }}
            >
              {label}
            </Button>
          </span>
        </Tooltip>
      );
    }
    return (
      <button className={className} onClick={onClick} tabIndex={0}>
        {label}
      </button>
    );
  }
}

export default Tab;
