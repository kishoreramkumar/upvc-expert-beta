import { Component, createRef } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./ContactUsForm.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";

class ContactUsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.wrapperRef = createRef();
  }

  componentDidMount() {
    this.setState({ ...this.props.value });
  }

  componentWillUnmount() {
    this.props.setValue && this.props.setValue(this.state);
  }

  setStateValue = (e, name, isCheckNull = true) => {
    if (isCheckNull && e.target.value) {
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
    const isBtnEnabled =
      this.state.siteArea &&
      this.state.siteType &&
      this.state.floors &&
      this.state.noCars &&
      this.state.noBikes &&
      this.state.budget &&
      this.state.balcony &&
      this.state.plan;
    return (
      <>
        <SectionTitle title={"Contact Us"} type="h2" />
        <div className={styles.contentAdLabel}>
          Our expert will reach you soon :)
        </div>
        <div className={styles.StepOneWrapper} ref={this.wrapperRef}>
          <div className={styles.content}>
            <div className={styles.FormRow}>
              <Input
                label="User Name"
                placeHolder="ex. Adams Nicholas"
                type="text"
                onChange={(e) => {
                  this.setStateValue(e, "userName", false);
                }}
                value={this.state.userName}
              />
            </div>
            <div className={styles.FormRow}>
              <Input
                label="Email"
                placeHolder="ex. abc.def@xyz.com"
                type="text"
                onChange={(e) => {
                  this.setStateValue(e, "email", false);
                }}
                value={this.state.email}
              />
            </div>
            <div className={styles.FormRow}>
              <div style={{ padding: "0 2% 1% 0" }}>+91</div>{" "}
              <Input
                label="Number"
                placeHolder="ex. 20000"
                type="number"
                onChange={(e) => {
                  this.setStateValue(e, "no", false);
                }}
                value={this.state.no}
              />
            </div>
          </div>
          <div className={styles.footer}>
            <Button
              onClick={this.props.onNextClick}
              customClass={styles.button}
              disabledClass={styles.disabledButton}
            >
              Submit
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUsForm;
