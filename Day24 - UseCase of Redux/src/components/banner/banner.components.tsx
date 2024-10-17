import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import bannerSvc from "../../pages/banner/banner.service";
export const HomePageBanner = () => {
  // state hook maintains the state

  const [bannerData, setBannerData] = useState([]);
  let [loading, setLoading] = useState(true);

  const getBanners = async () => {
    try {
      const response: any = await bannerSvc.getRequest("/banner/list-home");
      setBannerData(response.result);
      console.log(response.result);
      setLoading(false);
    } catch (exception) {
    } finally {
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <>
    <div className="flex justify-center">

     <div className="h-[25vh] w-[97vw] lg:h-[60vh] lg:w-[90vw]  ">
  {
    loading ? (
      <>Loading...</>
    ) : (
      <Carousel slide={true}>
        {bannerData && bannerData.map((banner: any, index: number) => (
          <a href={banner.link} target="_blank" key={index} className="block w-full h-full">
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/banner/${banner.image}`}
              alt="Banners"
              className="w-full h-full object-cover object-contain"
              />
          </a>
        ))}
      </Carousel>
    )
  }
</div>
  </div>


    </>
  );
};
