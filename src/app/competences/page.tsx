"use client";

import { useRouter } from "next/router";
import { ParcoursData, ParcoursType } from "../../../types/parcours/Parcours";
import styles from "./competences.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ParcoursItem from "../../../components/parcoursItem/ParcoursItem";
import Loading from "../../../components/Loading/Loading";

export default function Parcours() {


  const [parcoursScolaire, setParcoursScloaire] = useState<ParcoursType[]>([]);
  const [parcoursPro, setParcoursPro] = useState<ParcoursType[]>([]);
  const [loading, setLoading] = useState(true);


  return (
    <div className={styles.content}>
      <div className={styles.ligne}>

        <div className={styles.box}>
          <p className={styles.titre}>Réaliser</p>
          <p className={styles.description}>Développer, c'est-à-dire concevoir, coder, tester et intégrer une solution informatique pour un client et adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)</p>
          <div className={styles.projet}>
            <p className={styles.sousTitre}>Projets associés :</p>
            <p className={styles.nom}>4KICKS</p>
          </div>
          <p className={styles.description}>Création d'un site de vente en ligne.</p>

        </div>
        <div className={styles.box}>
          <p className={styles.titre}>Optimiser</p>
          <p className={styles.description}>Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources... Sélectionner les algorithmes adéquats pour répondre à un problème donné</p>
          <div className={styles.projet}>
            <p className={styles.sousTitre}>Projets associés :</p>
            <p className={styles.nom}>HEALTHNAV</p>
          </div>
          <p className={styles.description}>Recherche du meilleur parcours en fonction de la distance, de la durée ou du risque.</p>

        </div>

      </div>
      <div className={styles.ligne}>
        <div className={styles.box}>
          <p className={styles.titre}>Administrer</p>
          <p className={styles.description}>Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation. Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs</p>
          <div className={styles.projet}>
            <p className={styles.sousTitre}>Projets associés :</p>
            <p className={styles.nom}>PORTFOLIO</p>
          </div>
          <p className={styles.description}>création d'un site, d'une base de données distante, d'un bucket distant, d'un serveur Next Js, configuration des DNS, déploiement du projet avec un nom de domaine.</p>

        </div>
        <div className={styles.box}>
          <p className={styles.titre}>Gérer</p>
          <p className={styles.description}>Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise. Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité</p>
          <div className={styles.projet}>
            <p className={styles.sousTitre}>Projets associés :</p>
            <p className={styles.nom}>4KICKS</p>
          </div>
          <p className={styles.description}></p>

        </div>

      </div>
      <div className={styles.ligne}>
        <div className={styles.box}>
          <p className={styles.titre}>Conduire</p>
          <p className={styles.description}>Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise. Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs</p>
          <div className={styles.projet}>
            <p className={styles.sousTitre}>Projets associés :</p>
            <p className={styles.nom}>InDemat</p>
          </div>
          <p className={styles.description}>Intégrer le fonctionnement de l'entreprise, l'organisation interne et la méthode SCRUM de suivie d'un projet.</p>

        </div>
        <div className={styles.box}>
          <p className={styles.titre}>Collaborer</p>
          <p className={styles.description}>Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique. Situer son rôle et ses missions au sein d’une équipe informatique</p>
          <div className={styles.projet}>
            <p className={styles.sousTitre}>Projets associés :</p>
            <p className={styles.nom}>GEHT KAUFEN</p>
          </div>
          <p className={styles.description}>Analyse des techniques de travail, de la gestion des conflits et de l'organisation à mettre en place pour s'ajuster à la dynamique d'une équipe.</p>

        </div>
      </div>
    </div>
  )
}
