import React from "react";
import classnames from "classnames/bind";
import topBanner from "../../assets/top_banner.jpg";
import { PlayCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showMusicPlayer } from "../../redux/musicPlayer/musicPlayerSlice";
import SignIn from "../../components/SignIn";
import head1 from "../../assets/head1.jpg";
import head2 from "../../assets/head2.jpg";
import head3 from "../../assets/head3.jpg";
import head4 from "../../assets/head4.jpg";
import head5 from "../../assets/head5.jpg";
import head6 from "../../assets/head6.jpg";
import top1 from "../../assets/top1.jpg";
import top2 from "../../assets/top2.jpg";
import top3 from "../../assets/top3.jpg";
import top4 from "../../assets/top4.jpg";
import top5 from "../../assets/top5.jpg";
import top6 from "../../assets/top6.jpg";
import top7 from "../../assets/top7.jpg";
import top8 from "../../assets/top8.jpg";
import top9 from "../../assets/top9.jpg";
import top10 from "../../assets/top10.jpg";
import top11 from "../../assets/top11.jpg";
import top12 from "../../assets/top12.jpg";
import top13 from "../../assets/top13.jpg";
import top14 from "../../assets/top14.jpg";
import top15 from "../../assets/top15.jpg";
import top16 from "../../assets/top16.jpg";
import top17 from "../../assets/top17.jpg";
import top18 from "../../assets/top18.jpg";

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
        {/* -- List - Circel -- */}
        <h3 className={cx("list-title")}>Top Singers</h3>
        <ul className={cx("list")}>
          <li>
            <div
              className={cx("composer-item")}
              onClick={() => navigate("/composer")}
            >
              <img src={head1} alt="" />
              <h2>Shaan Merrill</h2>
            </div>
          </li>
          <li>
            <div
              className={cx("composer-item")}
              onClick={() => navigate("/composer")}
            >
              <img src={head2} alt="" />
              <h2>Jade Braun</h2>
            </div>
          </li>
          <li>
            <div
              className={cx("composer-item")}
              onClick={() => navigate("/composer")}
            >
              <img src={head3} alt="" />
              <h2>Luca Fitzpatrick</h2>
            </div>
          </li>
          <li>
            <div
              className={cx("composer-item")}
              onClick={() => navigate("/composer")}
            >
              <img src={head4} alt="" />
              <h2>Geraint Lang</h2>
            </div>
          </li>
          <li>
            <div
              className={cx("composer-item")}
              onClick={() => navigate("/composer")}
            >
              <img src={head5} alt="" />
              <h2>Miles Avila</h2>
            </div>
          </li>
          <li>
            <div
              className={cx("composer-item")}
              onClick={() => navigate("/composer")}
            >
              <img src={head6} alt="" />
              <h2>Shaan Merrill</h2>
            </div>
          </li>
        </ul>

        {/* -- List - Square 1 -- */}
        <h3 className={cx("list-title")}>Hot Songs</h3>
        <ul className={cx("list", "list-square")}>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top1} alt="" />
              <h2>Past Fantasy</h2>
              <span>@Kalem Alvarez</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top2} alt="" />
              <h2>Endless Night Sky</h2>
              <span>@Sonya Mcphee</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top3} alt="" />
              <h2>Sit Around Morning</h2>
              <span>@Gwion Buck</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top4} alt="" />
              <h2>HOUSE Dinner</h2>
              <span>@Zakariya Ferry</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top5} alt="" />
              <h2>Mess Of Legend</h2>
              <span>@Jenna Robbins</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top6} alt="" />
              <h2>Teenage Dream</h2>
              <span>@Ansh Tran</span>
            </div>
          </li>
        </ul>

        {/* -- List - Square 2 -- */}
        <h3 className={cx("list-title")}>Recommend</h3>
        <ul className={cx("list", "list-square")}>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top7} alt="" />
              <h2>Drivin' Mind</h2>
              <span>@Nada Reyes</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top8} alt="" />
              <h2>Earning Rainy Day</h2>
              <span>@Rojin Handley</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top9} alt="" />
              <h2>Just Relax Game</h2>
              <span>@Liam Bolton</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top10} alt="" />
              <h2>That Slide</h2>
              <span>@Isis Dunlop</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top11} alt="" />
              <h2>Social River</h2>
              <span>@Mira Chapman</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top12} alt="" />
              <h2>Past Fantasy</h2>
              <span>@Kalem Alvarez</span>
            </div>
          </li>
        </ul>

        {/* -- List - Square 3 -- */}
        <h3 className={cx("list-title")}>You May Also Like</h3>
        <ul className={cx("list", "list-square")}>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top13} alt="" />
              <h2>It's Not My Hours</h2>
              <span>@Carol Vaughan</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top14} alt="" />
              <h2>Hate Wave</h2>
              <span>@Jada Norton</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top15} alt="" />
              <h2>Emotional Rain</h2>
              <span>@Areebah Salas</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top16} alt="" />
              <h2>More Stage</h2>
              <span>@Jasmine Cline</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top17} alt="" />
              <h2>Heroic Spirit</h2>
              <span>@Aaran Nichols</span>
            </div>
          </li>
          <li>
            <div onClick={() => dispatch(showMusicPlayer())}>
              <PlayCircleFill />
              <img src={top18} alt="" />
              <h2>Deep Night</h2>
              <span>@Lenny Cannon</span>
            </div>
          </li>
        </ul>
      </div>
      {/* -- Main Content Area end -- */}
      {/* -- Right Main Area end --); */}
    </>
  );
};

export default LandingPage;
