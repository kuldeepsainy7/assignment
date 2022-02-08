import React, { useState, useEffect } from "react";

const DashBoard = () => {
	const [data, setData] = useState("")

	useEffect(() => {
		getDetails();
	}, []);

	const getDetails = async () => {
		const res = await fetch('http://localhost:8000/detail')
		res.json()
		.then((res) => {
			console.log(res, "----")
			setData(res)
		}).catch((error) => {
			console.log(error)
		})
	}

	return (
		<>
			<div className="container">
				<h2>User Details</h2>
				<table>
					<tr>
						<th>Email</th>
						<th>Full Name</th>
						<th>User Name</th>
					</tr>
					{data && data.map((val) => {
						return (
							<tr>
								<td>{val.email}</td>
								<td>{val.fullName}</td>
								<td>{val.userName}</td>
							</tr>
						)
					})}
				</table>
			</div>
		</>
	)
}
export default DashBoard;