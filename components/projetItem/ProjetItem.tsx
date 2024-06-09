import React from "react";
import styles from "./projet_item.module.css";
import { ProjetsType } from "../../types/projets/Projets";




const ProjetItem = ({projet, inverse}: {projet: ProjetsType, inverse: boolean}) => {
  return (
    <div className={`${styles.container} ${inverse ? styles.inverse : ""}`}>
      <div className={styles.box1}>
        <div className={`${styles.infos} ${inverse ? styles.inverse : ""}`}>
        <h1 className={styles.nom}>{projet.nom}</h1>
        <h2 className={styles.titre}>{projet.titre}</h2>
        <p className={`${styles.presentation} ${inverse ? styles.inverse : ""}`}>{projet.presentation}</p>
        </div>
      </div>
      <div className={`${styles.box2} ${inverse ? styles.inverse : ""}`}>
        <div className={styles.divImage}>
        <img src={projet.imageLien} className={styles.image}/>
        </div>
      </div>
    </div>
  );
};

export default ProjetItem;