import { Heading1, Heading2, Heading3} from "../../components/common/typography/typography.component";
import "./index.css";
import { Button, Navbar } from "flowbite-react";

const LandingPage = () => {
  return (
    <>
      <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>



    
    <Heading1>This is props method 1</Heading1>
      <Heading2 className="text-red-600 z-20 hover:animate-bounce text-center" value="This is prop method 2">Child text</Heading2>
      <Heading3 className="text-blue-700 text-center" value="Hi value">This is method 2 another example</Heading3>

    </>
  );
};

export default LandingPage;
