export type competenceType = {
    competence_id: number;
    categorie: string;
    titre: string;
    svgLien: string;
}

export type catCompetence = {
    web: competenceType[];
    appli: competenceType[];
    db: competenceType[];
}