import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";
import suppressionImages from "../commun/suppressionImages";
import { CompleteProjet } from "../../../../../types/projets/Projets";
import { DetailProjet } from "../../../../../types/projets/DetailProjet";
import { Technologie } from "../../../../../types/technologie/Technologie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET" && req.query.projet_id != undefined) {
    const id: number = parseInt(req.query.projet_id as string);

    const projet = await prisma.projet.findUnique({
      select: {
        projet_id: true,
        nom: true,
        presentation: true,
        description: true,
        titre: true,
        image: {
          select: {
            nom: true,
          },
        },
        lien: true,
        techno_in_projet: {
          select: {
            technologie: {
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
            },
          },
        },
        detail_in_projet: {
          select: {
            detail_projet: {
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
            },
          },
        },
      },
      where: {
        projet_id: id,
      },
    });
    if (projet) {
      const technologie: Technologie[] = [];
      const detailProjet: DetailProjet[] = [];

      projet.techno_in_projet.forEach((thisTechno) => {
        const techno: Technologie = {
          techno_id: thisTechno.technologie.techno_id,
          nom: thisTechno.technologie.nom,
          description: thisTechno.technologie.description,
          imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisTechno.technologie.image.nom}`,
        };
        technologie.push(techno);
      });

      projet.detail_in_projet.forEach((thisDetail) => {
        const detail: DetailProjet = {
          detail_projet_id: thisDetail.detail_projet.detail_projet_id,
          description: thisDetail.detail_projet.description,
          titre: thisDetail.detail_projet.titre,
          imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisDetail.detail_projet.image.nom}`,
        };
        detailProjet.push(detail);
      });

      const projetReturned: CompleteProjet = {
        projet_id: projet.projet_id,
        nom: projet.nom,
        presentation: projet.presentation,
        description: projet.description,
        titre: projet.titre,
        imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${projet.image.nom}`,
        lien: projet.lien || "",
        techno: technologie,
        detail_projet: detailProjet,
      };
      res.status(200).json(projetReturned);
    } else {
      res.status(400).json({ message: "This project does not exist" });
    }
  } else if (req.method === "GET") {
    const projet = await prisma.projet.findMany();
    if (!projet) {
      res.status(400).json({ error: "Error getting projet, D-001" });
    }
    res.status(200).json(projet);
  } else if (req.method === "DELETE") {
    const projet_id: number = parseInt(req.query.projet_id as string);
    if (!projet_id) {
      res.status(400).json({ error: "projet id not specified ! A-001" });
      return;
    }
    const images = await prisma.image.findMany({
      select: {
        image_id: true,
        nom: true,
      },
      where: {
        projet: {
          some: {
            projet_id: projet_id,
          },
        },
      },
    });

    if (await suppression(projet_id)) {
      const deleted = await prisma.projet.delete({
        where: {
          projet_id: projet_id,
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

async function suppression(projet_id: number) {
  const deletedDetail = await prisma.detailInProjet.deleteMany({
    where: {
      projet_id: projet_id,
    },
  });

  const deletedTechno = await prisma.technoInProjet.deleteMany({
    where: {
      projet_id: projet_id,
    },
  });

  if (deletedDetail && deletedTechno) {
    return true;
  } else {
    return false;
  }
}
