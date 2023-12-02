type MenuItem = {
	name: string
	slug: string
	external?: boolean
}

const menu: Array<MenuItem> = [
	{
		name: 'De Moraes & Dalmarco',
		slug: '#quem-somos',
		external: false
	},
	{
		name: 'Nosso escritório',
		slug: '#nosso-escritorio',
		external: false
	},
	{
		name: 'Áreas de atuação',
		slug: '#areas-de-atuacao',
		external: false
	},
	{
		name: 'Onde estamos',
		slug: '#onde-estamos',
		external: false
	},
]

export default menu