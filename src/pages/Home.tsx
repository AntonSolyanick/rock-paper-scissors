import { FC } from "react";
import { motion } from "framer-motion";

import { useAppDispatch } from "../hooks";
import { userPick, startGame, resetState } from "../store/gameSlice";
import { pickOtions } from "../assets/options";
import "../App.css";
import styles from "../pages/Home.module.css";
import { NavLink } from "react-router-dom";
import Badge from "../components/UI/Badge";
import { pentagon } from "../assets/icons/pentagon";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <section className="container--buttons">
        {pickOtions.map((option, i) => {
          const style = { "--i": i } as React.CSSProperties;
          return (
            <NavLink
              to="/comparison"
              key={option.name}
              className="button"
              style={style}
              onClick={() => {
                dispatch(resetState());
                dispatch(userPick(option));
                setTimeout(() => {
                  dispatch(startGame());
                }, 1200);
              }}
            >
              <Badge icon={option.icon} color={option.color}></Badge>
            </NavLink>
          );
        })}
        <span className={styles.pentagon}>{pentagon}</span>
      </section>
    </motion.main>
  );
};

export default Home;
