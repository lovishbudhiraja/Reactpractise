import React, {useState} from "react";

function FormSubmission() {
const [txt, setTxt] = useState();



const submitForm = (e) => {
    let firstname = document.getElementById("#fname");
    alert(firstname.e.target.value);
}
const changeTxt = (e) => {
  // console.log(e.target.value);
  setTxt(e.target.value)
}
console.log(txt, "setTxt Value");
  return (
    <section className="forms">
      <div className="wrapper">
        <h2>Get connect with us.</h2>
        <div className="fields">
          <div className="xrow">
            <input type="text" onChange={changeTxt} placeholder="First name" id="fname" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="yrow">
            <input type="phone" placeholder="Enter your contact number" />
            <input type="email" placeholder="Enter your email Id" />
            <textarea placeholder="Enter your Requirements"></textarea>
            <button onClick={submitForm}>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSubmission;
