import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";
import { Activite } from "../../../../../types/activite/Activite";
import { AccueilType } from "../../../../../types/accueil/Accueil";
import suppressionImages from "../commun/suppressionImages";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET" && req.query.accueil_id != undefined) {
    const id: number = parseInt(req.query.accueil_id as string);

    const accueil = await prisma.accueil.findUnique({
      select: {
        description: true,
        accueil_id: true,
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
      where: {
        accueil_id: id,
      },
    });

    if (accueil) {
      const activite: Activite[] = [];
      accueil.activite_in_accueil.forEach((thisActivite) => {
        const acti: Activite = {
          activite_id: thisActivite.activite.activite_id,
          description: thisActivite.activite.description,
          titre: thisActivite.activite.titre,
          imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisActivite.activite.image.nom}`,
        };
        activite.push(acti);
      });

      const accueilReturn: AccueilType = {
        accueil_id: accueil.accueil_id,
        description: accueil.description,
        imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${accueil.image.nom}`,
        activite: activite,
      };
      res.status(200).json(accueilReturn);
    } else {
      res.status(400).json({ message: "This accueil does not exist" });
    }
  } else if (req.method === "GET") {
    const accueil = await prisma.accueil.findMany();
    if (!accueil) {
      res.status(400).json({ error: "Error getting accueil, D-001" });
    }
    res.status(200).json(accueil);
  } else if (req.method === "DELETE") {
    const accueil_id: number = parseInt(req.query.accueil_id as string);

    if (!accueil_id) {
      res.status(400).json({ error: "accueil id not specified ! A-001" });
      return;
    }

    const images = await prisma.image.findMany({
      select: {
        image_id: true,
        nom: true,
      },
      where: {
        accueil: {
          some: {
            accueil_id: accueil_id,
          },
        },
      },
    });

    const deletedActiviteInAccueil = await prisma.activiteInAccueil.deleteMany({
      where: {
        accueil_id: accueil_id,
      },
    });

    if (deletedActiviteInAccueil) {
      const deleted = await prisma.accueil.delete({
        where: {
          accueil_id: accueil_id,
        },
      });

      if (deleted) {
        if (suppressionImages(images)) {
          res.status(200).json({ message: "the poster has been deleted" });
        } else {
          res.status(400).json({ error: "Error during deleting. P-002" });
        }
      } else {
        res.status(400).json({ error: "Error during deleting. A-002" });
      }
    } else {
      res.status(400).json({ error: "Error during deleting. A-002" });
    }
  } else if (req.method === "POST") {
  }
}
