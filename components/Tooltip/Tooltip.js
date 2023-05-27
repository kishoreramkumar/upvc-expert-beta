import React, { PureComponent } from 'react';
import styles from './Tooltip.module.scss';
/*
 position : Top, Bottom, Right, Left
*/
class Tooltip extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      displayTooltip: false
    };
  }

  hideTooltip = () => {
    this.setState({ displayTooltip: false });
  };
  showTooltip = () => {
    this.setState({ displayTooltip: true });
  };

  render() {
    let message = this.props.message;
    let position = this.props.position || 'Bottom';
    let tooltipPosition = styles[`tooltip${position}`];
    return (
      <div className={styles.tooltip} onMouseLeave={this.hideTooltip}>
        {this.state.displayTooltip && (
          <div className={[styles.tooltipBubble, tooltipPosition].join(' ')}>
            <div className={styles.tooltipMessage}>{message}</div>
          </div>
        )}
        <span className={styles.tooltipTrigger} onMouseOver={this.showTooltip}>
          {this.props.children}
        </span>
      </div>
    );
  }
}

export default Tooltip;
