interface DataDetailSuperheroe {
  data: DetailSuperheroe;
}

interface DetailSuperheroe {
  id: number;
  nombre: string;
  puedeVolar: boolean;
  nombreReal: string;
  avatarURL: string;
  habilidades: string[];
  descripcion: string;
}
