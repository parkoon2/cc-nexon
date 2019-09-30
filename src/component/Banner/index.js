import React from "react";
import "./index.css";
import classNames from "classnames";

class Banner extends React.Component {
  intervalTimer = null;
  setTimer = null;
  maxBanner = this.props.banners.length;

  state = {
    processBar: 0,
    currentBanner: 0,
    currentBackground: null
  };

  componentDidMount() {
    this.startProcess();
  }

  startProcess = () => {
    this.intervalTimer = setInterval(() => {
      // After 5 seconds, we have to make process bar 100%
      this.setState(prevState => {
        return {
          processBar: prevState.processBar + 0.2
        };
      });
    }, 1 * 10);

    this.setTimer = setTimeout(() => {
      this.stopProcess();
      this.nextProcess();
    }, 5 * 1000);
  };

  nextProcess = () => {
    this.startProcess();
    if (this.state.currentBanner < this.maxBanner - 1) {
      this.setState(prevState => {
        return {
          currentBanner: prevState.currentBanner + 1,
          currentBackground: this.props.banners[prevState.currentBanner + 1]
            .background
        };
      });
    } else {
      this.setState({
        currentBanner: 0,
        currentBackground: this.props.banners[0].background
      });
    }
  };

  stopProcess = () => {
    if (this.intervalTimer) {
      this.setState(
        {
          processBar: 0
        },
        () => {
          clearTimeout(this.setTimer);
          clearInterval(this.intervalTimer);
        }
      );
    }
  };

  selectButton = (index, background) => {
    this.setState({
      currentBanner: index,
      currentBackground: background
    });
  };

  renderBanner = () => {
    const { processBar, currentBanner } = this.state;
    return this.props.banners.map(({ background }, index) => (
      <div
        key={index}
        className={classNames("banner-btn", {
          selected: currentBanner === index
        })}
        onClick={this.selectButton.bind(this, index, background)}
      >
        {currentBanner === index && (
          <div
            className="loading-bar"
            style={{ width: `${processBar}%` }}
          ></div>
        )}
      </div>
    ));
  };

  render() {
    const { currentBackground } = this.state;

    return (
      <div
        className="banner"
        onMouseOver={this.stopProcess}
        onMouseLeave={this.startProcess}
        style={{
          background: currentBackground
        }}
      >
        <div className="banner-btns">{this.renderBanner()}</div>
      </div>
    );
  }
}

export default Banner;
