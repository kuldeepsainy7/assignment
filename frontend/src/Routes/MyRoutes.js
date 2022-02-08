import React from 'react';
import { BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import InputDetails from '../Components/InputDetails/InputDetails'
import DashBoard from '../Components/Dashboard/DashBoard'

const MyRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<InputDetails/>}/>
				<Route path="/dashboard" element={<DashBoard/>}/>
			</Routes>
		</Router>
	)
}

export default MyRoutes;
