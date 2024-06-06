import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";
import {Technologie} from "../../../../types/technologie/Technologie"


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    
    if(req.method === "GET"){
        
        const technologie = await prisma.technologie.findMany({
            select: {
                techno_id: true,
                nom:true,
                description: true,
                image: {
                    select:{
                        nom: true
                    }
                }
            }
        })

        const technologieReturned: Technologie[] = [];

        technologie.forEach(thisTechno => {

            const techno: Technologie = {
                techno_id: thisTechno.techno_id,
                nom: thisTechno.nom,
                description: thisTechno.description,
                imageLien: `${process.env.PUBLIC_DOMAINE_BUCKET_URL}${thisTechno.image.nom}`
            }
            technologieReturned.push(techno)
        })
        res.status(200).json(technologieReturned);
    } else {
        res.status(400).json({ message: "This route only accepts GET requests !" })
    }
}