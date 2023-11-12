import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>MY TASKS</h1>
      <ul className={styles.navbarList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="completed">Completed</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;