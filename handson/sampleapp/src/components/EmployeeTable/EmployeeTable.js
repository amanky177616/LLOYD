import Datatable from "../Datatable/Datatable";
import "./EmployeeTable.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const EmployeeTable = () => {
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    axios.get("http://localhost:8888/employee").
    then((res) => {
      console.log(res);
      setEmpData(res.data);
    });
  };

  // const empData = [
  //   {
  //     id: 1,
  //     name: "Ashish Rautela",
  //     address: "New Delhi, India",
  //     department: "IT",
  //     salary: 10000,
  //   },
  //   {
  //     id: 2,
  //     name: "Vivek Srivastava",
  //     address: "Greater Noida, India",
  //     department: "IT",
  //     salary: 20000,
  //   },
  //   {
  //     id: 3,
  //     name: "Mukesh Kumar",
  //     address: "Gurugram, Haryana",
  //     department: "IT",
  //     salary: 30000,
  //   },
  // ];

  const dataHeader = ["Id", "Name", "Address", "Department", "Salary"];

  return (
    <div>
      <h1>My Employees</h1>
      <Datatable data={empData} header={dataHeader}></Datatable>
    </div>
  );
};
export default EmployeeTable;
