import React from "react";
import classnames from "classnames/bind";
import style from "./index.module.css";
import top1 from "assets/top1.jpg";
import { RootState } from "redux/store";
import {
  VolumeUpFill,
  ArrowRepeat,
  SkipStartFill,
  SkipEndFill,
  Shuffle,
  PlayCircle,
} from "react-bootstrap-icons";

import { useDispatch, useSelector } from "react-redux";
import { closeMusicPlayer } from "redux/musicPlayer/musicPlayerSlice";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(style);

const MusicPlayer: React.FC = () => {
  const {
    showPlayer,
    songDetail: { title, composer, pic },
  } = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className={cx("player", showPlayer ? "show" : "close")}
      //   style={{ bottom: showPlayer ? "0px" : "-80px" }}
    >
      <div
        className={cx("player-info")}
        onClick={() => {
          navigate("/songdetail");
          dispatch(closeMusicPlayer());
        }}
      >
        <img src={pic} alt="" />
        <h2>{title}</h2>
        <span>{composer}</span>
      </div>
      <div className={cx("player-control")}>
        <ArrowRepeat />
        <SkipStartFill />
        <PlayCircle />
        <SkipEndFill />
        <Shuffle />
      </div>
      <div className={cx("player-volume")}>
        <VolumeUpFill />
        <div className={cx("player-volume_bar")}>
          <p style={{ width: "75%" }}></p>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
