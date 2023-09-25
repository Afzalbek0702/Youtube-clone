import axios from "axios";
const BaseUrl: string = "https://youtube-v31.p.rapidapi.com";
const options = {
	method: "GET",
	url: BaseUrl,
	params: {
		part: "snippet",
		maxResults: "50",
		// order: "date",
	},
	headers: {
		"X-RapidAPI-Key": "47a78b333fmsha7f185d94bc8846p17d75fjsn2adc29b1d894",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};
export const fetchFromApi = async (url: string) => {
	const { data } = await axios.get(`${BaseUrl}/${url}`, options);
	return data;
};

// const u =
// ('https://youtube.googleapis.com/youtube/v3/search?q="reactjs project"&key=AIzaSyCVSWlyJ686SVhVdXAwCjJzY1Y2zuxPdqM&part=snippet&type=video');
// const BaseUrl: string = "https://youtube.googleapis.com/youtube/v3/";
// const options = {
// 	method: "GET",
// 	url: BaseUrl,
// 	params: {
// 		maxResults: "50",
// 		part: "snippet",
// 		type: "video",
// 		key: "AIzaSyCVSWlyJ686SVhVdXAwCjJzY1Y2zuxPdqM",
// 	},
// };
// export const fetchFromApi = async (url: string) => {
// 	const { data } = await axios.get(`${BaseUrl}${url}`, options);
// 	return data;
// };
// export const fetchFromApi = async () => {
// 	const data = await fetch(
// 		'https:youtube.googleapis.com/youtube/v3/search?q="reactjs project"&key=AIzaSyCVSWlyJ686SVhVdXAwCjJzY1Y2zuxPdqM&part=snippet&type=video'
// 	);
// 	data.json();
// 	return data;
// };
