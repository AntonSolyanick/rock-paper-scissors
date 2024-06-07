import styles from "./ScoreBoard.module.css";

type props = {
  userScore: number;
  houseScore: number;
};

const ScoreBoard = ({ userScore, houseScore }: props) => {
  return (
    <div className={styles.scoreContainer}>
      <div className={styles.scoreCard}>
        <p className={styles.scoreBoardText}>YOUR SCORE</p>
        <p className={styles.score}>{userScore}</p>
      </div>

      <div className={styles.scoreCard}>
        <p className={styles.scoreBoardText}>HOUSE SCORE</p>
        <p className={styles.score}>{houseScore}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
