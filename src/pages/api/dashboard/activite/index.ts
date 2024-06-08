import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";
import suppressionImages from "../commun/suppressionImages";
import { Activite } from "../../../../../types/activite/Activite";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET" && req.query.activite_id != undefined) {
    const id: number = parseInt(req.query.activite_id as string);
    const activite = await prisma.activite.findUnique({
        select:{
            activite_id: true,
            titre: true,
            description: true,
            image:{
                select:{
                    nom: true
                }
            }
        },
        where:{
            activite_id: id
        }
    })

    if(activite){
        const acti: Activite = {
            activite_id: activite.activite_id,
            titre: activite.titre,
            description: activite.description,
            imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${activite.image.nom}`
        };
        res.status(200).json(acti);
    } else {
      res.status(400).json({ message: "This activite does not exist" });
    }

  }
  else if (req.method === "GET") {
    const activite = await prisma.activite.findMany();
    if(!activite){
        res.status(400).json({ error: "Error getting technologie, D-001" });
    }
    res.status(200).json(activite);
  }
  else if (req.method === "DELETE") {
    const activite_id: number = parseInt(req.query.activite_id as string);
    if (!activite_id) {
      res.status(400).json({ error: "technologie id not specified ! A-001" });
      return;
    }
    const images = await prisma.image.findMany({
        select: {
          image_id: true,
          nom: true,
        },
        where: {
          activite: {
            some: {
              activite_id: activite_id,
            },
          },
        },
      });

    const deleteActiviteInAccueil = await prisma.activiteInAccueil.deleteMany({
        where:{
            activite_id: activite_id
        }
    })
    if(deleteActiviteInAccueil){
        const deleted = await prisma.activite.delete({
            where: {
              activite_id: activite_id,
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
  }
  else if (req.method === "POST") {
    
  }
}
