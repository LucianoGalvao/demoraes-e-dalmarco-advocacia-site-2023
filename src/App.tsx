import "./assets/styles/globals.styl";
import { Concept, Hero, Lawyers, NavBar } from "./components";

function App() {
	return (
		<div className="application">
			<NavBar />
			<Hero />
			<Concept />
			<Lawyers />
			<div style={{height: 500}}></div>
		</div>
	);
}

export default App;
