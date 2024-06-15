import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
 

  return (
    <nav className={styles.navbar}>
      <Link href={"/"} className={styles.logo}>
        <img src="/assets/images/logo-violet-magenta-64x64.png" alt="valentin logo" />
      </Link>
      <Link href={"/accueil"} className={styles.titre}>
        <p>Me Connaitre</p>
      </Link>
      <Link href={"/parcours"} className={styles.titre}>
       <p>Mon Parcours</p>
      </Link>
      <Link href={"/projets"} className={styles.titre}>
        <p>Mes Projets</p>
      </Link>
      <div className={styles.switch}>
        <img src="/assets/images/logo-violet-magenta-64x64.png" alt="valentin logo" />
      </div>


    </nav>
  );
};

export default Navbar;
