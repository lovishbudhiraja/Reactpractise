import popularprd from "../images/banner-01.jpg";
import popularprd1 from "../images/banner-02.jpg";
import popularprd2 from "../images/banner-03.jpg";
import popularprd3 from "../images/banner-04.jpg";

function PopuplarProducts() {
  const images = [
    <img src={popularprd} />,
    <img src={popularprd1} />,
    <img src={popularprd2} />,
    <img src={popularprd3} />,
  ];
  let element = [];

  //   Not Worked with For Loop
    for (let x = 0; x < images.length; x++) {
      element.push(<li>{[images[x]]}</li>);
    }

  // images.forEach((images, i) => {
  //   element.push(<li key={i}>{images}</li>);
  // });
  return (
    <>
      <div className="cBox ppl_prd">
        <div className="wrapper">
          <h2>Popular Products</h2>
          <ul className="popularImages">{element}</ul>
        </div>
      </div>
    </>
  );
}

export default PopuplarProducts;
