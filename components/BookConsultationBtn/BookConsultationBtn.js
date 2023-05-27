import { useState } from "react";
import Button from "../Button/Button";
import ContactForm from "../ContactForm/ContactForm";
import Modal from "../Modal/Modal";

import styles from "./BookConsultationBtn.module.scss";

function BookConsultationBtn() {
  const [isModalOpen, toogleModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <Modal>
          <ContactForm onClose={() => toogleModalOpen(false)} />
        </Modal>
      )}
      <Button
        customClass={styles.button}
        onClick={() => {
          toogleModalOpen(true);
        }}
      >
        Book Free Consultation
      </Button>
    </>
  );
}

export default BookConsultationBtn;
