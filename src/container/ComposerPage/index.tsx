import React from "react";
import Upload from "components/Upload";
import style from "./index.module.css";
import { useDispatch } from "react-redux";
import { showMusicPlayer } from "redux/musicPlayer/musicPlayerSlice";
import classnames from "classnames/bind";
import Top1 from "assets/top1.jpg";
import Top2 from "assets/top2.jpg";
import Top3 from "assets/top3.jpg";
import Top4 from "assets/top4.jpg";
import Top5 from "assets/top5.jpg";

import Head3 from "assets/head3.jpg";
import {
  PlayCircle,
  MusicNoteBeamed,
  EyeFill,
  PersonPlusFill,
  PersonPlus,
  Share,
  PlayCircleFill,
} from "react-bootstrap-icons";
const cx = classnames.bind(style);

const ComposerPage: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      {/* <!-- Top Area --> */}
      <Upload />
      {/* <!-- Main Content Area start --> */}
      <div className={cx("content")}>
        <div className={cx("user-out")}>
          {/* <!-- Head Block --> */}
          <div className={cx("user-head")}>
            <img src={Head3} alt="" />
            <div className={cx("user-head_info")}>
              <h1>Luca Fitzpatrick</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                incidunt iure eos dolorem saepe accusamus totam laborum commodi!
                Debitis est quis sed dolore, eos ab quaerat molestias? Minus,
                delectus totam!
              </p>
              <ul>
                <li>
                  <MusicNoteBeamed />
                  13 Tracks
                </li>
                <li>
                  <EyeFill />
                  32.4K View
                </li>
                <li>
                  <PersonPlusFill />
                  115 Followers
                </li>
              </ul>
              <ol>
                <li>
                  <button>
                    <PlayCircle />
                    Play
                  </button>
                </li>
                <li>
                  <button>
                    <PersonPlus />
                    Follow
                  </button>
                </li>
                <li>
                  <button>
                    <Share />
                    Share
                  </button>
                </li>
              </ol>
            </div>
          </div>

          {/* <!-- Tracks Block --> */}
          <div className={cx("user-tracks")}>
            <h3>Tracks</h3>
            <ul>
              <li onClick={() => dispatch(showMusicPlayer())}>
                <div className={cx("user-tracks_cover")}>
                  <PlayCircleFill />
                  <img src={Top1} alt="" />
                </div>
                <h2>Past Fantasy</h2>
                <p>331150</p>
                <span>2:17</span>
              </li>
              <li onClick={() => dispatch(showMusicPlayer())}>
                <div className={cx("user-tracks_cover")}>
                  <PlayCircleFill />
                  <img src={Top2} alt="" />
                </div>
                <h2>Endless Night Sky</h2>
                <p>54610</p>
                <span>3:10</span>
              </li>
              <li onClick={() => dispatch(showMusicPlayer())}>
                <div className={cx("user-tracks_cover")}>
                  <PlayCircleFill />
                  <img src={Top3} alt="" />
                </div>
                <h2>Sit Around Morning</h2>
                <p>788</p>
                <span>3:54</span>
              </li>
              <li onClick={() => dispatch(showMusicPlayer())}>
                <div className={cx("user-tracks_cover")}>
                  <PlayCircleFill />
                  <img src={Top4} alt="" />
                </div>
                <h2>HOUSE Dinner</h2>
                <p>3500</p>
                <span>4:10</span>
              </li>
              <li onClick={() => dispatch(showMusicPlayer())}>
                <div className={cx("user-tracks_cover")}>
                  <PlayCircleFill />
                  <img src={Top5} alt="" />
                </div>
                <h2>Mess Of Legend</h2>
                <p>1549</p>
                <span>0:27</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Main Content Area end --> */}
    </>
  );
};

export default ComposerPage;
