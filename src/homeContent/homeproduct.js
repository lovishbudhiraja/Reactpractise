import listimg from "../images/product-34.jpg";
import listimg2 from "../images/product-24.jpg";

import React, {useState} from "react";

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

  ]

  const [quantity, setQuantity] = useState(0);
  const qtyMinus = () => {
    if(quantity == 0){
      alert('Less than 0 is not allowed');
    }
    else{
      setQuantity(quantity - 1);
    }
  }

  var prodCount = 5;

  const qtyAdd = () => {
    //setQuantity(quantity + 1);
    if(quantity < prodCount){
      setQuantity(quantity + 1);
    }
    else{
      alert("More than " + prodCount + " quantity not available");
      setQuantity(prodCount);
    }
  }
  // const [value, setValue] = useState("");
  // const checkValue = (e) => {
  //   if(setValue(e.target.value) < prodCount){
  //     alert("More than " + prodCount + " quantity not available");
  //   }
  // }

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
                  <div class="qty">
                    <span onClick={qtyMinus}>-</span>
                    <input type="text" value={quantity} />
                    <span onClick={qtyAdd}>+</span>
                  </div>
                  {/* <span>{name}</span> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsForHome;
