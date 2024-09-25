import "./Tagline.scss";
// import "../../App.scss";
const Tagline = () => {
  return (
    <marquee direction="left" onMouseOver={"stop()"} onMouseOut="start()">
      <span className=" text-center text-grey">
        One Stop Construction materials store for all type of constructions
      </span>
      {/* <span className=" text-center text-grey">
        One Stop Construction materials store for all type of constructions
      </span>
      <span className=" text-center text-grey">
        One Stop Construction materials store for all type of constructions
      </span>
      <span className=" text-center text-grey">
        One Stop Construction materials store for all type of constructions
      </span> */}

      {/* <div>
            <h1>
              <span>TEXT </span>
              <span>INFINITE </span>
              <span>SCROLL</span>
            </h1>
          </div> */}
    </marquee>
    // <span className="bg-white  pt-2 pb-2 text-center text-grey">
    //   One Stop Construction materials store for all type of constructions
    // </span>
  );
};

export default Tagline;
