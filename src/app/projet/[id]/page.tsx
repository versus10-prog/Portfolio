"use client";

import { useParams, useRouter } from "next/navigation";
import styles from "./projet.module.css";
import React, { useEffect, useState } from "react";
import { CompleteProjet } from "../../../../types/projets/Projets";
import axios from "axios";
import TechnoItem from "../../../../components/technoItem/TechnoItem";
import DetailItem from "../../../../components/detailItem/DetailItem";

type paramType = {
  id?: string;
};

export default function Projet() {
  const router = useRouter();
  const param: paramType | null = useParams();
  const [projet, setProjets] = useState<CompleteProjet>();


  useEffect(() => {
    axios
      .get(`/api/projets?id=${param?.id}`)
      .then((response) => {
        console.log(response);
        setProjets(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles.projet}>
      <div className={styles.infos}>
        <div className={styles.tete}>
          <p className={styles.nom}>{projet?.nom}</p>
          <p className={styles.titre}>{projet?.titre}</p>
        </div>
        <div className={styles.content}>
          <p className={styles.description}>{projet?.description}</p>
          <div className={styles.divImage}>
            <img
              className={styles.imageProjet}
              src={projet?.imageLien}
              alt={`image projet ${projet?.nom}`}
            />
          </div>
        </div>
      </div>
      <div className={styles.technologies}>
        {projet?.techno.map((techno) => (
          <TechnoItem key={techno.techno_id} techno={techno}/>
        ))}
      </div>
      <div className={styles.details}>
        {projet?.detail_projet.map((detail) =>(
          <div className={styles.detail} key={detail.detail_projet_id}>
            <DetailItem detail={detail}/>
          </div>
        ))}
      </div>
    </div>
  );

}
