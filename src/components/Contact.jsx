import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef();

	const [loading, setLoading] = useState(false);

	const [form, setForm] = useState({
		name: "",
		email: "",
		mesasage: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_6mv3go8",
				"template_32hn5pr",
				{
					from_name: form.name,
					to_name: "Virgilio",
					from_email: form.email,
					to_email: "virgilionayal@gmail.com",
					message: form.message,
				},
				"KIDsyZALKi644h718"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Something went worng");
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-1' overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.5] bg-primary p-8 rounded-2xl">
				<p className={styles.sectionSubText}>Ponte en contacto</p>
				<h3 className={styles.sectionHeadText}>Contacto</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Tu nombre</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="¿Cómo te llamas?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Tu email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="¿Cúal es tu email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Tu mensaje</span>
						<textarea
							rows="7"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="¿Qué quieres decirme?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
						{loading ? "Enviando..." : "Enviar"}
					</button>
				</form>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
