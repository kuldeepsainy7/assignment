import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { saveDetails } from '../../APIs/detailHandlerAxios';
import $ from 'jquery'
import axios from "axios";

const InputDetails = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
	} = useForm();
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [fullName, setFullName] = useState("");
	const [status, setStatus] = useState(false);

	const onSubmit = () => {
		let data = {
			email: email,
			userName: userName,
			fullName: fullName
		}
		console.log(data, "dataaa")
		axios.post(`http://localhost:8000/detail`, data, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				console.log(res, "-------")
				if (!res.data) {
					setStatus(false)
				} else {
					setStatus(true)
				}
			}).catch((err) => {
				console.log(err)
			})
	}

	if (status) {
		navigate(`/dashboard`, { replace: true })
	} else {
		<div>"Enter Data."</div>

	}

	function add() {
		var new_chq_no1 = parseInt($('#total_chq1').val()) + 1;
		var new_chq_no2 = parseInt($('#total_chq2').val()) + 1;
		var new_chq_no3 = parseInt($('#total_chq3').val()) + 1;
		var new_input1 = "<input type='email'placeholder='Email' name='email_" + new_chq_no1 + "' id='new_" + new_chq_no1 + "'>";
		var new_input2 = "<input type='text' placeholder='Full Name' name='fullname_" + new_chq_no2 + "' id='new_" + new_chq_no2 + "'>";
		var new_input3 = "<input type='text' placeholder='User Name' name='username_" + new_chq_no3 + "' id='new_" + new_chq_no3 + "'>";
		$('#new_field1').append(new_input1);
		$('#new_field2').append(new_input2);
		$('#new_field3').append(new_input3);
		$('#total_chq1').val(new_chq_no1)
		$('#total_chq2').val(new_chq_no2)
		$('#total_chq3').val(new_chq_no3)
	}

	function remove() {
		var last_chq_no1 = $('#total_chq1').val();
		var last_chq_no2 = $('#total_chq2').val();
		var last_chq_no3 = $('#total_chq3').val();
		if (last_chq_no1 > 1 && last_chq_no2 > 1 && last_chq_no3 > 1) {
			$('#new_' + last_chq_no1).remove();
			$('#new_' + last_chq_no2).remove();
			$('#new_' + last_chq_no3).remove();
			$('#total_chq1').val(last_chq_no1 - 1);
			$('#total_chq2').val(last_chq_no2 - 1);
			$('#total_chq3').val(last_chq_no3 - 1);
		}
	}


	return (
		<div className="form-group">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="container">
					<div className="section">
						<label ><b>Email</b></label>
						<input type="email" placeholder="Email" name="email" required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="section">
						<label><b>Full Name</b></label>
						<input type="text" placeholder="Full Name" name="fullname"
							onChange={(e) => setFullName(e.target.value)}
						/>
					</div>
					<div className="section">
						<label><b>User Name</b></label>
						<input type="text" placeholder="User Name" name="username" required
							onChange={(e) => setUserName(e.target.value)} />
					</div>

					<div className="section" id="new_field1" >
						<input type="hidden" value="1" id="total_chq1"
							onChange={(e) => setEmail(e.target.value)}
						></input>
					</div>

					<div className="section" id="new_field2" >
						<input type="hidden" value="1" id="total_chq2"></input>
					</div>

					<div className="section" id="new_field3">
						<input type="hidden" value="1" id="total_chq3"></input>
					</div>

					<div className="btn_sec">
						<div className="sec_btn" >
							<button type="button" className="add"
								onClick={add}
							>Add More</button>
						</div>
						<div className=" sec_btn ">
							<button type="button" className="signupbtn1"
								onClick={remove}
							>Remove</button>
						</div>
					</div>
					<div className="clearfix ">
						<button type="submit" className="signupbtn1">Submit</button>
					</div>
				</div>
			</form>
		</div>
	)
}
export default InputDetails;