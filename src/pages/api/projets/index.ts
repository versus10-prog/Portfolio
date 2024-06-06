import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";
import { Techno, Technologie } from "../../../../types/technologie/Technologie";
import { Projets } from "../../../../types/projets/Projets";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const projets = await prisma.projet.findMany({
      select: {
        projet_id: true,
        nom: true,
        titre: true,
        presentation: true,
        image: {
          select: {
            nom: true,
          },
        },
        techno_in_projet: {
          select: {
            technologie: {
              select: {
                nom: true,
                image: {
                  select: {
                    nom: true,
                  },
                },
              },
            },
          },
          take: 2
        },
      },
    });

    const projetsReturned: Projets[] = [];

    projets.forEach((thisProjet) => {
      const technos: Techno[] = [];

      thisProjet.techno_in_projet.forEach((thisTechno) => {
        const techno: Techno = {
          nom: thisTechno.technologie.nom,
          imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisTechno.technologie.image.nom}`,
        };
        technos.push(techno);
      });

      const projet: Projets = {
        projet_id: thisProjet.projet_id,
        nom: thisProjet.nom,
        presentation: thisProjet.presentation,
        titre: thisProjet.titre,
        imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisProjet.image.nom}`,
        techno: technos,
      };

      projetsReturned.push(projet);
    });
    res.status(200).json(projetsReturned);
  } else {
    res.status(400).json({ message: "This route only accepts GET requests !" });
  }
}
