import Datatable from "../Datatable/Datatable";
import "./EmployeeTable.css";

const EmployeeTable = () => {
  const empData = [
    {
      id: 1,
      name: "Ashish Rautela",
      address: "New Delhi, India",
      department: "IT",
      salary: 10000,
    },
    {
      id: 2,
      name: "Vivek Srivastava",
      address: "Greater Noida, India",
      department: "IT",
      salary: 20000,
    },
    {
      id: 3,
      name: "Mukesh Kumar",
      address: "Gurugram, Haryana",
      department: "IT",
      salary: 30000,
    },
  ];

  const dataHeader = ["Id", "Name", "Address", "Department", "Salary"];

  return (
    <div>
      <h1>My Employees</h1>
      <Datatable data={empData} header={dataHeader}></Datatable>
    </div>
  );
};
export default EmployeeTable;
