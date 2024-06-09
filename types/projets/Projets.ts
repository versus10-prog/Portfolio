import { Techno, Technologie } from "../technologie/Technologie";
import { DetailProjet } from "./DetailProjet";

export type ProjetsType = {
    projet_id:   number;
    nom: string;
    presentation: string;
    titre: string;
    imageLien: string;
    techno: Techno[];
}

export type CompleteProjet = {
    projet_id:   number;
    nom: string;
    presentation: string;
    description: string;
    titre: string;
    imageLien: string;
    lien: string;
    techno: Technologie[];
    detail_projet: DetailProjet[];
}