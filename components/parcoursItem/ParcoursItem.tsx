import React from "react";
import styles from "./parcours_item.module.css";
import { ParcoursType } from "../../types/parcours/Parcours";

const ParcoursItem = ({
  parcours,
  inverse,
  debut,
  type,
  fin,
}: {
  parcours: ParcoursType;
  inverse: boolean;
  debut: boolean;
  fin: boolean;
  type: boolean;
}) => {
  const dateDebut = new Date(parcours.date_debut);
  const dateFin = new Date(parcours.date_fin);
  
  function obtenirMoisEnLettre(date: Date) {
      const mois = [
          "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
          "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
      ];
      return mois[date.getMonth()];
  }
  
  const dateDebutFormatee = obtenirMoisEnLettre(dateDebut) + ' ' + dateDebut.getFullYear();

  const dateFinFormatee = obtenirMoisEnLettre(dateFin) + ' ' + dateFin.getFullYear();
  
  return (
    <div className={`${styles.block} 
    ${debut && type ? styles.firstLine : ""} 
    ${fin && !type ? styles.lastLine : ""} 
    ${inverse ? styles.inverseBlock : ""}`}>

      <div className={styles.compense}>

      </div>
      <div className={styles.ligne}>
        <div className={styles.svgIconContainer}>
          <img
            src="/assets/svg/parcours.svg"
            className={`${styles.svg} ${inverse ? styles.inverse : ""}`}
          />
          <img src={parcours.svgLien} className={styles.svgIcon} />
        </div>
      </div>
      <div className={`${styles.info} ${inverse ? styles.inverse : ""}`}>
        <div className={`${styles.contenue} ${inverse ? styles.inverse : ""}`}>
          <div className={styles.titreDiv}>
            <p className={styles.nom}>{parcours.nom}</p>
            <p className={styles.titre}>{parcours.titre}</p>
          </div>
          <p className={styles.description}>{parcours.description}</p>
          <div className={styles.dateDiv}>
            <p className={styles.date}>{dateDebutFormatee}</p>
            <p className={styles.date}>{dateFinFormatee}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcoursItem;
