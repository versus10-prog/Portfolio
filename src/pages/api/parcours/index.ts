import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";
import {
  ParcoursData,
  ParcoursType,
} from "../../../../types/parcours/Parcours";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const scolaire = await prisma.parcours.findMany({
      select: {
        parcours_id: true,
        nom: true,
        titre: true,
        date_debut: true,
        date_fin: true,
        description: true,
        type: true,
        svg: {
          select: {
            nom: true,
          },
        },
      },
      where: {
        type: "scolaire",
      },
    });
    const professionnel = await prisma.parcours.findMany({
      select: {
        parcours_id: true,
        nom: true,
        titre: true,
        date_debut: true,
        date_fin: true,
        description: true,
        type: true,
        svg: {
          select: {
            nom: true,
          },
        },
      },
      where: {
        type: "professionnel",
      },
    });

    const scolaireResult: ParcoursType[] = [];
    const professionnelResult: ParcoursType[] = [];

    scolaire.forEach((thisScolaire) => {
      const parcours: ParcoursType = {
        parcours_id: thisScolaire.parcours_id,
        nom: thisScolaire.nom,
        titre: thisScolaire.titre,
        date_debut: thisScolaire.date_debut,
        date_fin: thisScolaire.date_fin,
        type: thisScolaire.type,
        description: thisScolaire.description,
        svgLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisScolaire.svg.nom}`,
      };
      scolaireResult.push(parcours);
    });

    professionnel.forEach((thisProfessionnel) => {
      const parcours: ParcoursType = {
        parcours_id: thisProfessionnel.parcours_id,
        nom: thisProfessionnel.nom,
        titre: thisProfessionnel.titre,
        date_debut: thisProfessionnel.date_debut,
        date_fin: thisProfessionnel.date_fin,
        type: thisProfessionnel.type,
        description: thisProfessionnel.description,
        svgLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisProfessionnel.svg.nom}`,
      };
      professionnelResult.push(parcours);
    });

    const result: ParcoursData = {
      scolaire: scolaireResult,
      professionnel: professionnelResult,
    };

    res.status(200).json(result);
  } else {
    res.status(400).json({ message: "This route only accepts GET requests !" });
  }
}
