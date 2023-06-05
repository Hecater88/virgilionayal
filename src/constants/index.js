import {
	mobile,
	backend,
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
	threejs,
	iflastmile,
	isabellatech,
	pstalents,
	bambostudio,
	inmodesign,
	masproperty,
	bombeosmarbella,
	trainingnext,
	jest,
	php,
	wordpress,
	csharp,
	unity,
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
		name: "Git",
		icon: git,
	},
	{
		name: "Jest",
		icon: jest,
	},
	{
		name: "PHP",
		icon: php,
	},
	{
		name: "Wordpress",
		icon: wordpress,
	},
	{
		name: "Unity",
		icon: unity,
	},
	{
		name: "C#",
		icon: csharp,
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
			"Desarrollo continuo de nuevas funcionalidades y mantenimiento tanto de la aplicación interna y como la aplicación para clientes. Los mentores me ayudaron muchísimo en mejorar mis habilidades de frontend. También aprendí habilidades de fullstack.",
	},
	{
		title: "Junior Frontend Developer",
		company_name: "Isabella Tech, Marbella",
		icon: isabellatech,
		iconBg: "#000000",
		date: "Jul 2019 - Jun 2021",
		description:
			"Durante estos estos dos años desarrollé proyectos de todo tipo: aplicaciones web, páginas web de inmobiliarias, ecommerce, portafolios, blogs, páginas web de negocios.",
	},
	{
		title: "Videogame programmer",
		company_name: "Blackgate Studios, Málaga",
		icon: pstalents,
		iconBg: "#000000",
		date: "Jul 2019 - Jun 2021",
		description:
			"Participé en Playstation Talents y monté un equipo indie para crear un videojuego, esta experiencia me mostró lo que implica crear un videojuego y me enseñó a ser autodidacta.",
	},
	{
		title: "Videogame programmer",
		company_name: "Bambo Studio, Málaga",
		icon: bambostudio,
		iconBg: "#FFFFFF",
		date: "Abr 2019 - Jun 2019",
		description:
			"Aquí hice las prácticas del Máster dónde me enseñaron a hacer juegos móviles con Unity.",
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
		name: "Mas Property",
		description:
			"Proyecto realizado con React y Frontity. La complejidad deriva del tamaño de la empresa y la gestión diaria de miles de propiedades, además de un sistema de gestión de usuarios con privilegios y funciones especiales.",
		tags: [
			{
				name: "reactjs",
			},
			{
				name: "typescript",
			},
			{
				name: "frontity",
			},
			{
				name: "tailwind",
			},
		],
		image: masproperty,
		source_code_link: "https://www.maspropertymarbella.com/",
	},
	{
		name: "Bombeos Marbella",
		description:
			"Diseño y desarrollo de una página web para una empresa de bombeos de hormigón en Marbella.",
		tags: [
			{
				name: "wordpress",
			},
			{
				name: "php",
			},
			{
				name: "css",
			},
		],
		image: bombeosmarbella,
		source_code_link: "https://bombeosmarbella.com/",
	},
	{
		name: "Trip Guide",
		description:
			"Proyecto desarrollado con Next.js, es un proyecto para probar las nuevas funcionalidades que ofrece next.js, en el que simplifica el desarrollo de aplicaciones fullstack y tambien los optimiza.",
		tags: [
			{
				name: "nextjs",
			},
			{
				name: "reactjs",
			},
			{
				name: "tailwind",
			},
			{
				name: "mongodb",
			},
		],
		image: trainingnext,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
