import { Button, Navbar, MegaMenu } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { LinkComponent } from "../common/link/navbar-link-component";
import { useContext } from "react";
import AuthContext from "../../context/auth.context";
import { toast } from "react-toastify";
import authSvc from "../../pages/auth/auth.service";

export const HomeHeader = () => {
  // Day16
  const auth: any = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutAction = async () => {
    try {
        const response = await authSvc.postRequest("/auth/logout");
        console.log(response);
        localStorage.removeItem("_act");
        localStorage.removeItem("_rft");
        navigate("/");
        toast.success("You have successfully logged out.");
        // Refresh the page after successful navigation
        window.location.reload();
        
    } catch (exception) {
        console.log(exception);
    }
  }
  return (
    <>
      <MegaMenu>
        <div className="flex space-x-24 mx-auto lg:flex lg:max-w-screen-xl lg:flex-wrap lg:items-center lg:justify-between lg:p-4 lg:space-x-8">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="../../../../public/Logo.jpg"
              className="mt-2 mr-3 h-[5vh] lg:h-[7vh]"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              MERN
            </span>
          </Navbar.Brand>

          {/* Day 17 */}
          {/* It will show that if the user is logged In or need to login */}
          {auth && auth.loggedInUser ? (
            <>
              <div className="order-2 items-center md:flex">
                <NavLink
                
                  to={"/" + auth.loggedInUser.role}
                  className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5 hover:active:to-blue-400"
                  >
                    Logged In
                </NavLink>
                <Button onClick={logoutAction} className="hover:text-teal-400">
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <>

              <div className="order-2 items-center lg:flex flex ">
                <NavLink
                  to="/login"
                  className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5 hover:active:to-blue-400"
                >
                  Login
                </NavLink>
                <Button href="/register" className="hover:text-teal-400">
                  Sign up
                </Button>
              </div>
            </>
          )}

          <Navbar.Collapse>
            <NavLink to="/">Home</NavLink>

            <Navbar.Link className="hidden lg:block">
              <MegaMenu.Dropdown toggle={<>Categories</>} className="h">
                <ul className="grid grid-cols-3">
                  <div className="space-y-4 p-4">
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-600 dark:hover:text-primary-500"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-600 dark:hover:text-primary-500"
                      >
                        Library
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-600 dark:hover:text-primary-500"
                      >
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-600 dark:hover:text-primary-500"
                      >
                </a>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-600 "
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-600 "
                      >
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-600 "
                      >
                        Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-600 "
                      >
                        Blog
                      </a>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-600 "
                      >
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-600 "
                      >
                        Playground
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-600 "
                      >
                        License
                      </a>
                    </li>
                  </div>
                </ul>
              </MegaMenu.Dropdown>
            </Navbar.Link>

            {/* imported it from the top */}
            <LinkComponent
              link="/pricing"
              icon=""
              text="Pricing"
            ></LinkComponent>
            <LinkComponent
              link="/contact"
              icon=""
              text="Contact"
            ></LinkComponent>
            <LinkComponent
              link="/about"
              icon=""
              text="About"
            ></LinkComponent>
           
          
          </Navbar.Collapse>
        </div>
      </MegaMenu>
    </>
  );
};
