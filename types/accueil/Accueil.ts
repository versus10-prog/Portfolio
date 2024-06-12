import { Activite } from "../activite/Activite"

export type AccueilType = {
    accueil_id: number,
    description: string,
    imageLien: string
    activite: Activite[]
}