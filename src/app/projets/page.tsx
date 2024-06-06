"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styles from "./projets.module.css";

export default function Projets() {
  const router = useRouter();
  const image = {
    image_id: 1,
    lien: "\\assets\\svg\\react.svg",
  };
  const techno = {
    techno_id: 1,
    nom: "React JS",
    image: image,
  };
  const proj = {
    projet_id: 1,
    nom: "4kiks",
    titre: "Site de vente en ligne",
    lien: "https://chatgpt.com/?model=auto",
    description:
      "n site web, site Web1,2 ou simplement site3, est un ensemble de pages web et de ressources reliées par des hyperliens, défini et accessible par une adresse web. Un site est développé à l'aide de langages de programmation web, puis hébergé sur un serveur web accessible via le réseau mondial Internet, un intranet local, ou n'importe quel autre réseau, tel que le réseau Tor. L'ensemble des sites web publics constituent le World Wide Web. En 30 ans environ (de 1992 à 2023), le nombre de sites Web en ligne est passé de 10 à plus de 1,88 milliards, répertoriés par les moteurs de recherche selon Netcraft et l'algorithme Worldometer. Et un nombre actuellement indéterminé de sites non répertoriés existe (dark web...) ; mais en 2022, 75 % étaient jugés inactifs (momentanément ou non) ou étaient des « noms de domaines parqués »4. Les GAFAM et notamment Google, YouTube et Facebook sont les plus consultés (ex. : plusieurs dizaines de milliards de visites en mai 2023, selon SimilarWeb)5.",
    presentation:
      "Le World Wide Web (WWW) a été créé en 1989 par l'ingénieur anglais du CERN, Tim Berners-Lee6",
    image: ["\\assets\\images\\testImage.png"],
    techno: [techno, techno],
  };

  const data = [proj, proj, proj];

  return data?.map((projet, index) => {
    const i = index % 2 === 0;
    return (
      <a key={proj.projet_id} href={`/projet/${proj.projet_id}`}>
        <div
          className={`${styles.projet} ${
            i ? styles.imageGauche : styles.imageDroite
          }`}
          key={projet.projet_id}
        >
          {i ? (
            <div className={styles.imageContent}>
              <img src={projet.image[0]} className={styles.image} />
            </div>
          ) : (
            //technologie
            <div className={styles.technoContent}>
              {projet.techno?.map((t, index) => (
                <div key={t.techno_id} className={styles.techno}>
                  <p className={styles.technoNom}>{t.nom}</p>
                  <img src={t.image.lien} className={styles.technoImage} />
                </div>
              ))}
            </div>
          )}
          <div className={styles.centerContent}>
            <h2 className={styles.nom}>{projet.nom}</h2>
            <h3 className={styles.titre}>{projet.titre}</h3>
            <p className={styles.presentation}>{projet.presentation}</p>
          </div>
          {i ? (
            //technologie
            <div className={styles.technoContent}>
              {projet.techno?.map((t, index) => (
                <div key={t.techno_id} className={styles.techno}>
                  <img src={t.image.lien} className={styles.technoImage} />
                  <p className={styles.technoNom}>{t.nom}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.imageContent}>
              <img src={projet.image[0]} className={styles.image} />
            </div>
          )}
        </div>
      </a>
    );
  });
}
