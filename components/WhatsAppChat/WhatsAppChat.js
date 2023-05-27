import Image from "next/image";
import styles from "./WhatsAppChat.module.scss";
export default function WhatsAppChat() {
  return (
    <div
      className={styles.WhatsAppIconWrapper}
      onClick={() => {
        window.open(`https://wa.me/${process.env.mobileNo}`);
      }}
    >
      <Image
        src={"/assets/images/whatsApp.svg"}
        alt="wap"
        layout="fill"
      ></Image>
    </div>
  );
}
