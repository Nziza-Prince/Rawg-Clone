import apiClient from "@/services/ApiClient"
import { useQuery } from "@tanstack/react-query"

interface Genre{
    id:number,
    name:string
    image_background:string
}
interface FetchGenreResponse {
    count: number,
    results: Genre[]
}



const fetchGenres = async ():Promise<Genre[]> => {
    const res = await apiClient.get<FetchGenreResponse>('genres')
    console.log(res.data.results)
    return res.data.results
}

const useGenres = () => {
    return useQuery<Genre[]>({
        queryKey:['genres'],
        queryFn:fetchGenres
    })
}

export default useGenres