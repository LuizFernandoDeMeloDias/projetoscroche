import type { AxiosPromise } from "axios"
import type { ProjectData } from "../interface/ProjectData"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080"

const postData = async (data: ProjectData): AxiosPromise<any> =>{

    const response = axios.post(API_URL + '/projects', data);
    return response;

}

export function useProjectDataMutate(){

    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["project-data"]})
        }

    })

    return mutate

}