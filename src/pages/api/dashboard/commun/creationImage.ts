import { v4 as uuidv4 } from "uuid";
import { uploadFile } from "../../../../../utils/bucket";
import { prisma } from "../../../../../prisma/prisma";


export const creationImage = async (files: File[], bucketName: string, contentType: string, type: string = '.png') => {
    let imgsId: number[] = []
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = `${uuidv4()}${type}`;
        const bytes = await file.arrayBuffer()
        const fileContent = Buffer.from(bytes);

        await uploadFile(
            bucketName,
            fileName,
            fileContent,
            contentType ? contentType : "image/png"
        );

        const image = await prisma.image.create({
            data: {
                nom: fileName,
            },
        });
        if (image) {
            imgsId.push(image.image_id)
        }
    }
    return imgsId
}