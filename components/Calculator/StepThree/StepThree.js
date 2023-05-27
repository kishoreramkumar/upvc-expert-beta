import { Component, createRef } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import styles from "./StepThree.module.scss";
import { validateEmail } from "../../../utils";
class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.wrapperRef = createRef();
  }

  componentDidMount() {
    this.wrapperRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    this.setState({ ...this.props.value });
  }

  componentWillUnmount() {}

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
    const isEmailValid = validateEmail(this.state.email);
    const isBtnEnabled =
      isEmailValid &&
      this.state.no &&
      this.state.no.toString().length === 10 &&
      this.state.userName;
    return (
      <div className={styles.StepOneWrapper} ref={this.wrapperRef}>
        <div className={styles.header}>Step 3: Contact Details</div>
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
              type="email"
              onChange={(e) => {
                this.setStateValue(e, "email", false);
              }}
              value={this.state.email}
            />
          </div>
          <div className={styles.FormRow}>
            +91{" "}
            <Input
              label="Number"
              placeHolder="ex. 999999999"
              minLength={10}
              maxLength={10}
              type="tel"
              onChange={(e) => {
                this.setStateValue(e, "no", false);
              }}
              value={this.state.no}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <Button onClick={this.props.onPrevClick} customClass={styles.button}>
            Previous
          </Button>
          <Button
            disabled={!isBtnEnabled}
            onClick={() => {
              this.props.setValue(this.state);
              this.props.onNextClick(this.state);
            }}
            customClass={styles.button}
            disabledClass={styles.disabledButton}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default StepThree;
