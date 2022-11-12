import React from "react";
import musicAdd from "../../assets/music-add.svg";
import head6 from "../../assets/head6.jpg";
import classnames from "classnames/bind";
import style from "./index.module.css";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(style);

const Upload: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={cx("top")}>
        <div className={cx("top-login")}>
          <div
            className={cx("top-userhead")}
            onClick={() => navigate("/composer")}
          >
            <img src={head6} alt="user-photo" />
            Margot Correa
          </div>
          <button
            className={cx("top-upload")}
            onClick={() => navigate("/uploadmusic")}
          >
            <img src={musicAdd} alt="add music" />
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
