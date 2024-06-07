import { ReactElement } from "react";
import styles from "../UI/Badge.module.css";

interface props {
  icon: ReactElement;
  color: string;
}

const Badge = ({ icon, color }: props) => {
  return (
    <span style={{ borderColor: color }} className={styles.circle}>
      {icon}
    </span>
  );
};

export default Badge;
