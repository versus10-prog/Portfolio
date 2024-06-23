"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./projets.module.css";
import axios from "axios";
import { ProjetsType } from "../../../types/projets/Projets";
import ProjetItem from "../../../components/projetItem/ProjetItem";
import Link from "next/link";
import Loading from "../../../components/Loading/Loading";

export default function Projets() {
  const [projet, setProjets] = useState<ProjetsType[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    axios
      .get(`/api/projets`)
      .then((response) => {
        console.log(response);
        setProjets(response.data);
        if (response.data.length !== 0 ){
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
    {projet.map((projetItem, index) => (
        <Link key={projetItem.projet_id} href={`/projet/${projetItem.projet_id.toString()}`} className={styles.titre}>
          <ProjetItem
            key={projetItem.projet_id}
            projet={projetItem}
            inverse={index % 2 != 0}
          />
        </Link>
      ))}
    </div>
  );
}
