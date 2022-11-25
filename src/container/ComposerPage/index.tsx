import React from "react";
import Upload from "components/Upload";
import style from "./index.module.css";
import { useDispatch } from "react-redux";
import { showMusicPlayer } from "redux/musicPlayer/musicPlayerSlice";
import classnames from "classnames/bind";
import { tracks } from "mock/data";

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
              {tracks.map((song) => (
                <li onClick={() => dispatch(showMusicPlayer())}>
                  <div className={cx("user-tracks_cover")}>
                    <PlayCircleFill />
                    <img src={song.pic} alt="" />
                  </div>
                  <h2>{song.title}</h2>
                  <p>{song.clickNum}</p>
                  <span>{song.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Main Content Area end --> */}
    </>
  );
};

export default ComposerPage;
