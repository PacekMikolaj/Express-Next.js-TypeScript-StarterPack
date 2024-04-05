import React, { useEffect, useState } from "react";

type ApiResponse<Data = string> = {
  message: Data;
};

const index = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("index");
    fetch("http://localhost:5000/api/home")
      .then((res) => res.json())
      .then((data: ApiResponse) => setText(data.message))
      .catch((err) => console.log(err));
  });

  return <div>index - {text}</div>;
};

export default index;
