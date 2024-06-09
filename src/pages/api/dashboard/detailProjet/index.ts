import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";
import suppressionImages from "../commun/suppressionImages";
import { ParcoursType } from "../../../../../types/parcours/Parcours";
import { DetailProjet } from "../../../../../types/projets/DetailProjet";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET" && req.query.detail_id != undefined) {
    const id: number = parseInt(req.query.detail_id as string);

    const detailProjet = await prisma.detailProjet.findUnique({
      select: {
        detail_projet_id: true,
        titre: true,
        description: true,
        image: {
          select: {
            nom: true,
          },
        },
      },
      where: {
        detail_projet_id: id,
      },
    });

    if (detailProjet) {
      const detail: DetailProjet = {
        detail_projet_id: detailProjet.detail_projet_id,
        titre: detailProjet.titre,
        description: detailProjet.description,
        imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${detailProjet.image.nom}`,
      };
      res.status(200).json(detail);
    } else {
      res.status(400).json({ message: "This detail projet does not exist" });
    }
  } else if (req.method === "GET") {
    const detailProjet = await prisma.detailProjet.findMany();
    if (!detailProjet) {
      res.status(400).json({ error: "Error getting detail projet, D-001" });
    }
    res.status(200).json(detailProjet);
  } else if (req.method === "DELETE") {
    const detail_id: number = parseInt(req.query.detail_id as string);

    if (!detail_id) {
      res.status(400).json({ error: "detail projet id not specified ! A-001" });
      return;
    }
    const images = await prisma.image.findMany({
      select: {
        image_id: true,
        nom: true,
      },
      where: {
        detail_projet: {
          some: {
            detail_projet_id: detail_id,
          },
        },
      },
    });

    const deletedDetailInProjet = await prisma.detailInProjet.deleteMany({
      where: {
        detail_projet_id: detail_id,
      },
    });

    if (deletedDetailInProjet) {
      const deleted = await prisma.detailProjet.delete({
        where: {
          detail_projet_id: detail_id,
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
