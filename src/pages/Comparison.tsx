import { FC, useEffect } from "react";
import { motion } from "framer-motion";

import { useAppSelector } from "../hooks";
import { pickOtions } from "../assets/options";
import { option } from "../assets/options";
import { useNavigate } from "react-router-dom";
import Badge from "../components/UI/Badge";
import styles from "./Comparison.module.css";

const Comparison: FC = () => {
  const gameState = useAppSelector((state) => state.game);
  const navigate = useNavigate();
  useEffect(() => {
    if (!gameState.userPick) {
      navigate("/");
    }
  }, []);

  const userPick = pickOtions.filter(
    (option: option) => option.name === gameState.userPick?.name
  )[0];
  const housePick = pickOtions.filter(
    (option: option) => option.name === gameState.housePick?.name
  )[0];

  return (
    <motion.section
      className={styles.container}
      initial={{ width: 0, left: "-300px" }}
      animate={{
        width: "86vw",
        marginLeft: "7vw",
        marginRight: "7vw",
        left: "0px",
        right: "0px",

        transition: { duration: 0.7 },
      }}
      exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}
    >
      <div className={styles.badgeContainer}>
        {gameState.gameResult === "YOU WIN" && (
          <span className={styles.circle}></span>
        )}
        <p>YOUR PICK</p>
        <Badge icon={userPick?.icon} color={userPick?.color}></Badge>
      </div>
      <div className={styles.badgeContainer}>
        {gameState.gameResult && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.1 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            <p className={styles.gameResultText}>{gameState.gameResult}</p>
            <motion.button
              className={styles.button}
              onClick={() => navigate("/")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
              PLAY AGAIN
            </motion.button>
          </motion.span>
        )}
      </div>
      <div className={styles.badgeContainer}>
        {gameState.gameResult === "YOU LOOSE" && (
          <span className={styles.circle}></span>
        )}
        <p>HOUSE PICK</p>
        <Badge icon={housePick?.icon} color={housePick?.color}></Badge>
      </div>
    </motion.section>
  );
};

export default Comparison;
