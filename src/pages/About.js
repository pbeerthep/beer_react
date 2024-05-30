import beer1 from "../images/beer1.jpg";
import beer2 from "../images/beer2.jpg";
import beer3 from "../images/beer3.jpg";

import { Carousel } from "antd";

const BoxStyle = (image) =>
{
    return {
        minHeight: "800px",
        width: "100%",
        boxShadow: "inset 0 0 0 2000px rgb(0,0,0, 0.5)",
        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
        color: "#FFFFFF",

    };
};
function About(){
    return (
        <>
        <h1>Main Page</h1>
        <Carousel dotPosition="left" arrows fade>
        <div>
          <div style={BoxStyle(beer1)}>
            <h3>beer1</h3>
          </div>
        </div>
        <div>
          <div style={BoxStyle(beer2)}>
            <h3>beer2</h3>
          </div>
        </div>
        <div>
          <div style={BoxStyle(beer3)}>
            <h3>beer3</h3>
          </div>
        </div>
        </Carousel>
        </>
    );
    
 }
 export default About;