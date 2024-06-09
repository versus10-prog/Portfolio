import React from "react";
import styles from "./detail_item.module.css";
import { ProjetsType } from "../../types/projets/Projets";
import { Technologie } from "../../types/technologie/Technologie";
import { DetailProjet } from "../../types/projets/DetailProjet";

const DetailItem = ({ detail }: { detail: DetailProjet }) => {
  return (
    <div className={styles.forme}>
      <svg className={styles.svg} width="280" height="600" viewBox="0 0 280 602" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 461.118C0 479.561 3.6803 497.929 10.745 514.966V514.966C58.9412 631.191 224.73 630.756 270.451 513.535V513.535C276.762 497.357 280 480.143 280 462.777V139.107C280 115.571 274.042 92.4177 262.681 71.8053V71.8053C210.47 -22.9207 74.1035 -23.2321 19.4195 70.0878V70.0878C6.79096 91.6387 0 116.395 0 141.373V461.118Z" fill="#D9D9D9"/>
</svg>

      <p className={styles.titre}>{detail.titre}</p>
      <img className={styles.image} src={detail.imageLien}/>
      <p className={styles.description}>{detail.description}</p>
    </div>
  );
};

export default DetailItem;
