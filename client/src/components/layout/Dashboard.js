import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

//css
import "../../assets/css/Dashboard.css";

//background image
//import bfImg from '../../assets/img/bg.png'

const Dashboard = () => {
  //array of blood unit availbility
  const [bloodTable, setbloodTable] = useState([]);

  //useEffect call
  useEffect(() => {
    axios
      .get("http://localhost:3001/home")
      .then(function (response) {
        //console.log(response);
        setbloodTable(response.data)
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>BLOOD STOCK</h1>

      <table className="blood-table">
        <thead>
          <tr>
            <th>BLOOD GROUP</th>
            <th>UNIT</th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.length > 0 && bloodTable.map((val) => {
            return (
              <tr key={val.user_id}>
                <td>{val.userFName}</td>
                <td>{val.userBloodGroup}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <img src={bfImg} alt="bg"/>*/}
      <Footer />
    </div>
  );
};

export default Dashboard;
