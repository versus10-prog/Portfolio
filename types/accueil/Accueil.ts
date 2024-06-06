import { Activite } from "./Activite"

export type Accueil = {
    accueil_id: number,
    description: string,
    imageLien: string
    activite: Activite[]
}