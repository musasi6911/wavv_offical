import React from "react";
import classnames from "classnames/bind";
import topBanner from "assets/top_banner.jpg";
import { PlayCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  showMusicPlayer,
  selectMusic,
} from "redux/musicPlayer/musicPlayerSlice";
import SignIn from "components/SignIn";
import { topSingers, hotSongs, recommend, youMayAlsoLike } from "mock/data";

import style from "./index.module.css";
const cx = classnames.bind(style);

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      {/* -- Right Main Area start -- */}
      {/* -- Top Area -- */}
      <SignIn />
      <div className={cx("content")}>
        {/* -- Main Content Area start -- */}
        {/* -- AD -- */}
        <div className={cx("top-ad")}>
          <div className={cx("ad-text")}>
            <h2>Wavv's Super Stage!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              distinctio nihil illo beatae nesciunt similique adipisci, quo
              omnis voluptatem. Aspernatur, possimus labore neque quasi totam
              dolores, vitae ut accusantium eius recusandae ex quisquam
              praesentium blanditiis ea nam rem ab nihil exercitationem magni
              nostrum nemo modi. Cum earum iste doloribus qui?
            </p>
          </div>
          <img src={topBanner} alt="" />
        </div>
        {/* -- Top Singers -- */}
        <h3 className={cx("list-title")}>Top Singers</h3>
        <ul className={cx("list")}>
          {topSingers.map((singer) => (
            <li>
              <div
                className={cx("composer-item")}
                onClick={() => navigate("/composer")}
              >
                <img src={singer.pic} alt="" />
                <h2>{singer.name}</h2>
              </div>
            </li>
          ))}
        </ul>

        {/* -- Hot Songs -- */}
        <h3 className={cx("list-title")}>Hot Songs</h3>
        <ul className={cx("list", "list-square")}>
          {hotSongs.map((song) => (
            <li>
              <div
                onClick={() => {
                  dispatch(showMusicPlayer());
                  dispatch(
                    selectMusic({
                      title: song.title,
                      composer: song.composer,
                      pic: song.pic,
                    })
                  );
                }}
              >
                <PlayCircleFill />
                <img src={song.pic} alt="" />
                <h2>{song.title}</h2>
                <span>{song.composer}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* -- Recommend -- */}
        <h3 className={cx("list-title")}>Recommend</h3>
        <ul className={cx("list", "list-square")}>
          {recommend.map((song) => (
            <li>
              <div
                onClick={() => {
                  dispatch(showMusicPlayer());
                  dispatch(
                    selectMusic({
                      title: song.title,
                      composer: song.composer,
                      pic: song.pic,
                    })
                  );
                }}
              >
                <PlayCircleFill />
                <img src={song.pic} alt="" />
                <h2>{song.title}</h2>
                <span>{song.composer}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* -- You May Also Like -- */}
        <h3 className={cx("list-title")}>You May Also Like</h3>
        <ul className={cx("list", "list-square")}>
          {youMayAlsoLike.map((song) => (
            <li>
              <div
                onClick={() => {
                  dispatch(showMusicPlayer());
                  dispatch(
                    selectMusic({
                      title: song.title,
                      composer: song.composer,
                      pic: song.pic,
                    })
                  );
                }}
              >
                <PlayCircleFill />
                <img src={song.pic} alt="" />
                <h2>{song.title}</h2>
                <span>{song.composer}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* -- Main Content Area end -- */}
      {/* -- Right Main Area end --); */}
    </>
  );
};

export default LandingPage;
