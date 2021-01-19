const URL = "https://blogs-json.herokuapp.com/blogs/";
export const data = async (params) => {
	if (params) {
		return await fetch(`${URL}${params}`).then((response) => response.json());
	}
	return await fetch(URL).then((response) => response.json());
};
