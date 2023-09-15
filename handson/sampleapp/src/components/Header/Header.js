import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Header.css";

const Header = () => {
  // const [headerLinks, setAppHeaderLinks] = useState([]);

  // useEffect(() => {
  //   getMyHeaders();
  // }, []);

  const headerLinks = [
    {
      link: "/",
      text: "My Home",
    },
    {
      link: "/help",
      text: "Help",
    },
    {
      link: "/policy",
      text: "Policy",
    },
    {
      link: "/newemp",
      text: "Add New Employee",
    },
    {
      link: "/emplist",
      text: "My Employees",
    },
  ];

  // const getMyHeaders = () => {
  //   axios.get("http://localhost:7777/hetMyHeaderLinks").then((res) => {
  //     setAppHeaderLinks(res.data.headerLinks);
  //   });
  // };

  return (
    <div>
      <ul>
        {headerLinks.map((item, index) => (
          <li>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
