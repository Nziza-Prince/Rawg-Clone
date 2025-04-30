import apiClient from "@/services/ApiClient";
import { useQuery } from '@tanstack/react-query';

interface Game {
    id: number
    name: string
}

interface FetchGameResponse {
    count: number,
    results: Game[]
}

const fetchGames = async ():Promise<Game[]> => {

    const res = await apiClient.get<FetchGameResponse>('games')
    console.log(res.data.results)
    return res.data.results

}

const useGames = () => {
    return useQuery<Game[]>({
        queryKey: ['games'],
        queryFn: fetchGames
    })
}

export default useGames