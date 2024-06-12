"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./projets.module.css";
import axios from "axios";
import { ProjetsType } from "../../../types/projets/Projets";
import ProjetItem from "../../../components/projetItem/ProjetItem";
import Link from "next/link";

export default function Projets() {
  const [projet, setProjets] = useState<ProjetsType[]>([]);

  const router = useRouter();

  useEffect(() => {
    axios
      .get(`/api/projets`)
      .then((response) => {
        console.log(response);
        setProjets(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {projet.map((projetItem, index) => (
        <Link key={projetItem.projet_id} href={`/projet/${projetItem.projet_id.toString()}`} className={styles.titre}>
          <ProjetItem
            key={projetItem.projet_id}
            projet={projetItem}
            inverse={index % 2 === 0}
          />
        </Link>
      ))}
    </div>
  );
}
