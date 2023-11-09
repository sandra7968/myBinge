import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// upload details of a series
export const uploadSeriesDetails = async(reqBody)=>{
    // make call post http request to http://localhost:4000/series to add series info in json server and return response to my list component
    return await commonAPI("POST", `${serverURL}/series`, reqBody)
}

// get all series from json server
export const getAllSeries = async ()=>{
    // make get http request to http://localhost:4000/series to get all series from json server and return response to my list component
    return await commonAPI("GET",`${serverURL}/series`,"")
}
// get a series from json server
export const getASeries = async (name)=>{
    // make get http request to http://localhost:4000/series/name to get a series from json server and return response to  component
    return await commonAPI("GET",`${serverURL}/series/${name}`,"")
}
// delete a series from json server
export const deleteASeries = async (name)=>{
    // make delete http request to http://localhost:4000/series/name to remove a series from json server and return response to the component
    return await commonAPI("DELETE",`${serverURL}/series/${name}`,{})
}