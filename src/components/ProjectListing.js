import "./ProjectListing.css";
const Projectlisting = (props) => {
  return (
    <div className="mainpl">
      <div>
        <h3 className="h3head">{props.heading} - </h3>
        <h4 className="h4head">{props.desc}</h4>
      </div>
      <div>
        <p>{props.children}</p>
      </div>
    </div>
  );
};
export default Projectlisting;
