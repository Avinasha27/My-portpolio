import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import image from "../assets/texon.webp";
import javreact from "../assets/javareact.png"
import sql from "../assets/sql.png"

const Experience = () => {
    return (
        <>
            <div className='p-10 ' id='experience'>
                <div className="text-center ">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white">
                        My Experience
                    </h1>
                    <p className="text-2xl md:text-3xl lg:text-5xl text-[#89b02d]">
                        ----- What I’ve Done ------
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-10">
                    <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center  lg:w-1/3 p-10 md:p-5 lg:p-10'>
                        <img src={image} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt="Texon Logo" />
                    </div>
                    <div className='w-full md:w-3/4  lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                        <h1 className='text-2xl md:text-3xl font-extrabold text-white'>Software Engineer I, Frontend</h1>
                        <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>7EDGE | March 2024 – February 2025</h2>

                        <h2 className='my-2 lg:hidden md:hidden text-lg'>7EDGE | March 2024 – February 2025</h2>

                        {/* for large device  */}
                        <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3  md:pl-5'>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Developed scalable and responsive web applications with a cross-device consistency, ensuring cross-device consistency using Tailwind
                                    CSS and Bootstrap.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Optimized UI performance, reducing page load times by 40% through code splitting, lazy loading, memoization, and minimizing
                                    unnecessary re-renders in React.

                                </span>
                            </li>


                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Implemented Redux for efficient state management, enhancing application performance and scalability.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Ensured cross-browser compatibility across Chrome, Firefox, Safari, and Edge using feature detection and CSS fallbacks, improving
                                    accessibility.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Developed reusable and modular UI components, following best practices to improve code maintainability and reusability
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Collaborated with UI/UX designers and backend developers to deliver pixel-perfect, high-quality applications.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Refactored codebases by adopting React Hooks and functional components, improving maintainability and performance
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Utilized Git for version control, ensuring clean and organized code management.
                                </span>
                            </li>
                        </ul>



                    </div>
                </div>
                <ul className='list-disc  lg:hidden  space-y-3  md:pl-5'>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Developed scalable and responsive web applications with a cross-device consistency, ensuring cross-device consistency using Tailwind
                            CSS and Bootstrap
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Optimized UI performance, reducing page load times by 40% through code splitting, lazy loading, memoization, and minimizing
                            unnecessary re-renders in React.
                        </span>
                    </li>


                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Implemented Redux for efficient state management, enhancing application performance and scalability
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Ensured cross-browser compatibility across Chrome, Firefox, Safari, and Edge using feature detection and CSS fallbacks, improving
                            accessibility.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Developed reusable and modular UI components, following best practices to improve code maintainability and reusability.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Collaborated with UI/UX designers and backend developers to deliver pixel-perfect, high-quality applications
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Refactored codebases by adopting React Hooks and functional components, improving maintainability and performance.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Utilized Git for version control, ensuring clean and organized code management.
                        </span>
                    </li>
                </ul>
            </div>

            {/* // second section */}
            <div className='p-10 ' id='experience'>
                <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-10">
                    <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center  lg:w-1/3 p-10 md:p-5 lg:p-10'>
                        <img src={javreact} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt="Texon Logo" />
                    </div>
                    <div className='w-full md:w-3/4  lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                        <h1 className='text-2xl md:text-3xl font-extrabold text-white'>Java Full Stack development - Internship</h1>
                        <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>TECHSHRESHTA | August 2023 – September 2023</h2>

                        <h2 className='my-2 lg:hidden md:hidden text-lg'>TECHSHRESHTA | August 2023 – September 2023</h2>

                        {/* for large device  */}
                        <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3  md:pl-5'>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Hands-on Full Stack Development: Gained experience in Java, Spring Boot, MySQL, and React.js, working on both frontend and backend development.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Real-World Project Exposure: Participated in end-to-end development, including database management, API integration, and UI design.

                                </span>
                            </li>


                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Skill Enhancement & Learning: Improved problem-solving, debugging, and performance optimization skills under industry professionals.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Professional Development: Engaged in team collaboration, code reviews, and personality development to enhance communication and adaptability.
                                </span>
                            </li>

                        </ul>



                    </div>
                </div>
                <ul className='list-disc  lg:hidden  space-y-3  md:pl-5'>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Hands-on Full Stack Development: Gained experience in Java, Spring Boot, MySQL, and React.js, working on both frontend and backend development.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Real-World Project Exposure: Participated in end-to-end development, including database management, API integration, and UI design.
                        </span>
                    </li>



                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Skill Enhancement & Learning: Improved problem-solving, debugging, and performance optimization skills under industry professionals.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Professional Development: Engaged in team collaboration, code reviews, and personality development to enhance communication and adaptability.
                        </span>
                    </li>
                </ul>
            </div>
            {/* 3rd section */}
            <div className='p-10 ' id='experience'>
                <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-10">
                    <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center  lg:w-1/3 p-10 md:p-5 lg:p-10'>
                        <img src={sql} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt="Texon Logo" />
                    </div>
                    <div className='w-full md:w-3/4  lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                        <h1 className='text-2xl md:text-3xl font-extrabold text-white'>Java & SQL - Internship</h1>
                        <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>QSPIDERS | june 2023 – july 2023</h2>

                        <h2 className='my-2 lg:hidden md:hidden text-lg'>QSPIDERS | june 2023 – july 2023</h2>

                        {/* for large device  */}
                        <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3  md:pl-5'>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Java & OOP Concepts: Gained expertise in Core Java, OOP principles (Encapsulation, Inheritance, Polymorphism, Abstraction), and Exception Handling.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                SQL & Database Management: Learned SQL fundamentals, relational models, normalization, and writing queries using Joins, Subqueries, and Constraints.

                                </span>
                            </li>


                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Hands-on Project Development: Developed Core Java projects implementing OOP principles and Collection Framework.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Practical SQL Implementation: Worked with SQL commands (DDL, DML, TCL, DCL, DQL), creating tables, inserting records, and handling data efficiently.
                                </span>
                            </li>

                        </ul>



                    </div>
                </div>
                <ul className='list-disc  lg:hidden  space-y-3  md:pl-5'>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Java & OOP Concepts: Gained expertise in Core Java, OOP principles (Encapsulation, Inheritance, Polymorphism, Abstraction), and Exception Handling.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        SQL & Database Management: Learned SQL fundamentals, relational models, normalization, and writing queries using Joins, Subqueries, and Constraints.
                        </span>
                    </li>



                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Hands-on Project Development: Developed Core Java projects implementing OOP principles and Collection Framework.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Practical SQL Implementation: Worked with SQL commands (DDL, DML, TCL, DCL, DQL), creating tables, inserting records, and handling data efficiently.
                        </span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Experience;
