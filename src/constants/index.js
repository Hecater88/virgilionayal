import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	iflastmile,
	isabellatech,
	pstalents,
	bambostudio,
	inmodesign,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "Sobre mí",
	},
	{
		id: "work",
		title: "Trabajos",
	},
	{
		id: "contact",
		title: "Contacto",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "Unity Developer",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Mid Frontend Developer",
		company_name: "if Lastmile, Madrid",
		icon: iflastmile,
		iconBg: "#FFFFFF",
		date: "Mar 2022 - Abr 2023",
		description:
			"Mi función era la de desarrollar nuevas funcionalidades tanto de la aplicación interna y la aplicación para sus clientes. Desarrollo y mantenimiento continuo en un proyecto grande. Los mentores me ayudaron muchísimo a mejorar mis habilidades de frontend. También aprendí habilidades de fullstack.",
	},
	{
		title: "Junior Frontend Developer",
		company_name: "Isabella Tech, Marbella",
		icon: isabellatech,
		iconBg: "#000000",
		date: "Jul 2019 - Jun 2021",
		description:
			"Durante estos estos dos años trabajé como programador Frontend desarrollando proyectos de todo tipo: aplicaciones web, páginas web de inmobiliarias, ecommerce, portafolios, blogs, páginas web de negocios.",
	},
	{
		title: "Videogame programmer",
		company_name: "Blackgate Studios, Málaga",
		icon: pstalents,
		iconBg: "#000000",
		date: "Jul 2019 - Jun 2021",
		description:
			"Participé en Playstation Talents y monté un equipo de videojuegos indie, esta experiencia me mostró lo que implica crear un videojuego y me enseñó a ser autodidacta.",
	},
	{
		title: "Videogame programmer",
		company_name: "Bambo Studio, Málaga",
		icon: bambostudio,
		iconBg: "#FFFFFF",
		date: "Abr 2019 - Jun 2019",
		description:
			"Aquí hice las prácticas del Máster, dónde me enseñaron a hacer juegos móviles.",
	},
	{
		title: "Trainee Frontend Developer",
		company_name: "Inmo.Design, Málaga",
		icon: inmodesign,
		iconBg: "#FFFFFF",
		date: "Jun 2018 - Sept 2018",
		description:
			"Volvieron a contar conmigo para trabajar en verano, esta vez me asignaron proyectos más avanzados siempre de la mano de un mentor, aquí me di cuenta de que la rama Frontend me gustaba más que la Backend",
	},
	{
		title: "Trainee Frontend Developer",
		company_name: "Inmo.Design, Málaga",
		icon: inmodesign,
		iconBg: "#FFFFFF",
		date: "Jun 2017 - Sept 2017",
		description:
			"Mi primer trabajo fue en Inmo.Design, una empresa pequeñita donde empecé a trabajar como programador principiante. La empresa se dedica a hacer páginas web exclusivamente a inmobiliarias. Primera toma de contacto con la programación de forma profesional, fue una experiencia bastante ilustrativa.",
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
