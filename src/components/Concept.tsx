import st from "../assets/styles/Concept.module.styl";

export default function Concept() {
	return (
		<div className={st.concept}>
			<div className="container">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
					laboriosam rerum repellendus enim rem quam similique ad distinctio eum
					illum aliquid, accusantium fugiat quis unde ducimus vero reprehenderit
					quo consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Officiis nostrum, non modi iusto fugit corporis ullam id dolorum
					laudantium vitae unde nobis ab doloremque animi assumenda soluta
					dignissimos quo ipsam!
				</p>
				<a href="#">
					Fale com um advogado agora <span className="icon-phone"></span>
				</a>
			</div>
		</div>
	);
}
