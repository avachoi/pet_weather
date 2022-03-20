import React, { useEffect, useState } from "react";
// import clearSky from "./icon/01d.png";
// import fewClouds from "./icon/02d.png";
// import scatteredClouds from "./icon/03d.png";
// import brokenClouds from "./icon/04d.png";
// import showerRain from "./icon/09d.png";
// import rain from "./icon/10d.png";
// import thunderstorm from "./icon/10d.png";
// import snow from "./icon/13d.png";
// import mist from "./icon/50d.png";

const App = (props) => {
	let [weather, setWeather] = useState({});
	let [icon, setIcon] = useState({});
	useEffect(() => {
		fetch(
			// "http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1647438705226&appid=130515a2f8fc60695d13589fe021f7fc"
			"https://api.openweathermap.org/data/2.5/onecall?lat=37.5665&lon=-126.9780&units=standard&appid=130515a2f8fc60695d13589fe021f7fc"
			// "http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=130515a2f8fc60695d13589fe021f7fc"
		)
			.then((res) => res.json())
			.then((result) => {
				setWeather(result);
			});
	}, []);

	console.log("weather", weather);

	let today = weather.list ? weather.list[39] : 7;
	let day = weather.list ? new Date(today.dt).getDay() : 7;

	let weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat", ""];
	let iconCode = weather.list ? today.weather[0].icon : "";
	// let iconImg = iconCode === "04n" ? brokenClouds : "";
	let min = weather.list
		? Math.round(((Number(today.main.temp_min) - 273.15) * 9) / 5 + 32)
		: -1;
	let max = weather.list
		? Math.round(((Number(today.main.temp_max) - 273.15) * 9) / 5 + 32)
		: -1;
	return (
		<div className="weather">
			<div>{weekday[day]}</div>
			{/* <img src={iconImg} /> */}
			{/* <img src={process.env.PUBLIC_URL + " /icon/d.png"}></img> */}
			<img src="/icon/d.png"></img>

			<div className="degreeBox">
				<div className="degree">{min} </div>
				<div className="degree">{max}</div>
			</div>
		</div>
	);
};

export default App;
