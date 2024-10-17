import axiosInstance from "../config/axios.config"

// We are using the class cause we are going to use the inheritance in the typescript
abstract class HttpService {
    // it is private functions
    private headers = {}
    private getHeaders = (config:any) =>{
        if (config && (config.file || config.files))
            this.headers = {
            ...this.headers,
            "Content-Type":"multipart/form/data"  // it changes the data format from json to mulitpart for the files
        }
    }

    postRequest = async(url:string, data:any = {},config: any = null) : Promise<any> =>{
        try{
            this.getHeaders(config)  // we send the config(it contains the file) to the getHeaders

            const response = await axiosInstance.post(url,data , {
                headers: {...this.headers}
            })

            console.log(response)
            return response
        }
        catch(exception) {
            console.error("PostRequestException" ,exception)
            throw exception
        }
    }

    getRequest = async(url:string, config: any = null) =>{}

    putRequest = async(url:string, data:any = {}, config: any = null) =>{}

    patchRequest =async(url:string, data:any = {},config: any = null) =>{}

    deleteRequest =async(url:string, config:any= null) =>{}
}

export default HttpService