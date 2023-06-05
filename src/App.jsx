import { BrowserRouter } from "react-router-dom";
import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
	EarthCanvas,
} from "./components";
import { motion } from "framer-motion";

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0">
				<div className="bg-primary">
					<div className="bg-hero-pattern bg-cover bg-no-repeat bg-right-bottom">
						<Navbar />
						<Hero />
					</div>
					<About />
					<Experience />
					<Tech />
				</div>
				<div className="blue-gradient">
					<Works />
				</div>
				<div className="relative z-0">
					<Contact />
					<EarthCanvas />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
