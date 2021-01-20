export interface DataDetailSuperheroe {
  data: DetailSuperheroe;
}

export interface DetailSuperheroe {
  id: number;
  nombre: string;
  puedeVolar: boolean;
  nombreReal: string;
  avatarURL: string;
  habilidades: string[];
  descripcion: string;
}
