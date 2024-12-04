import { useGetCategory } from "@/api/getCategory"
import { NoticiaType } from "@/types/noticia"
import { ResponseType } from "@/types/response"

interface FiltersControlsCategoryProps {
    category: string;
}

export const FiltersControlsCategory = ({ category }: FiltersControlsCategoryProps) => {
    const { result }: ResponseType = useGetCategory(category);
    return (
        <ul className="mb-5">
            {result != null && result.map((noticia: NoticiaType) => {
                const { titulo, slug } = noticia;
                return (
                    <li key={slug}>
                        <a href={`/noticias/${slug}`}>{titulo}</a>
                    </li>
                );
            })}
        </ul>
    );
};