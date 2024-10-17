import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { InputLabel } from "../../components/common/form/label.component";
import { CancelButton, SingleImageUpload, StatusSelector, SubmitButton, TextInputComponent } from "../../components/common/form/input.component";
import { INPUT_TYPE } from "../../components/common/form/input.contract";
import { toast } from "react-toastify";
import bannerSvc from "./banner.service";
import { useNavigate, useParams } from "react-router";
import LoadingComponent from "../../components/common/loading/loading.component";

const AdminBannerEdit = () => {
  // banner validation
  const bannerDTO = Yup.object({
    name: Yup.string().min(2).max(15).required(),
    status: Yup.object({
      label: Yup.string().required(),
      value: Yup.string().required()
    }),
    link: Yup.string().url(),
    image: Yup.mixed().required(),
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [detail, setDetail] = useState<any>(null);

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bannerDTO),
  });

  const navigate = useNavigate();
  const params = useParams();

  const getBannerDetail = useCallback(async () => {
    try {
      const response: any = await bannerSvc.getRequest('/banner/' + params.id, { auth: true });
      let bannerDetail = {
        ...response.result,
        image: import.meta.env.VITE_IMAGE_URL + "/banner/" + response.result.image
      };
      setDetail(bannerDetail);
      setValue("name", response.result.name);
      setValue("link", response.result.link);
      setValue("status", {
        label: response.result.status === "active" ? "Publish" : "UnPublish",
        value: response.result.status
      });
      setValue("image", response.result.image);
      setLoading(false);
    } catch (exception) {
      toast.error("Banner cannot be fetched");
      navigate("/admin/banner");
    }
  }, [params, setValue, navigate]);

  useEffect(() => {
    getBannerDetail();
  }, [getBannerDetail]);

  const submitEvent = async (data: any) => {
    setLoading(true);    // when we click in the submit button, the loading will be true and the button will be disabled.
    try {
      const submitData = {
        ...data,
        status: data.status.value
      };
      // await bannerSvc.postRequest("/banner", submitData, { auth: true, file: true });
      // toast.success("Banner Edited successfully");
      // navigate("/admin/banner");
    } catch (exception) {
      console.log(exception);
      toast.error("Banner cannot be updated at this moment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center m-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Edit Banner
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

                    {/* Image selector imported from input.component.tsx file */}
                    <div className="col-span-6">
                      <InputLabel htmlFor="image">Image:</InputLabel>
                      <SingleImageUpload imageUrl={detail?.image} name="image" setValue={setValue} msg={errors?.image?.message} />
                    </div>
                  </div>

                  {/* Submit button */}
                  <SubmitButton loading={loading as boolean} btnText="Add Banner"></SubmitButton>

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

export default AdminBannerEdit;
