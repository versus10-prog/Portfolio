"use client";

import { useRouter } from "next/navigation";
import styles from "./projet.module.css";
import React from "react";
import { DetailProjet } from "../../../../types/projets/DetailProjet";
import { CompleteProjet } from "../../../../types/projets/Projets";
import { Technologie } from "../../../../types/technologie/Technologie";

export default function Projets() {
  const router = useRouter();

  // const techno: Technologie = {
  //   techno_id: 1,
  //   nom: "React JS",
  //   image: "\\assets\\svg\\react.svg",
  //   description: "hhhhhhhhhhhhhhhhhh",
  // };
  // const detailProjet: DetailProjet = {
  //   detail_projet_id: "1",
  //   description:
  //     "n site web, site Web1,2 ou simplement site3, est un ensemble de pages web et de ressources reliées par des hyperliens, défini et accessible par une adresse web. Un site est développé à l'aide de langages de programmation web, puis hébergé sur un serveur web accessible via le réseau mondial Internet, un intranet local, ou n'importe quel autre réseau, tel que le réseau Tor. L'ensemble des sites web publics constituent le World Wide Web. En 30 ans environ (de 1992 à 2023), le nombre de sites Web en ligne est passé de 10 à plus de 1,88 milliards, répertoriés par les moteurs de recherche selon Netcraft et l'algorithme Worldometer. Et un nombre actuellement indéterminé de sites non répertoriés existe (dark web...) ; mais en 2022, 75 % étaient jugés inactifs (momentanément ou non) ou étaient des « noms de domaines parqués »4. Les GAFAM et notamment Google, YouTube et Facebook sont les plus consultés (ex. : plusieurs dizaines de milliards de visites en mai 2023, selon SimilarWeb)5.",
  //   titre: "Dashboard",
  //   image: "\\assets\\images\\testImage.png",
  // };
  // const projet: CompleteProjet = {
  //   projet_id: "1",
  //   nom: "4kiks",
  //   titre: "Site de vente en ligne",
  //   lien: "https://chatgpt.com/?model=auto",
  //   description:
  //     "n site web, site Web1,2 ou simplement site3, est un ensemble de pages web et de ressources reliées par des hyperliens, défini et accessible par une adresse web. Un site est développé à l'aide de langages de programmation web, puis hébergé sur un serveur web accessible via le réseau mondial Internet, un intranet local, ou n'importe quel autre réseau, tel que le réseau Tor. L'ensemble des sites web publics constituent le World Wide Web. En 30 ans environ (de 1992 à 2023), le nombre de sites Web en ligne est passé de 10 à plus de 1,88 milliards, répertoriés par les moteurs de recherche selon Netcraft et l'algorithme Worldometer. Et un nombre actuellement indéterminé de sites non répertoriés existe (dark web...) ; mais en 2022, 75 % étaient jugés inactifs (momentanément ou non) ou étaient des « noms de domaines parqués »4. Les GAFAM et notamment Google, YouTube et Facebook sont les plus consultés (ex. : plusieurs dizaines de milliards de visites en mai 2023, selon SimilarWeb)5.",
  //   presentation:
  //     "Le World Wide Web (WWW) a été créé en 1989 par l'ingénieur anglais du CERN, Tim Berners-Lee6",
  //   image: "\\assets\\images\\testImage.png",
  //   techno: [techno, techno, techno, techno],
  //   detail_projet: [detailProjet, detailProjet],
  // };

  // return (
  //   <div className={styles.projet}>
  //     <div className={styles.intro}>
  //       <h1 className={styles.nom}>{projet.nom}</h1>
  //       <h2 className={styles.titre}>{projet.titre}</h2>
  //       <img src={projet.image} className={styles.image}/>
  //       <p className={styles.description}>{projet.description}</p>
  //     </div>
  
  //     {/* technologie */}
  //     <div className={styles.technos}>
  //       {projet.techno?.map((t, index) => (
  //         <div key={t.techno_id} className={styles.techno}>
  //           <img src={t.image} className={styles.technoImage} alt={`${t.nom} logo`} />
  //           <p className={styles.technoNom}>{t.nom}</p>
  //         </div>
  //       ))}
  //     </div>
  
  //     {/* detail Projet */}
  //     <div className={styles.detailProjet}>
  //       {projet.detail_projet?.map((detail, index) => {
  //         const i = index % 2 === 0;
  //         return (
  //           <div
  //             key={detail.detail_projet_id}
  //             className={`${styles.detail} ${i ? styles.gauche : styles.droite}`}
  //           >
  //             {i ? (
  //               <>
  //                 <div className={styles.detailContent}>
  //                 <h2 className={styles.detailTitre}>{detail.titre}</h2>
  //                   <img src={detail.image} className={styles.detailImage} alt={detail.titre} />
                    
  //                 </div>
  //                 <p className={styles.detailDescription}>{detail.description}</p>
  //               </>
  //             ) : (
  //               <>
  //                 <div className={styles.detailContent}>
  //                 <h2 className={styles.detailTitre}>{detail.titre}</h2>
  //                   <p className={styles.detailDescription}>{detail.description}</p>
  //                 </div>
  //                 <img src={detail.image} className={styles.detailImage} alt={detail.titre} />

  //               </>
  //             )}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

  
}  