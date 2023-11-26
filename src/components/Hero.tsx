import logoDourada from '../assets/img/logo-dourada.png'
import st from '../assets/styles/Hero.module.styl'

export default function Hero() {
	return (
		<div className={st.hero}>
			<img src={logoDourada} />
			<h1>Em breve</h1>
		</div>
	)
}
