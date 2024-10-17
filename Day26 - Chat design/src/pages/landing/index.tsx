import { HomePageBanner } from "../../components/banner/banner.components";
import "./index.css";
import { SingleProductComponent } from "../../components/product/single-product.component";
import { HomePageTitle } from "../../components/common/title/home-title.component";
import { CardWithImage } from "../../components/common/card/single-card.component";
import FooterComponent from "../../components/footer/footer.component";



const LandingPage = () => {
  return (
    <>

    {/* Home Page Banner */}
      <HomePageBanner />


      {/* Categoires cards */}
    <HomePageTitle title="Categories" url="/categories"/>

      <div className="lg:flex lg:h-[32vh] lg:gap-6 lg:mt-6 lg:ml-8 flex-wrap">
      {[...Array(7)].map((_, i: number) => (
          <CardWithImage key={i} title="Gaming Monitor" image="https://static-01.daraz.com.np/p/b5dc82d8f3665e69e2332477a8bc8878.jpg_300x0q75.webp"
          url="category/gaming-monitors"
           />
        ))}      
      </div>



      {/* Products cards */}
      
    
      <HomePageTitle title="Just For You" url="/products" />
      <div className="lg:flex lg:h-[32vh] lg:gap-6 lg:mt-6 lg:ml-8 flex-wrap hover:cursor-pointer">
        {[...Array(12)].map((_, i: number) => (
          <SingleProductComponent key={i} />
        ))}
      </div>


      {/* Footer  */}
      <FooterComponent />
    </>
  );
};

export default LandingPage;
