import { prisma } from "../../../../../prisma/prisma";
import { Image } from "../../../../../types/image/Image";
import { deleteFile } from "../../../../../utils/bucket";



function suppressionImages(images: Image[]) {
    const bucketName = process.env.BUCKET_NAME;

    if(bucketName){
        images.forEach( async thisImage=>{
            const suppression = await prisma.image.delete({
                where:{
                    image_id: thisImage.image_id
                }
            });
            if(!suppression){
                return false;
            }
            deleteFile(bucketName, thisImage.nom);
        })
        return true;
    }
    else{
        return false;
    }
    
}

export default suppressionImages;
