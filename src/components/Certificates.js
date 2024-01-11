import "./Certificates.css";
import certi1 from "../certi1.png";
import certi2 from "../certi2.png";
import certi3 from "../certi3.png";
import certi4 from "../certi4.jpeg";
import certi5 from "../certi5.jpeg";
import ImageSlider from "./ImageSlider";

const Certificates = () => {
  const sliderimgs = [
    { url: certi1, title: "Internship Certificate" },
    { url: certi2, title: "React Course Certificate" },
    { url: certi3, title: "WebDevelopment Course Certificate" },
    { url: certi4, title: `Winner's Certificate` },
    { url: certi5, title: `Winner's Certificate` },
  ];
  return (
    <div className="maincertis">
      <ImageSlider data={sliderimgs} />
    </div>
  );
};

export default Certificates;
