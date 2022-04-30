import { useState, useEffect } from "react";

export const ShowEmployee = () => {

  const [data, setData] = useState([]);

  const [sort, setSort] = useState({

    item: "id",
    order: "asc",

  });

  useEffect(() => {

    getData();
  }, []);


  const getData = () => {

    fetch(`http://localhost:8080/employees`)
      .then((response) => response.json())
      .then((data) => setData(data));
      
  };

  const handleSort = (e) => {
    const { id, value } = e.target;
    console.log(id);
    console.log(value);
    console.log(e.target);
  };

  console.log(data);

  return (
    <div style={{margin:"20px"}}>
      <div className="controls">
        <div style={{broder:"1px solid black"}}>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            onClick={handleSort}
          >
            <option value="first_name" name="item">
              First Name
            </option>
            <option value="gender" name="item">
              Gender
            </option>
            <option value="age" name="item">
              Age
            </option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort"  style={{backgroundColor:"#0d6efd",color:"white",padding:"10px",border:"0px",margin:"20px"}}>sort</button>
      </div>
      <table className="table" style={{margin:"20px"}}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((e) => (
            <tr className="row">
              <td className="first_name">{e.first_name}</td>
              <td className="last_name">{e.last_name}</td>
              <td className="email">{e.email}</td>
              <td className="gender">{e.gender}</td>
              <td className="age">{+e.age}</td>
              <td className="tenth_score">{+e.tenth_score}</td>
              <td className="twelth_score">{+e.twelth_score}</td>
              <td className="preferred_branch">{e.preferred_branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
