import Head from "next/head";
import Image from "next/image";
import Home from "../components/Header";
import Countdown from "../components/Countdown";
import Notes from "../components/Notes";
import Map from "../components/Map";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import { useState, createContext } from "react";
// import ReactSwitch from "react-switch";

// export const ThemeContext = createContext(null);

function OnePage() {
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };
  return (
    <>
      
        <div>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width-device-width" />
            <title>OnePage Website</title>
          </Head>
          {/* <div>
            <ReactSwitch id="toggle" />
          </div> */}
          <Home />
          <Countdown />
          <Notes />
          <Map />
          <Contact />
          <Footer />
        </div>
    
    </>
  );
};

export default OnePage;
