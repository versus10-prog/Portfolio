import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";
import suppressionImages from "../commun/suppressionImages";
import { Technologie } from "../../../../../types/technologie/Technologie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET" && req.query.techno_id != undefined) {
    const id: number = parseInt(req.query.techno_id as string);

    const technologie = await prisma.technologie.findUnique({
      select: {
        techno_id: true,
        nom: true,
        description: true,
        image: {
          select: {
            nom: true,
          },
        },
      },
      where: {
        techno_id: id,
      },
    });
    if (technologie) {
      const techno: Technologie = {
        techno_id: technologie.techno_id,
        nom: technologie.nom,
        description: technologie.description,
        imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${technologie.image.nom}`,
      };
      res.status(200).json(techno);
    } else {
      res.status(400).json({ message: "This technologie does not exist" });
    }
  } else if (req.method === "GET") {
    const techno = await prisma.technologie.findMany();
    if (!techno) {
      res.status(400).json({ error: "Error getting technologie, D-001" });
    }
    res.status(200).json(techno);
  } else if (req.method === "DELETE") {
    const techno_id: number = parseInt(req.query.techno_id as string);
    if (!techno_id) {
      res.status(400).json({ error: "technologie id not specified ! A-001" });
      return;
    }
    const images = await prisma.image.findMany({
      select: {
        image_id: true,
        nom: true,
      },
      where: {
        technologie: {
          some: {
            techno_id: techno_id,
          },
        },
      },
    });

    const deletedTechnoInProjet = await prisma.technoInProjet.deleteMany({
      where: {
        techno_id: techno_id,
      },
    });

    if (deletedTechnoInProjet) {
      const deleted = await prisma.technologie.delete({
        where: {
          techno_id: techno_id,
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
