import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const StackCard = ({ index, name, icon }) => {
	return (
		<Tilt>
			<motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="flex justify-center">
					<img src={icon} alt={name} className="w-16 h-16 object-contain" />
				</div>
			</motion.div>
		</Tilt>
	);
};

const Tech = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>
					Mis herramientas
				</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>Tech Stack</h2>
			</motion.div>

			<div className="mt-20 pt-10 flex flex-row flex-wrap justify-center gap-10 bg-white  rounded-2xl">
				{technologies.map((technology, index) => (
					<div className="w-28 h-28" key={technology.name}>
						<StackCard
							index={index}
							icon={technology.icon}
							name={technology.icon}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, "");
