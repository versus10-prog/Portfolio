"use client";

import { useRouter } from "next/router";
import { ParcoursData, ParcoursType } from "../../../types/parcours/Parcours";
import styles from "./parcours.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ParcoursItem from "../../../components/parcoursItem/ParcoursItem";
import Loading from "../../../components/Loading/Loading";

export default function Parcours() {


  const [parcoursScolaire, setParcoursScloaire] = useState<ParcoursType[]>([]);
  const [parcoursPro, setParcoursPro] = useState<ParcoursType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/parcours`)
      .then((response) => {
        console.log(response);
        setParcoursScloaire(response.data.scolaire);
        setParcoursPro(response.data.professionnel)
        if (response.data.professionnel.length !== 0 && response.data.scolaire.length !== 0){
          setLoading(false)
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <div>
      {loading ? (
      <Loading/>
    ):(
      false
    )}
     <div className={styles.parcours}>
      <div className={styles.scolaire}>
        <p className={styles.titre}>Mes Etudes</p>

        {parcoursScolaire.map((parcoursItem, index) => (
          <ParcoursItem
            key={parcoursItem.parcours_id}
            parcours={parcoursItem}
            inverse={index % 2 === 1}
            debut={index === 0}
            type={true}
            fin={index === parcoursScolaire.length - 1}
          />
        ))}
        <div className={styles.tirets}>
          <div className={styles.tiret}></div>
          <div className={styles.tiret}></div>
          <div className={styles.tiret}></div>
          <div className={styles.tiret}></div>
          <div className={styles.tiret}></div>
        </div>
      </div>

      <div className={styles.professionnel}>
        <p className={styles.titre}>Mon Expérience</p>
        <div className={styles.tirets}>
          <div className={styles.tiretPro}></div>
          <div className={styles.tiretPro}></div>
          <div className={styles.tiretPro}></div>
          <div className={styles.tiretPro}></div>
          <div className={styles.tiretPro}></div>
        </div>

        {parcoursPro.map((parcoursItem, index) => (
          <ParcoursItem
            key={parcoursItem.parcours_id}
            parcours={parcoursItem}
            inverse={index % 2 === 1}
            debut={index === 0}
            type={false}
            fin={index === parcoursPro.length - 1}
          />
        ))}


      </div>
    </div>
    </div>
   
  );
}
