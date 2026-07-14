import { type BaseQueryApi, type FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";
//slows down the api call to see the loading spinner
/*const customBaseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5263/api/', 
});*/
const customBaseQuery = fetchBaseQuery({
    
    baseUrl: import.meta.env.VITE_API_URL, 
    credentials: 'include'
});

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (args: string | FetchArgs, api: BaseQueryApi,
    extraOptions: object) => {
    api.dispatch(startLoading());
    if (import.meta.env.DEV) {
        await sleep();
    }
    const result = await customBaseQuery(args, api, extraOptions);      
    api.dispatch(stopLoading());
    if (result.error) {
        const {status, data} = result.error;
        console.log(status, data);
    }
    return result;
}