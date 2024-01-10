import st from "../assets/styles/Lawyers.module.styl";
import cn from "classnames";
import vilso from '../assets/img/lawyers/vilso-esp.jpg'
import danubia from '../assets/img/lawyers/danubia1.jpg'

export default function Lawyers() {
	return (
		<div id="quem-somos" className={st.lawyers}>
			<section className={cn(st.lawyer, st.vilso)}>
				<picture>
					<img src={vilso} alt="Imagem do advogado e sócio Vilso De Moraes" />
				</picture>
				<h2>Vilson de Moraes</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nam
					tempora quasi illo enim quibusdam officia ab, esse provident
					cupiditate quisquam mollitia nobis quod deserunt. Et recusandae
					exercitationem esse quia?
				</p>
			</section>
			<section className={cn(st.lawyer, st.danubia)}>
				<picture>
					<img src={danubia} alt="Imagem da advogada e sócia Danúbia Dalmarco" />
				</picture>
				<h2>Danúbia Dalmarco</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut iusto
					cupiditate hic doloremque sed eius excepturi? Cumque vero corporis
					commodi exercitationem ipsam facere, tempore pariatur placeat eaque
					impedit natus quas!
				</p>
			</section>
		</div>
	);
}
