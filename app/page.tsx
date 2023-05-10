"use client";

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import ProgressBar from "@ramonak/react-progress-bar";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type instrument = {
  id: number;
  thumbnail: string;
  title: string;
  unique_plays: number;
  total_plays: number;
  completion_rate: string;
};

const data: instrument[] = [
  {
    id: 1,
    thumbnail: "https://thumbs.dreamstime.com/b/girl-playing-guitar-outdoors-summer-concept-young-79516319.jpg",
    title: "Guitar",
    unique_plays: 100,
    total_plays: 200,
    completion_rate: "50%",
  },
  {
    id: 2,
    thumbnail: "https://s2.best-wallpaper.net/wallpaper/iphone/1903/Drums-instrument-grass_iphone_1080x1920.jpg",
    title: "Drums",
    unique_plays: 200,
    total_plays: 300,
    completion_rate: "70%",
  },
  {
    id: 3,
    thumbnail: "https://avatars.mds.yandex.net/get-market-ugc/474703/2a0000016e9dba041e92940fb167d052eb72/700-700",
    title: "Piano",
    unique_plays: 300,
    total_plays: 400,
    completion_rate: "80%",
  },
  {
    id: 4,
    thumbnail: "https://wallpapercave.com/wp/wp5042470.jpg",
    title: "Violin",
    unique_plays: 400,
    total_plays: 500,
    completion_rate: "90%",
  },
  {
    id: 5,
    thumbnail: "https://www.itl.cat/pngfile/big/132-1324727_download-trombone-wallpaper-gallery-trombone.jpg",
    title: "Trumpet",
    unique_plays: 500,
    total_plays: 600,
    completion_rate: "60%",
  },
  {
    id: 6,
    thumbnail:
      "https://www.littletheatreguild.org.uk/wp-content/uploads/2020/11/daniel-angele-2gu4hKuFhi0-unsplash-1.jpg",
    title: "Saxophone",
    unique_plays: 600,
    total_plays: 700,
    completion_rate: "70%",
  },
  {
    id: 7,
    thumbnail:
      "https://cdnb.artstation.com/p/assets/images/images/021/577/149/large/mikko-pekka-salo-00-main-hd-flute-and-poses-for-genesis-8-daz3d.jpg?1572211079",
    title: "Flute",
    unique_plays: 700,
    total_plays: 800,
    completion_rate: "80%",
  },
  {
    id: 8,
    thumbnail: "https://c.stocksy.com/a/SGP500/z9/1288760.jpg",
    title: "Harmonica",
    unique_plays: 800,
    total_plays: 900,
    completion_rate: "90%",
  },
  {
    id: 9,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Accordion_Girl_%283827557246%29.jpg",
    title: "Accordion",
    unique_plays: 900,
    total_plays: 1000,
    completion_rate: "100%",
  },
  {
    id: 10,
    thumbnail: "https://wallpapercave.com/wp/wp7646897.jpg",
    title: "Bass Guitar",
    unique_plays: 1000,
    total_plays: 1100,
    completion_rate: "80%",
  },
  {
    id: 11,
    thumbnail:
      "https://www.culturespotmc.com/wp-content/uploads/sites/www.culturespotmc.com/images/2018/07/event-featured-deborah-nationalphilharmonic-org-1531757692.jpeg",
    title: "Cello",
    unique_plays: 1100,
    total_plays: 1200,
    completion_rate: "70%",
  },
  {
    id: 12,
    thumbnail: "https://media.baamboozle.com/uploads/images/139917/1620482473_242731_url.jpeg",
    title: "Harp",
    unique_plays: 1200,
    total_plays: 1300,
    completion_rate: "60%",
  },
  {
    id: 13,
    thumbnail: "https://www.1000mest.ru/foto/zhenevsky_sobor5.jpg",
    title: "Organ",
    unique_plays: 1300,
    total_plays: 1400,
    completion_rate: "50%",
  },
  {
    id: 14,
    thumbnail: "https://assets.wallpapersin4k.org/uploads/2017/04/Trombone-Wallpaper-19.jpg",
    title: "Trombone",
    unique_plays: 1400,
    total_plays: 1500,
    completion_rate: "40%",
  },
  {
    id: 15,
    thumbnail: "https://i.pinimg.com/originals/ea/77/9a/ea779accc8ca73d14beb9c1332af2751.jpg",
    title: "Ukulele",
    unique_plays: 1500,
    total_plays: 1600,
    completion_rate: "30%",
  },
];

const chartData = (item: instrument) => {
  return {
    labels: ["Unique Plays", "Total Plays"],
    datasets: [
      {
        label: item.title,
        data: [item.unique_plays, item.total_plays],
        backgroundColor: ["rgba(75,192,192,0.4)", "rgba(255,99,132,0.4)"],
        borderColor: ["rgba(75,192,192,1)", "rgba(255,99,132,1)"],
        borderWidth: 1,
      },
    ],
  };
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function Home() {
  return (
    <div className="bg-gray-800 py-20">
      <h2 className="text-4xl text-gray-200 text-center py-10 font-extrabold mx-auto md:text-5xl">
        Instrument Dashboard with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#453ebe] to-[#f900fd]">
          Chart and Progress Bar
        </span>
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-5 mx-auto">
        {data.map((item) => (
          <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 bg-gray-100 hover:bg-gray-200">
            <div>
              <div className="relative">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:w-48 md:rounded-none md:rounded-l-lg"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end bg-gradient-to-t from-black h-1/2 text-2xl rounded-bl-lg font-bold text-center tracking-tight text-white">
                  <h5 className="p-3">{item.title}</h5>
                  <ProgressBar className="w-full p-2" completed={parseFloat(item.completion_rate)} maxCompleted={100} />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-3 font-normal text-center text-gray-700">
                Unique Plays: {item.unique_plays}
                <br />
                Total Plays: {item.total_plays}
              </p>
              <Bar data={chartData(item)} options={chartOptions}></Bar>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
