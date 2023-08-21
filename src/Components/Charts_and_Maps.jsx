import axios from "axios";
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";


import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';



import { MapContainer, TileLayer } from "react-leaflet";

import WorldMap from "./WorldMap";





const Dashboard = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [chartData, setChartData] = useState({});


  // Below the API keys to fetch the realtime data is used
  useEffect(() => {
    axios(
      "https://disease.sh/v3/covid-19/countries"
    )
      .then((res) => {
        const data = res.data
        setCountriesData(data);
      })


  }, []);

  useEffect(() => {


    axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    ).then((res) => {

      const data = res.data

      const newChartData = {
        labels: Object.keys(data.cases),
        datasets: [
          {
            label: "Cases",
            data: Object.values(data.cases),
            fill: false,
            borderColor: "#f50057",
            tension: 0.2,
          },
        ],
      };

      setChartData(newChartData);
    })


    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );

  }, []);

  return (
    <div className="  w-full pt-20 px-4 pb-8" >
      <h2 className="text-2xl font-bold mb-4">
                <button className=" bg-gray-300 p-3 text-2xl">
                Corona Cases Line Graph
                </button>
                </h2>

      <div className="border-2 w-11/12  m-auto 10 auto 10" >

        {
          chartData.datasets ?
            <Line data={chartData} /> : <h1 className="text-red-600 mb-4 font-bold text-2xl">Loading...</h1>
        }

      </div>

      <h2 className="text-xl font-bold mb-4">
                <button className=" bg-gray-300 p-3 text-xl" 
                style={{ marginTop: `${14}px`}} >
                Corona Cases World Map
                </button>
                </h2>
      <div
        className="border-2 w-11/12  m-auto 5 auto 5">
        <MapContainer
          className="m-auto w-full  border-blue-700"
          bounds={[[-60, -180], [85, 180]]} zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <WorldMap countriesData={countriesData} />

        </MapContainer>

      </div>
    </div>
  );
};

export default Dashboard;
