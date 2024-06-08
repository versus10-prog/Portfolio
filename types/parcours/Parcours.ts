export type ParcoursType = {
    parcours_id: number;
    nom: string;
    date_debut: Date;
    date_fin: Date;
    description: string;
    type: string;
    svgLien: string;
}

export type ParcoursData = {
    scolaire: ParcoursType[],
    professionnel: ParcoursType[]
}