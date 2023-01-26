import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Login, Register } from './components/index';
import { ContextFunction } from './context/context-config';
import { ContextFunctionalities } from './context/FunctionalitiesContext';
import { Toaster } from 'react-hot-toast';
import SubjectDetails from './components/teachers/SubjectDetails';
import CreateActivity from './components/teachers/CreateActivity';
import Settings from './components/teachers/Settings';

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
							<Route path="/subject/:id" element={<SubjectDetails />} />
							<Route path="/create/activity" element={<CreateActivity />} />
							<Route path="/settings/teachers" element={<Settings />} />
						</Routes>
					</div>
				</Router>
			</ContextFunctionalities>
		</ContextFunction>
	);
}

export default App;
