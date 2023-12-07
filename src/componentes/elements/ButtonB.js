import styles from "./ButtonB.module.css";
function ButtonB({ text }) {
  return (
    <div>
      <a href="link">
        <button className={styles.btn1}>{text}</button>
      </a>
    </div>
  );
}

export default ButtonB;
