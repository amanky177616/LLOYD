import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Header.css";

const Header = () => {
  const [headerLinks, setAppHeaderLinks] = useState([]);

  useEffect(() => {
    getMyHeaders();
  }, []);

  const getMyHeaders = () => {
    axios.get("http://localhost:7777/hetMyHeaderLinks").then((res) => {
      setAppHeaderLinks(res.data.headerLinks);
    });
  };

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
