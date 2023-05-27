import { Component, createRef } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./ContactForm.module.scss";
import axios from "axios";
import { withRouter } from "next/router";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../firebase";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      no: "",
      loading: false,
    };
    this.wrapperRef = createRef();
  }

  componentWillUnmount() { }

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

  onInputSubmit = async () => {
    this.setState({ loading: true });
    const date = new Date().toString();

    try {
      await addDoc(collection(firestore, `users`), {
        number: this.state.no,
        name: this.state.userName,
        date: date,
      });

      const res = await axios.post("/api/email", {
        number: this.state.no,
        name: this.state.userName,
        pageUrl: this?.props?.router?.asPath
      });

      this.setState({ loading: false });
      this.props.router.push("thank-you");
    } catch (e) {
      this.setState({ loading: false });
      console.log(e);
    }
  };

  render() {
    const isBtnEnabled =
      this.state.no &&
      this.state.no.toString().length === 10 &&
      this.state.userName;
    return (
      <div className={styles.StepOneWrapper} ref={this.wrapperRef}>
        <div className={styles.header}>
          Get Free Consultation{" "}
          <div
            style={{
              padding: "0rem 0.5rem",
              color: "black",
              cursor: "pointer",
            }}
            onClick={this.props.onClose}
          >
            x
          </div>
        </div>
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
            +91{" "}
            <Input
              label="Number"
              placeHolder="ex. 999999999"
              minLength={10}
              maxLength={10}
              type="tel"
              onChange={(e) => {
                if (!isNaN(e.target.value)) {
                  this.setStateValue(e, "no", false);
                }
              }}
              value={this.state.no}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <Button
            disabled={!isBtnEnabled}
            onClick={() => {
              if (!this.state.loading) this.onInputSubmit();
            }}
            customClass={`${styles.button} ${this.state.loading ? styles.loading : ""
              }`}
            disabledClass={styles.disabledButton}
          >
            Book Free Consultation
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(ContactForm);
