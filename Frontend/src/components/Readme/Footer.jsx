import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css";

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/deepaknagarjiobp?trk=blended-typeahead"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com" icon={BsGithub} />
          <Footer.Icon
            href="mailto:rohitdhakad@gmail.com"
            icon={BsEnvelope}
          />
          <Footer.Icon href="https://t.me/rohitdhakad369" icon={BsTelegram} />
          {/* <Footer.Icon
            href=""
            icon={BsWhatsapp}
          /> */}
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
