import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import js from "../assets/icons/js.svg"
import tailwind from "../assets/icons/tailwind.svg"
import redux from "../assets/icons/redux.svg"
import firebase from "../assets/icons/firebase.svg"
import react from "../assets/icons/react.json"
import nextjs from "../assets/icons/nextjs.webp"
import github from "../assets/icons/github.png"
import Boostaap from "../assets/icons/Boostaap.jpeg"
import java from "../assets/icons/java.png"
import Lottie from "lottie-react";

const Skills = () => {




	return (
		<div id="Skills" className=" p-10">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">
					My skills
				</h1>
				<p className="text-2xl  md:text-3xl lg:text-5xl text-[#89b02d]">
					-----what I know ------
				</p>
			</div>

			<div className="max-w-[800px] mx-auto">
				<div className=" grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4   pt-10 gap-10 my-10">
					<div className="">
						<div className="w-36 h-36  border-2 border-[#89b02d] ">
							<img src={html} className="h-full animateSkillImage  p-6 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#89b02d]">HTML</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#89b02d] ">
							<img src={css} className=" animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#89b02d]">CSS</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#89b02d] ">
							<img src={tailwind} className=" animateSkillImage  p-5 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#89b02d]">Tailwind</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#89b02d] ">
							<img src={js} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#89b02d]">Javascript</h1>
					</div>



					<div className="">
						<div className="w-36 h-36 border-2 border-[#89b02d] ">
							<Lottie animationData={react} loop={true} autoplay={true} style={{ width: 'full', height: 'full' }} />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#89b02d]">React</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#89b02d] ">
							<img src={nextjs} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#89b02d]">Next.Js</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#89b02d] ">
							<img src={redux} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#89b02d]">Redux</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#89b02d] ">
							<img src={firebase} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#89b02d]">Firebase</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#89b02d] ">
							<img src={github} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#89b02d]">GitHub</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#89b02d] ">
							<img src={Boostaap} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#89b02d]">Bootstrap</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#89b02d] ">
							<img src={java} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#89b02d]">Java</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
