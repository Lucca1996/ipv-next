export type NoticiaType = {
    id: number,
    titulo: string;
    slug: string;
    subtitulo: string;
    descripcion: string;
    contenido: string;
    active: boolean;
    isFeatured: boolean;
    fecha: string;
    imagenes: {

        id: number;
        url: string;

    }[];
    category: {
        data: {
            attributes: {
                slug: string;
                categoryName: string;
            };
        };
    };

};