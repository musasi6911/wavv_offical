import head1 from "assets/head1.jpg";
import head2 from "assets/head2.jpg";
import head3 from "assets/head3.jpg";
import head4 from "assets/head4.jpg";
import head5 from "assets/head5.jpg";
import head6 from "assets/head6.jpg";
import top1 from "assets/top1.jpg";
import top2 from "assets/top2.jpg";
import top3 from "assets/top3.jpg";
import top4 from "assets/top4.jpg";
import top5 from "assets/top5.jpg";
import top6 from "assets/top6.jpg";
import top7 from "assets/top7.jpg";
import top8 from "assets/top8.jpg";
import top9 from "assets/top9.jpg";
import top10 from "assets/top10.jpg";
import top11 from "assets/top11.jpg";
import top12 from "assets/top12.jpg";
import top13 from "assets/top13.jpg";
import top14 from "assets/top14.jpg";
import top15 from "assets/top15.jpg";
import top16 from "assets/top16.jpg";
import top17 from "assets/top17.jpg";
import top18 from "assets/top18.jpg";

import { topSingerType, songDetailType, tracksDetailType } from "./types";

export const topSingers: topSingerType[] = [
  { name: "Shaan Merrill", pic: head1 },
  { name: "Jade Braun", pic: head2 },
  { name: "Luca Fitzpatrick", pic: head3 },
  { name: "Geraint Lang", pic: head4 },
  { name: "Miles Avila", pic: head5 },
  { name: "Shaan Merrill", pic: head6 },
];

export const hotSongs: songDetailType[] = [
  { title: "Past Fantasy", composer: "@Kalem Alvarez", pic: top1 },
  { title: "Endless Night Sky", composer: "@Sonya Mcphee", pic: top2 },
  { title: "Sit Around Morning", composer: "@Gwion Buck", pic: top3 },
  { title: "HOUSE Dinner", composer: "@Zakariya Ferry", pic: top4 },
  { title: "Mess Of Legend", composer: "@Jenna Robbins", pic: top5 },
  { title: "Teenage Dream", composer: "@Ansh Tran", pic: top6 },
];

export const recommend: songDetailType[] = [
  { title: "Drivin' Mind", composer: "@Nada Reyes", pic: top7 },
  { title: "Earning Rainy Day", composer: "@Rojin Handley", pic: top8 },
  { title: "Just Relax Game", composer: "@Liam Bolton", pic: top9 },
  { title: "That Slide", composer: "@Isis Dunlop", pic: top10 },
  { title: "Social River", composer: "@Mira Chapman", pic: top11 },
  { title: "Past Fantasy", composer: "@Kalem Alvarez", pic: top12 },
];

export const youMayAlsoLike: songDetailType[] = [
  { title: "It's Not My Hours", composer: "@Carol Vaughan", pic: top13 },
  { title: "Hate Wave", composer: "@Jada Norton", pic: top14 },
  { title: "Emotional Rain", composer: "@Areebah Salas", pic: top15 },
  { title: "More Stage", composer: "@Jasmine Cline", pic: top16 },
  { title: "Heroic Spirit", composer: "@Aaran Nichols", pic: top17 },
  { title: "Deep Night", composer: "@Lenny Cannon", pic: top18 },
];

export const tracks: tracksDetailType[] = [
  { title: "Past Fantasy", clickNum: 331150, pic: top1, duration: "2:17" },
  { title: "Endless Night Sky", clickNum: 54610, pic: top2, duration: "3:10" },
  { title: "Sit Around Morning", clickNum: 788, pic: top3, duration: "3:54" },
  { title: "HOUSE Dinner", clickNum: 3500, pic: top4, duration: "4:10" },
  { title: "Mess Of Legend", clickNum: 1549, pic: top5, duration: "0:27" },
];
