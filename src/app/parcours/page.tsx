import { ParcoursType } from "../../../types/parcours/Parcours";
import styles from "./parcours.module.css";
import React from "react";

export default function Parcours() {
  const parcoursScolaire: ParcoursType = {
    parcours_id: "1",
    nom: "BUT",
    date_debut: "10/02/2024",
    date_fin: "12/04/2024",
    description:
      "Le World Wide Web (WWW) a été créé en 1989 par l'ingénieur anglais du CERN, Tim Berners-Lee6",
    type: "scolaire",
    svg: "\\assets\\svg\\react.svg",
  };

  const liste_parcours: ParcoursType[] = [
    parcoursScolaire,
    parcoursScolaire,
    parcoursScolaire,
  ];

  return (
    <div className={styles.parcours}>
      <h1 className={styles.titre}>Scolaire</h1>
      <div className={styles.content}>
        {liste_parcours?.map((p, index) => (
          <div
            key={p.parcours_id}
            className={`${styles.block} ${index === 0 ? styles.firstLine : ""}`}
          >
            <div className={styles.ligne}>
              <div className={styles.svgIconContainer}>
                <img src={p.svg} className={styles.svgIcon} alt="Icon" />
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.contenue}>
                <h3 className={styles.nom}>{p.nom}</h3>
                <p className={styles.date}>Debut : {p.date_debut}</p>
                <p className={styles.date}>Fin : {p.date_fin}</p>
              </div>
              <div className={styles.divDescription}>
                <p className={styles.description}>{p.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.tirets}>
          <div className={styles.tiret}></div>
          <div className={styles.tiret}></div>
          <div className={styles.tiret}></div>
          <div className={styles.tiret}></div>
          <div className={styles.tiret}></div>
        </div>
      </div>

      <h1 className={styles.titre}>Professionnel</h1>
      <div className={styles.content}>
        <div className={styles.tirets}>
          <div className={styles.tiretPro}></div>
          <div className={styles.tiretPro}></div>
          <div className={styles.tiretPro}></div>
          <div className={styles.tiretPro}></div>
          <div className={styles.tiretPro}></div>
        </div>
        {liste_parcours?.map((p, index) => (
          <div
            key={p.parcours_id}
            className={`${styles.block} ${
              index === liste_parcours.length-1 ? styles.firstLinePro : ""
            }`}
          >
            <div className={styles.ligne}>
              <div className={styles.svgIconContainer}>
                <img src={p.svg} className={styles.svgIcon} alt="Icon" />
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.contenue}>
                <h3 className={styles.nom}>{p.nom}</h3>
                <p className={styles.date}>Debut : {p.date_debut}</p>
                <p className={styles.date}>Fin : {p.date_fin}</p>
              </div>
              <div className={styles.divDescription}>
                <p className={styles.description}>{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pro}></div>
    </div>
  );
}
