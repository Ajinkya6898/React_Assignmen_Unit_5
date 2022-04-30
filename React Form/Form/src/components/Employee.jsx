import { useState } from "react";

export const Employee = () => {

  const [form, setForm] = useState({});

  const handlechange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,

    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    fetch("http://localhost:8080/employees", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },

    });
  };

  return (

    <form onSubmit={handleSubmit}>
      <div style={{margin:"20px"}}>
        Firstname:{" "}

        <input 
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={handlechange}

        />
      </div>
      <div style={{margin:"20px"}}>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={handlechange}

        />
      </div >
      <div style={{margin:"20px"}}>
        {" "}
        Address:
        <input
          type="text"
          name="address"
          className="email"
          placeholder="enter address"
          onChange={handlechange}
        />

      </div>

     
      <div style={{margin:"20px"}}>
        Salary{" "}
        <input
          type="number"
          name="salary"
          className="salary"
          placeholder="enter salary"
          onChange={handlechange}
        />

      </div>
     
      
      <div style={{margin:"20px"}}>
        <select 
          value={form.department} 
          name="department"
          className="department"
          onChange={handlechange}
        >
          <option value="">Select Department</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
          <option value="Finance">Finance</option>
          <option value="Sales">Sales</option>
          <option value="General">General</option>
          <option value="Purchase">Purchase</option>
        </select>

      </div>

      <div style={{margin:"20px"}}>
      Married {" "}
        <input type="checkbox" />
      </div>
      <div style={{margin:"20px"}}>
      Single {" "}
        <input type="checkbox" />
      </div>

      <input style={{margin:"20px",backgroundColor:"#0d6efd",color:"white",padding:"10px",border:"0px"}} className="submit" type="submit" value="Submit" />
     
    </form>
  );
};
