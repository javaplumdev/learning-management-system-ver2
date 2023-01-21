import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Login, Register } from './components/index';

import { ContextFunction } from './context/context-config';

function App() {
	return (
		<ContextFunction>
			<Router>
				<div className="App">
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
			</Router>
		</ContextFunction>
	);
}

export default App;
