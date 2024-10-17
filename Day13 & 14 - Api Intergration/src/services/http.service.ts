import axiosInstance from "../config/axios.config"

// We are using the class cause we are going to use the inheritance in the typescript
abstract class HttpService {
    private headers={};
    private getHeaders =(config:any)=>{
        if(config && (config.file || config.files)){
    this.headers ={
        ...this.headers,
        "Content-Type":"multipart/form-data"
    }
        }
    }
        postRequest = async(url:string, data :any ={},  config:any=null) :Promise<any> => {
            try{
    this.getHeaders(config);
    const response=await axiosInstance.post(url,data,{headers:{
        ...this.headers
    
    }});
    console.log(response)
    return response;
            }catch(exception){
                console.error("postRequest Exception:",exception)
                throw exception
            }
        }
    
        getRequest =(url:string,config:any=null)=>{}
    
        putRequest =(url:string,config:any=null)=>{}
    
        patchRequest =(url:string,config:any=null)=>{}
    
        deleteRequest =(url:string,config:any=null)=>{}
    
    
    
    
    }

export default HttpService