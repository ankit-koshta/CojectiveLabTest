import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import axios from "axios";
import Cart from "./Cart";

const App = () => {
  const [data, setData] = useState([
    {
      title: "Task",
      description: "frontend",
      deadline: "4pm",
      priority: "high",
    },
  ]);

  const getData = async () => {
    // let res = await axios.get("url");
    // setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      
      <div>
        <button>Add</button>
        <button>View Detail</button>
        <button>Edit</button>
        <button>Delete</button>
        <button>Mark task as complete</button>
      </div>
      <div style={{marginBottom:"1rem"}}>
      {data.map((el, i) => {
        return <Cart key={i} el={el} />;
      })}
      </div>
      <Form />
    </div>
  );
};

export default App;
