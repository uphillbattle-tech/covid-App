import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Card from 'react-bootstrap/Card';

const HospitalBeds = () => {
  const [beds, setBeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getBeds();
  }, [searchTerm]);



  const getBeds = async () => {
    const Response = await fetch(
      "https://api.covidactnow.org/v2/states.json?apiKey=b9e43cbc39f449fcaf0707c77f511896"
    );
    const data = await Response.json();
    console.log(data);
    setBeds(data);
  };

  const getsearch = (e) => {
    setSearchTerm(e.target.value);
  };




 

  return (
    <div className="App">
        <Card.Img  variant="top" src="./images/chart.jpg" />
        <h1 >Hospital Beds Capacity</h1>
      <input className="search-box" type="text" placeholder="Search By State" onChange={getsearch} />
      <Table striped bordered hover>
        <thead>
          <tr >
            <th>States</th>
            <th>Hospital Beds Capacity</th>
            <th>Hospital Beds Total Usage</th>
            <th>Weekly Admissions</th>
          </tr>
        </thead>
        <tbody >
          {beds
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.state.toLowerCase().includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((bed) => (
              <tr key={bed.state}>
                <td>{bed.state}</td>
                <td>{bed.actuals.hospitalBeds.capacity}</td>
                <td>{bed.actuals.hospitalBeds.currentUsageTotal}</td>
                <td>{bed.actuals.hospitalBeds.weeklyCovidAdmissions}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HospitalBeds;
