import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";
import { Techno, Technologie } from "../../../../types/technologie/Technologie";
import { CompleteProjet, ProjetsType } from "../../../../types/projets/Projets";
import { DetailProjet } from "../../../../types/projets/DetailProjet";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "GET" &&  req.query.id != undefined){
    const id: number = parseInt(req.query.id as string);

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
  }
  else if (req.method === "GET") {
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

    const projetsReturned: ProjetsType[] = [];

    projets.forEach((thisProjet) => {
      const technos: Techno[] = [];

      thisProjet.techno_in_projet.forEach((thisTechno) => {
        const techno: Techno = {
          nom: thisTechno.technologie.nom,
          imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisTechno.technologie.image.nom}`,
        };
        technos.push(techno);
      });

      const projet: ProjetsType = {
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
