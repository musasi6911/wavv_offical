import React from "react";
import classnames from "classnames/bind";
import style from "./index.module.css";
import { Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(style);

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={cx("top")}>
        <div className={cx("top-nologin")}>
          <button onClick={() => navigate("/login")}>
            <Person />
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
