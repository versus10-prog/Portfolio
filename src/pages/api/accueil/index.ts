import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";
import { AccueilType } from "../../../../types/accueil/Accueil";
import { Activite } from "../../../../types/activite/Activite";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const accueil = await prisma.accueil.findMany({
      select: {
        accueil_id: true,
        description: true,
        image: {
          select: {
            nom: true,
          },
        },
        activite_in_accueil: {
          select: {
            activite: {
              select: {
                activite_id: true,
                titre: true,
                description: true,
                image: {
                  select: {
                    nom: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (accueil[0]) {
      const acitivite: Activite[] = [];

      accueil[0]?.activite_in_accueil.forEach((thisActivite) => {
        const acti: Activite = {
          activite_id: thisActivite.activite.activite_id,
          titre: thisActivite.activite.titre,
          description: thisActivite.activite.description,
          imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisActivite.activite.image.nom}`,
        };
        acitivite.push(acti)
      });

      const accueilResult: AccueilType = {
        accueil_id: accueil[0].accueil_id,
        description: accueil[0].description,
        imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${accueil[0].image.nom}`,
        activite: acitivite,
      };
      res.status(200).json(accueilResult);
    } else {
      res.status(400).json({ message: "This accueil does not exist" });
    }
  } else {
    res.status(400).json({ message: "This route only accepts GET requests !" });
  }
}
