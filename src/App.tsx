import "./assets/styles/globals.styl";
import { Concept, Hero, NavBar } from "./components";

function App() {
	return (
		<div className="application">
			<NavBar />
			<Hero />
			<Concept />
			<div style={{height: 500}}></div>
		</div>
	);
}

export default App;
