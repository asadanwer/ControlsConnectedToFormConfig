import React, { useState, useEffect } from "react";
import { demoFields } from "./formConfig";

const Demo = () => {
  const [fieldValues, setFieldValues] = useState(demoFields);
  const handleChange = (event) => {
    const name = event.target.name;
    setFieldValues({
      ...fieldValues,
      [name]: event.target.value,
    });
    console.log(event.target.value);
  };

  return (
    <div>
      <center>
        <input
          type="text"
          value={fieldValues.userName}
          name="userName"
          onChange={handleChange}
        />
      </center>
    </div>
  );
};

export default Demo;
