import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Login, Register } from './components/index';

import { ContextFunction } from './context/context-config';
import { ContextFunctionalities } from './context/FunctionalitiesContext';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<ContextFunction>
			<ContextFunctionalities>
				<Router>
					<div className="App">
						<Toaster />
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/home" element={<Home />} />
						</Routes>
					</div>
				</Router>
			</ContextFunctionalities>
		</ContextFunction>
	);
}

export default App;
