import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./covid.css";

const CovidCases = () => {
  const [results, setReulsts] = useState([]);
  const [searchTerm1, setSearchTerm1] = useState("");

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    const Response = await fetch("https://api.covid19api.com/summary");
    const data = await Response.json();
    console.log(data);
    setReulsts(data.Countries);
  };

  const getsearch = (e) => {
    setSearchTerm1(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="header1">Covid Cases And Deaths</h1>
      <input
        className="search-box"
        type="text"
        onChange={getsearch}
        placeholder="Search By Country"
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Countries</th>
            <th>New Confirmed Cases</th>
            <th>Total Confirmed Cases</th>
            <th>New Confirmed Deaths</th>
            <th>Total Confirmed Deaths</th>
          </tr>
        </thead>
        <tbody>
          {results
            .filter((val) => {
              if (searchTerm1 == "") {
                return val;
              } else if (
                val.Country.toLowerCase().includes(
                  searchTerm1.toLocaleLowerCase()
                )
              ) {
                return val;
              }
            })
            .map((result) => (
              <tr key={result.Country}>
                <td>{result.Country}</td>
                <td> {result.NewConfirmed}</td>
                <td> {result.TotalConfirmed}</td>
                <td> {result.NewDeaths}</td>
                <td> {result.TotalDeaths}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CovidCases;
