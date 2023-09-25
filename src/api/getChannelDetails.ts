import axios from "axios";
export const getChannelDetails = async (id: any) => {
	const options = {
		method: "GET",
		url: "https://youtube-v31.p.rapidapi.com/channels",
		params: {
			part: "snippet,statistics",
			id: id,
		},
		headers: {
			"X-RapidAPI-Key": "47a78b333fmsha7f185d94bc8846p17d75fjsn2adc29b1d894",
			"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
		},
	};

	try {
		const { data } = await axios.request(options);
		return data;
	} catch (error) {
		return error;
	}
};
