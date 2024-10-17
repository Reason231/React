import { useEffect, useState } from "react";
import LoadingComponent from "../../../components/common/loading/loading.component";
import { HomePageTitle } from "../../../components/common/title/home-title.component";
import { useParams } from "react-router";
import authSvc from "../auth.service";


const ActivationPage = () => {
    const [loading,setLoading]=useState(true)
    const params=useParams()

    const getVerified=async()=>{
        try{
            const token=params.token;
            const response=await authSvc.getRequest('/auth/activate/' + token)
            
        }
        catch(exception){

        }
    }
    useEffect(() =>{
        getVerified
    },[])
  return (
    <>
      <HomePageTitle title="Activate Your account" url="" />

      <div className="flex flex-col flex-wrap sm:flex sm:flex-row sm:flex-wrap md:flex md:flex-row md:flex-wrap mx-15 py-5 gap-2 mt-5">
        
        {
            loading ? <><LoadingComponent /> </>:<></>
        }
      </div>
    </>
  );
};

export default ActivationPage;
