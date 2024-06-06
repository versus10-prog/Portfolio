export type ParcoursType = {
    parcours_id: number;
    nom: string;
    date_debut: string;
    date_fin: string;
    description: string;
    type: string;
    svgLien: string;
}

export type ParcoursData = {
    scolaire: ParcoursType[],
    professionnel: ParcoursType[]
}