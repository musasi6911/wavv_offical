import React from "react";
import Upload from "components/Upload";
import style from "./index.module.css";
import {
  ClockFill,
  PlayCircleFill,
  HeartFill,
  PlayCircle,
  Share,
  Heart,
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { showMusicPlayer } from "redux/musicPlayer/musicPlayerSlice";
import Top7 from "assets/top7.jpg";
import Top13 from "assets/top13.jpg";
import Top14 from "assets/top14.jpg";
import Top15 from "assets/top15.jpg";
import Top16 from "assets/top16.jpg";
import Top17 from "assets/top17.jpg";
import Head1 from "assets/head1.jpg";
import Head2 from "assets/head2.jpg";
import Head3 from "assets/head3.jpg";
import Head4 from "assets/head4.jpg";

import classnames from "classnames/bind";

const cx = classnames.bind(style);

const UploadPage: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Upload />
      <div className={cx("content")}>
        <div className={cx("song-detail_out")}>
          <div className={cx("song-detail_head")}>
            <img src={Top7} alt="" />
            <div className={cx("song-detail_singer")}>
              <h1>Teenage Dream</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                commodi placeat autem numquam nam quisquam itaque optio
                reprehenderit natus perspiciatis.
              </p>
              <ul className={cx("song-detail_info")}>
                <li>
                  <div>
                    <img src={Head4} alt="" />
                    Nada Reyes
                  </div>
                </li>
                <li>
                  <ClockFill />
                  2022/08/12
                </li>
                <li>
                  <PlayCircleFill />
                  4566 Plays
                </li>
                <li>
                  <HeartFill />
                  328 Favorites
                </li>
              </ul>
              <ul className={cx("song-detail_btns")}>
                <li>
                  <button className={cx("song-detail_play")}>
                    <PlayCircle />
                    Play
                  </button>
                </li>
                <li>
                  <button>
                    <Share />
                    Share
                  </button>
                </li>
                <li>
                  <button>
                    <Heart />
                    Favorite
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- More --> */}
          <div className={cx("song-detail_more")}>
            <h3>More of Nada Reyes</h3>
            <ul>
              <li>
                <div onClick={() => dispatch(showMusicPlayer())}>
                  <PlayCircleFill />
                  <img src={Top13} alt="" />
                  <h2>Earning Rainy Day</h2>
                </div>
              </li>
              <li>
                <div onClick={() => dispatch(showMusicPlayer())}>
                  <PlayCircleFill />
                  <img src={Top14} alt="" />
                  <h2>Just Relax Game</h2>
                </div>
              </li>
              <li>
                <div onClick={() => dispatch(showMusicPlayer())}>
                  <PlayCircleFill />
                  <img src={Top15} alt="" />
                  <h2>That Slide</h2>
                </div>
              </li>
              <li>
                <div onClick={() => dispatch(showMusicPlayer())}>
                  <PlayCircleFill />
                  <img src={Top16} alt="" />
                  <h2>Just Relax Game</h2>
                </div>
              </li>
              <li>
                <div onClick={() => dispatch(showMusicPlayer())}>
                  <PlayCircleFill />
                  <img src={Top17} alt="" />
                  <h2>That Slide</h2>
                </div>
              </li>
            </ul>
          </div>

          {/* <!-- Comments --> */}
          <div className={cx("song-detail_comments")}>
            <h3>Comments</h3>
            <ul>
              <li>
                <img src={Head1} alt="" />
                <h4>Margot Correa</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat pariatur laborum hic nam magnam natus quod, et nostrum
                  similique ex reprehenderit, quaerat facilis at quis
                  voluptatibus itaque iste eos fuga!
                </p>
                <span>3 hours ago</span>
              </li>
              <li>
                <img src={Head2} alt="" />
                <h4>Fahima Bateman</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  veritatis!
                </p>
                <span>3 hours ago</span>
              </li>
              <li>
                <img src={Head3} alt="" />
                <h4>Abu Rosa</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  ducimus non obcaecati veritatis.
                </p>
                <span>3 hours ago</span>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Song Detail Out end --> */}
      </div>
    </>
  );
};

export default UploadPage;
