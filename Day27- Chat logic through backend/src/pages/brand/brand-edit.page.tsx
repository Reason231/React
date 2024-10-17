import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { InputLabel } from "../../components/common/form/label.component";
import { CancelButton, SingleImageUpload, StatusSelector, SubmitButton, TextInputComponent } from "../../components/common/form/input.component";
import { INPUT_TYPE } from "../../components/common/form/input.contract";
import { toast } from "react-toastify";
import brandSvc from "./brand.service";
import { useNavigate, useParams } from "react-router";
import LoadingComponent from "../../components/common/loading/loading.component";
import { ToggleSwitch } from "flowbite-react";


const AdminBrandEdit = () => {
  const [isFeatured, setIsFeatured] = useState(false);

  // brand validation
  const brandDTO = Yup.object({
    name: Yup.string().min(2).max(15).required(),
    status: Yup.object({
        label:Yup.string().required(),
        value:Yup.string().required()
    }),
    isFeatured: Yup.boolean().default(false),
    image: Yup.mixed().required(),
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [detail, setDetail] = useState<any>(null);

  const {
    control,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(brandDTO),
  });

  const navigate = useNavigate();
  const params = useParams();

  const getBrandDetail = useCallback(async () => {
    try {
      const response: any = await brandSvc.getRequest('/brand/' + params.id, { auth: true });
      let brandDetail = {
        ...response.result,
        image: import.meta.env.VITE_IMAGE_URL + "/brand/" + response.result.image
      };
      setDetail(brandDetail);
      setValue("name", response.result.name);
      setValue("isFeatured", response.result.isFeatured);
      setIsFeatured(response.result.isFeatured)
      setValue("status", {
        label: response.result.status === "active" ? "Publish" : "UnPublish",
        value: response.result.status
      });
      setValue("image", response.result.image);
      setLoading(false);
    } catch (exception) {
      toast.error("Brand cannot be fetched");
      navigate("/admin/brand");
    }
  }, [params, setValue, navigate]);

  useEffect(() => {
    getBrandDetail();
  }, [getBrandDetail]);

  const submitEvent = async (data: any) => {
    setLoading(true);    // when we click in the submit button, the loading will be true and the button will be disabled.
    try {
      const submitData = {
        ...data,
        status: data.status.value,
        isFeatured:isFeatured

      };
      

      // Day23

      // This is required because if we don't update the image and update the brand wihtout putting the new image, it will continue

      if(typeof submitData.image !== "object"){
        delete submitData.image
      } 
      await brandSvc.putRequest("/brand/"+params.id, submitData, { auth: true, file: true });
      toast.success("Brand Edited successfully");
      navigate("/admin/brand");
    } catch (exception) {
      console.log(exception);
      toast.error("Brand cannot be updated at this moment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center m-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Edit Brand
        </h3>
      </div>

      <div className="flex justify-center">
        <div className="relative p-4 w-full max-w-8xl h-full md:h-auto">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {
              loading ? <><LoadingComponent /></> : <>
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
                    <InputLabel htmlFor="Featured">Featured Brand</InputLabel>
                    <ToggleSwitch checked={isFeatured} onChange={setIsFeatured} />
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

                    {/* Image selector imported from input.component.tsx file */}
                    <div className="col-span-6">
                      <InputLabel htmlFor="image">Image:</InputLabel>
                      <SingleImageUpload imageUrl={detail?.image} name="image" setValue={setValue} msg={errors?.image?.message} />
                    </div>
                  </div>

                  {/* Submit button */}
                  <SubmitButton loading={loading as boolean} btnText="Update Brand"></SubmitButton>

                  <CancelButton loading={loading as boolean} btnText="Cancel"></CancelButton>
                </form>
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBrandEdit;
