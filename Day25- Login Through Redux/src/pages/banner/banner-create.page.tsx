import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { InputLabel } from "../../components/common/form/label.component";
import { CancelButton, SingleImageUpload, StatusSelector, SubmitButton, TextInputComponent } from "../../components/common/form/input.component";
import { INPUT_TYPE } from "../../components/common/form/input.contract";
import { toast } from "react-toastify";
import bannerSvc from "./banner.service";
import { useNavigate } from "react-router";

const AdminBannerCreate = () => {


  // banner validation
  const bannerDTO = Yup.object({
    name: Yup.string().min(2).max(15).required(),
    status: Yup.object({
        label:Yup.string().required(),
        value:Yup.string().required()
    }),
    link: Yup.string().url(),
    image: Yup.mixed().required(),
  });

  const [loading, setLoading] = useState<boolean>();

  const {
    control,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bannerDTO),
  });

  // day 21

  const navigate=useNavigate()

  const submitEvent = async(data: any) => {
    setLoading(true)    // when we click in the submit button, the loading will be true and the button will be disabled.
    try{
      const submitData= {
        ...data,
        status:data.status.value
      }
      await bannerSvc.postRequest("/banner",submitData,{auth:true,file:true})
      toast.success("Banner created successfully")
      navigate("/admin/banner")
    }
    catch(exception:any){
      if(+exception.status === 422){
        const msgs=exception.data.result
        Object.keys(msgs).map((field:any)=>{
          setError(field,{message:msgs(field)})
        })
      }
      console.log(exception)
      toast.error("Banner cannot be added at this moment")
    }
    finally{
      setLoading(false)
    };
  }



  return (
    <>
      <div className="flex justify-center m-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Add a new Banner
        </h3>
      </div>

      <div className="flex justify-center">
        <div className="relative p-4 w-full max-w-8xl h-full md:h-auto">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <form onSubmit={handleSubmit(submitEvent)}>
              <div className="flex flex-col gap-4 mb-4">
                <div>
                  <InputLabel htmlFor="name">Name:</InputLabel>
                  <TextInputComponent
                    type={INPUT_TYPE.TEXT}
                    name="name"
                    control={control}
                    msg={errors?.name?.message}
                  />
                </div>
                <div>
                  <InputLabel htmlFor="link">Link:</InputLabel>
                  <TextInputComponent
                    type={INPUT_TYPE.URL}
                    name="link"
                    control={control}
                    msg={errors?.link?.message}
                  />
                </div>

                 {/* Status Selector */}
                 <div>
                  <InputLabel htmlFor="status">Status:</InputLabel>
                  <StatusSelector   // ignore it
                  name="status"
                  control={control}
                  msg={errors?.status?.message}
                  />
                </div>

                {/* Image selector imported from input.component.tsx file*/}
                 <div className="col-span-6">
                 <InputLabel htmlFor="image">Image:</InputLabel>
                 <SingleImageUpload name="image" setValue={setValue} msg={errors?.image?.message} />

                </div>
              </div>

                {/* Submit button */}
                
                <SubmitButton loading={loading as boolean} btnText="Add Banner"></SubmitButton>
              
                <CancelButton loading={loading as boolean} btnText="Cancel"></CancelButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBannerCreate;
