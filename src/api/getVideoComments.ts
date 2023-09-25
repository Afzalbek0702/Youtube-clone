import axios from "axios";

const url =
	"https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&maxResults=100&";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "47a78b333fmsha7f185d94bc8846p17d75fjsn2adc29b1d894",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};
export const getComments = async (id: any) => {
	const { data } = await axios.get(`${url}videoId=${id}`, options);
	return data;
};
