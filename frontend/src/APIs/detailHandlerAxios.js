import axios from "axios";

export const saveDetails = async (data) => {
	console.log(data,'=======')
	try {
		const res = await axios.post(`http://localhost:8000/detail`,data,{
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return res;
	} catch (err) {
		console.log("error login controller ", err);
		// throw new Error(err);
		return err;
	}
};