import { HomePageBanner } from "../../components/banner/banner.components";
import {
  Heading1,
  Heading2,
  Heading3,
} from "../../components/common/typography/typography.component";
import "./index.css";
import { Button, Navbar, MegaMenu } from "flowbite-react";
import { Card } from "flowbite-react";
import { SingleProductComponent } from "../../components/product/single-product.component";
import { HomePageTitle } from "../../components/common/title/home-title.component";
import { CardWithImage } from "../../components/common/card/single-card.component";

const LandingPage = () => {
  return (
    <>

    {/* Navbar */}
      <MegaMenu>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
          <Navbar.Brand href="/">
            <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Navbar.Brand>
          <div className="order-2 hidden items-center md:flex">
            <a
              href="#"
              className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
            >
              Login
            </a>
            <Button href="#">Sign up</Button>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link>
              <MegaMenu.Dropdown toggle={<>Categories</>}>
                <ul className="grid grid-cols-3">
                  <div className="space-y-4 p-4">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Library
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Pro Version
                      </a>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Blog
                      </a>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Playground
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        License
                      </a>
                    </li>
                  </div>
                </ul>
              </MegaMenu.Dropdown>
            </Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </MegaMenu>

      <HomePageBanner />



      {/* Categoires cards */}
    <HomePageTitle title="Categories" url="/categories" />

      <div className="flex flex-col flex-wrap sm:flex sm:flex-row sm:flex-wrap md:flex md:flex-row md:flex-wrap mx-15 py-5 gap-2 mt-5">
    
      {[...Array(4)].map((_, i: number) => (
          <CardWithImage key={i} title="Gaming Monitor" image="https://static-01.daraz.com.np/p/b5dc82d8f3665e69e2332477a8bc8878.jpg_300x0q75.webp"
          url="category/gaming-monitors"
           />
        ))}      
      </div>



      {/* Products cards */}
      
      <HomePageTitle title="Just For You" url="/products" />
    
      <div className="flex flex-col flex-wrap sm:flex sm:flex-row md:flex-wrap md:flex md:flex-rwo mx-15 py-5 gap-2 mt-5">
        {[...Array(25)].map((_, i: number) => (
          <SingleProductComponent key={i} />
        ))}
      </div>

      <footer>This is footer</footer>
    </>
  );
};

export default LandingPage;
