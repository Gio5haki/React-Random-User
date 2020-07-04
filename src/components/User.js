import React from "react";
import Contact from "./Contact";

export default function User({ data }) {
  // Destructure the data object-
  const { name, age, picture, id, email, address, phone } = data;
  /*
    Same as
    const name = data.name
    const age = data.age
    ...
    const phone = data.phone
  */
  return (
    <div>
      <img src={picture} alt={"name" + id} />
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      {
        // Pass email address and phone to Contact component
      }
      <Contact email={email} address={address} phone={phone} />
    </div>
  );
}
