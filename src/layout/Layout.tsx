import { useAppSelector } from "../hooks";
import ScoreBoard from "../components/UI/ScoreBoard";
import styles from "../layout/Layout.module.css";
import RulesModal from "../components/RulesModal";
import { useState } from "react";

interface propsLayout {
  children: React.ReactNode;
}

const Layout = ({ children }: propsLayout) => {
  const [showModal, setShowModal] = useState(false);

  const gameState = useAppSelector((state) => state.game);
  return (
    <>
      {showModal && <RulesModal onCloseModal={() => setShowModal(false)} />}
      <header className={styles.header}>
        <h1>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
          <br />
          LIZZARD
          <br />
          SPOCK
        </h1>
        <div>
          <ScoreBoard
            userScore={gameState.userScore}
            houseScore={gameState.houseScore}
          />
        </div>
      </header>
      {children}
      <footer>
        <button onClick={() => setShowModal((prevState) => !prevState)}>
          Rules
        </button>
      </footer>
    </>
  );
};

export default Layout;
