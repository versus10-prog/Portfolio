import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";
import suppressionImages from "../commun/suppressionImages";
import { ParcoursType } from "../../../../../types/parcours/Parcours";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET" && req.query.parcours_id != undefined) {
    const id: number = parseInt(req.query.parcours_id as string);

    const parcours = await prisma.parcours.findUnique({
      select: {
        parcours_id: true,
        nom: true,
        date_debut: true,
        date_fin: true,
        description: true,
        type: true,
        titre: true,
        svg: {
          select: {
            nom: true,
          },
        },
      },
      where: {
        parcours_id: id,
      },
    });

    if (parcours) {
      const parcoursReturn: ParcoursType = {
        parcours_id: parcours.parcours_id,
        nom: parcours.nom,
        date_debut: parcours.date_debut,
        date_fin: parcours.date_fin,
        description: parcours.description,
        type: parcours.type,
        titre: parcours.titre,
        svgLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${parcours.svg.nom}`,
      };
      res.status(200).json(parcoursReturn);
    } else {
      res.status(400).json({ message: "This parcours does not exist" });
    }
  } else if (req.method === "GET") {
    const parcours = await prisma.parcours.findMany();
    if (!parcours) {
      res.status(400).json({ error: "Error getting parcours, D-001" });
    }
    res.status(200).json(parcours);
  } else if (req.method === "DELETE") {
    const parcours_id: number = parseInt(req.query.parcours_id as string);

    if (!parcours_id) {
      res.status(400).json({ error: "parcours id not specified ! A-001" });
      return;
    }
    const images = await prisma.image.findMany({
      select: {
        image_id: true,
        nom: true,
      },
      where: {
        parcours: {
          some: {
            parcours_id: parcours_id,
          },
        },
      },
    });

    const deleted = await prisma.parcours.delete({
      where: {
        parcours_id: parcours_id
      }
    })

    if (deleted) {
      if (suppressionImages(images)) {
        res.status(200).json({ message: "the poster has been deleted" });
      } else {
        res.status(400).json({ error: "Error during deleting. P-002" });
      }
    } else {
      res.status(400).json({ error: "Error during deleting. A-002" });
    }
  } else if (req.method === "POST") {
  }
}
