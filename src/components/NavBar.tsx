import { useState } from "react";
import st from "../assets/styles/NavBar.module.styl";
import cn from "classnames";
import { menu } from "../data";

export default function NavBar() {
	const [open, setOpen] = useState(false);
	const toggleMenu = () => {
		setOpen(!open);
	};
	return (
		<div className={cn(st.navbar, {open})}>
			<button
				type="button"
				title="Botão menu hamburguer"
				className={cn("hamburger", { open })}
				onClick={toggleMenu}
			>
				<span></span>
				<span></span>
			</button>
			<nav className={cn({ open })}>
				<ul>
					{menu.map(({ name, slug, external }, key) => (
						<li key={key}>
							<a title={name} href={slug} target={external ? "_blank" : ""}>
								{name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
