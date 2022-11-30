import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home'
import CharacterDetails from './pages/charactersDetails/CharacterDetails'


function AppRoutes() {
	return (

		<Router>

			<Routes>
				
				<Route path="/" element={<Home/>}/>
				<Route path="/character/:id" element={<CharacterDetails/>}/>
			</Routes>

		</Router>

		)


}

export default AppRoutes;