import styles from "./RulesModal.module.css";
import { rules } from "../assets/icons/rules";
import { iconClose } from "../assets/icons/iconСlose";

type props = {
  onCloseModal: () => void;
};

const RulesModal = ({ onCloseModal }: props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.rules}>
        <button className={styles.closeButton} onClick={onCloseModal}>
          {iconClose}
        </button>
        <span className={styles.rulesImage}>{rules}</span>
      </div>
    </div>
  );
};

export default RulesModal;
