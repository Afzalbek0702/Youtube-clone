import axios from "axios";

const BaseUrl: string =
	"https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "47a78b333fmsha7f185d94bc8846p17d75fjsn2adc29b1d894",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const GetvideoDeatails = async (id: any) => {
	const { data } = await axios.get(`${BaseUrl}id=${id}`, options);
	return data;
};
