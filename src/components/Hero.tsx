import logoDourada from "../assets/img/logo-dourada.png";
import st from "../assets/styles/Hero.module.styl";

export default function Hero() {
	return (
		<div className={st.hero}>
			<div className="container">
				<section className={st.logo}>
					<h1>De Moraes e Dalmarco Advocacia</h1>
					<img
						title="De Moraes e Dalmarco Advocacia"
						alt="Logo MD da empresa De Moraes e Dalmarco Advocacia"
						src={logoDourada}
					/>
				</section>
				{/* <div className={st.infos}>
					Contato
					<br />
					Horarios
					<br />
					Redes
				</div> */}
			</div>
		</div>
	);
}
