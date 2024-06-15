import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";
import { catCompetence, competenceType } from "../../../../types/competences/Competence";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const competenceWeb = await prisma.competences.findMany({
            select: {
                competence_id: true,
                categorie: true,
                titre: true,
                image: {
                    select: {
                        nom: true
                    }
                }
            },
            where: {
                categorie: "web"
            }
        })
        const competenceAppli = await prisma.competences.findMany({
            select: {
                competence_id: true,
                categorie: true,
                titre: true,
                image: {
                    select: {
                        nom: true
                    }
                }
            },
            where: {
                categorie: "appli"
            }
        })
        const competenceDb = await prisma.competences.findMany({
            select: {
                competence_id: true,
                categorie: true,
                titre: true,
                image: {
                    select: {
                        nom: true
                    }
                }
            },
            where: {
                categorie: "db"
            }
        })

        const compDB: competenceType[] = [];
        const compWeb: competenceType[] = [];
        const compAppli: competenceType[] = [];

        competenceAppli.forEach((thisCompetence) => {
            const competence: competenceType = {
                competence_id: thisCompetence.competence_id,
                titre: thisCompetence.titre,
                categorie: thisCompetence.categorie,
                svgLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisCompetence.image.nom}`
            }
            compAppli.push(competence);
        })
        competenceDb.forEach((thisCompetence) => {
            const competence: competenceType = {
                competence_id: thisCompetence.competence_id,
                titre: thisCompetence.titre,
                categorie: thisCompetence.categorie,
                svgLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisCompetence.image.nom}`
            }
            compDB.push(competence);
        })
        competenceWeb.forEach((thisCompetence) => {
            const competence: competenceType = {
                competence_id: thisCompetence.competence_id,
                titre: thisCompetence.titre,
                categorie: thisCompetence.categorie,
                svgLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisCompetence.image.nom}`
            }
            compWeb.push(competence);
        })

        const result: catCompetence = {
            web: compWeb,
            appli: compAppli,
            db: compDB
        }
        res.status(200).json(result);
    } else {
        res.status(400).json({ message: "This route only accepts GET requests !" });
    }
}