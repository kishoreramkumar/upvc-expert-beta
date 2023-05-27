import { Component } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import styles from "./StepOne.module.scss";
import Checkbox from "../../Checkbox/Checkbox";
class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ ...this.props.value });
  }

  componentWillUnmount() {
    this.props.setValue(this.state);
  }

  setStateValue = (e, name, isCheckNull = true) => {
    if (name === "externalStair") {
      this.setState({
        [name]: e.target.checked,
      });
    } else if (isCheckNull && e.target.value) {
      this.setState({
        [name]: e.target.value,
      });
    } else if (!isCheckNull) {
      this.setState({
        [name]: e.target.value,
      });
    }
  };

  render() {
    let needMoreSpace = false;
    if (
      this.state.siteArea &&
      this.state.noCars >= 0 &&
      this.state.noBikes >= 0
    ) {
      const buildUpArea = this.state.siteArea * 0.8;
      const parkingArea =
        (this.state.noCars || 0) * 180 +
        (this.state.noBikes || 0) * 40 +
        (this.state.externalStair ? 80 : 0);
      if (buildUpArea <= parkingArea) {
        needMoreSpace = true;
      }
    }
    const isBtnEnabled =
      this.state.siteArea &&
      this.state.siteType &&
      this.state.floors &&
      this.state.noCars &&
      this.state.noBikes &&
      this.state.budget &&
      this.state.balcony &&
      this.state.plan &&
      this.state.siteArea >= 500 &&
      !needMoreSpace;
    return (
      <div className={styles.StepOneWrapper}>
        <div className={styles.header}>Step 1: Site Details</div>
        <div className={styles.content}>
          <div className={styles.FormRow}>
            <Input
              label="Site Area (Min 500)"
              placeHolder="ex. 1600"
              type="number"
              onChange={(e) => {
                this.setStateValue(e, "siteArea", false);
              }}
              value={this.state.siteArea}
            />{" "}
            Sq.ft
          </div>
          <div className={styles.FormRow}>
            <Dropdown
              label="Site Type"
              placeHolder=""
              options={[
                // { name: "Commercial", value: "Commercial" },
                { name: "Residental", value: "Residental" },
              ]}
              onChange={(e) => {
                this.setStateValue(e, "siteType");
              }}
              value={this.state.siteType}
            />
          </div>
          <div className={styles.FormRow}>
            <Dropdown
              label="Floors"
              placeHolder=""
              options={[
                { name: "G (Only Ground Floor)", value: "0" },
                { name: "G+1", value: "1" },
                { name: "G+2", value: "2" },
                { name: "G+3", value: "3" },
                { name: "G+4", value: "4" },
                { name: "G+5", value: "5" },
              ]}
              onChange={(e) => {
                this.setStateValue(e, "floors");
              }}
              value={this.state.floors}
            />
          </div>
          <div className={styles.FormRow}>
            <Dropdown
              label="Balcony"
              placeHolder=""
              options={[
                { name: "0", value: "G" },
                { name: "1", value: "1" },
                { name: "2", value: "2" },
                { name: "3", value: "3" },
                { name: "4", value: "4" },
              ]}
              onChange={(e) => {
                this.setStateValue(e, "balcony");
              }}
              value={this.state.balcony}
            />
          </div>
          <div style={{ margin: "1rem 0" }}>
            <div style={{ fontSize: "0.9rem" }}>Parking Details :</div>
            <div className={styles.FormRow} style={{ margin: "0.5rem 0 0" }}>
              <div className={styles.FormCol}>
                <Dropdown
                  label="No. of Cars"
                  placeHolder=""
                  options={[
                    { name: "0", value: "0" },
                    { name: "1", value: "1" },
                    { name: "2", value: "2" },
                    { name: "3", value: "3" },
                    { name: "4", value: "4" },
                  ]}
                  onChange={(e) => {
                    this.setStateValue(e, "noCars");
                  }}
                  value={this.state.noCars}
                />
              </div>

              <div className={styles.FormCol}>
                <Dropdown
                  label="No. of Bikes"
                  placeHolder=""
                  options={[
                    { name: "0", value: "0" },
                    { name: "1", value: "1" },
                    { name: "2", value: "2" },
                    { name: "3", value: "3" },
                    { name: "4", value: "4" },
                  ]}
                  onChange={(e) => {
                    this.setStateValue(e, "noBikes");
                  }}
                  value={this.state.noBikes}
                />
              </div>
            </div>
          </div>
          <div className={styles.FormRow}>
            <Input
              label="Budget Estimation"
              placeHolder="ex. 20000"
              type="number"
              onChange={(e) => {
                this.setStateValue(e, "budget", false);
              }}
              value={this.state.budget}
            />{" "}
            .Rs
          </div>
          <div className={styles.FormRow}>
            <Dropdown
              label="Plan for construction"
              placeHolder=""
              options={[
                { name: "Immediate", value: "Immediate" },
                { name: "After one week", value: "After one week" },
                { name: "After one month", value: "After one month" },
                { name: "Within six month", value: "Within six month" },
              ]}
              onChange={(e) => {
                this.setStateValue(e, "plan");
              }}
              value={this.state.plan}
            />
          </div>
          <div className={styles.FormRow} style={{ alignItems: "center" }}>
            <div style={{ marginRight: "0.5rem" }}>
              <Checkbox
                value={this.state.externalStair}
                onChange={(e) => {
                  this.setStateValue(e, "externalStair");
                }}
              />
            </div>
            External stair
            <div>&nbsp;(Optional)</div>
          </div>
          {this.state.siteArea < 500 ? (
            <div style={{ color: "red" }}>
              The minimum site area for construction is 500
            </div>
          ) : (
            needMoreSpace &&
            ((
              <div style={{ color: "red" }}>
                The required parking space is not possible in the given site
                area
              </div>
            ) || <></>)
          )}
        </div>
        <div className={styles.footer}>
          <Button
            onClick={this.props.onNextClick}
            disabled={!isBtnEnabled}
            customClass={styles.button}
            disabledClass={styles.disabledButton}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default StepOne;
