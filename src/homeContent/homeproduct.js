import listimg from "../images/product-34.jpg";
import listimg2 from "../images/product-24.jpg";

function ProductsForHome({name}) {
  const list = [
    {
      prdname: "Gnusmas, JBL",
      prdprice: "Rs. 5600",
      prdimg: <img src={listimg} />,
    },
    {
      prdname: "Elppa",
      prdprice: "Rs. 56300",
      prdimg: <img src={listimg2} />,
    },

  ];
  return (
    <>
      <div className="cBox myList">
        <div className="wrapper">
          <h2>Our Products</h2>
          <ul>
            {list.map((mylist) => {
              return (
                <li>
                  {mylist.prdimg}
                  <h3>{mylist.prdname}</h3>
                  <p>{mylist.prdprice}</p>
                  {/* <span>{name}</span> */}
                </li>
              );
            })}
          </ul>
          <ul>
            {name.map((data) =>{
              console.log(data, "name data");
              // <li>
              //     {mylist.prdimg}
              //     <h3>{mylist.prdname}</h3>
              //     <p>{mylist.prdprice}</p>
              //     {/* <span>{name}</span> */}
              //   </li>
            })};
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsForHome;
