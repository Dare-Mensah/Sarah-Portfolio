import React from 'react'
//import Slider from "react-slick";

//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

import Heroimg from "./assets/pprofile_img.jpeg"
import linkinimg from "./assets/linkedinlogo.png"
import githubimg from "./assets/github.jpg"
import TheOrdinary_logo from './assets/ordinary_logo.jpg'
import JohnLewis_Logo from './assets/johnlewisandpartners_logo.jpeg'
import microsoftLogo from './assets/SWLAC_logo.png'
import pdpaola from './assets/pdpaola.png'

import pythonLogo from './assets/pythonlogo.png'
import spacyLogo from './assets/SpacyLogo.png'
import firebase from './assets/firebaeLogo.png'
import flaskLogo from './assets/flask_logo.jpg'
import gephiLogo from './assets/gephiLogo.jpg'
import reactLogo from './assets/reactLogo.png'
import NCSLogo from './assets/ncs_logo.png'



import ClimateSenseHomepagePhoneOne from './assets/ClimateSensePhone.png'
//import ClimateSenseHomepageTablet from '../../assets/ClimateSenseHomepageTablet.jpg'
//import ClimateSenseLoginScreen from '../../assets/ClimateSenseLoginScreen.jpg'
import FDMWellbeingHomepageOne from'./assets/FDMWellbeingPhone.png'
//import FDMWellbeingHomepageTwo from'../../assets/FDMWellbeingHomepageTwo.jpg'
import Spotify from './assets/SpotifyAnalysis.png'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    const Work_Experiences = [
        {
            company: 'PDPAOLA',
            job_title: 'Style Advisor',
            description: ['Pro-actively exceeded weekly sales targets through strategic upselling and cross selling products, leveraged in providing in- product knowledge to customers and recommending complementary items.', 
                'Increased client engagement and loyalty through personalised follow – up, by crafting compelling and professional client emails asking about their purchases.',
                'Analysed sales data to optimize customer experience through meticulously tracing and analysing key sales metrics such as net sales, items per order and customer transactions on an excel spreadsheet database, which provided actionable insight into store performance and customer purchasing trends.',],
            logo: pdpaola,
            duration: 'Dec 2024 - Jan 2025'
        },

        {
            company: 'The Ordinary',
            job_title: 'Sales Associate',
            description: ['Enhanced product expertise through active participation in training programs, utilizing feedback to improve performance and contribute to a positive workplace culture.', 
                'Educated product and brand knowledge with customers and maintained an active awareness of company brand campaigns, new commercial product launches and good knowledge of KPI’s to help drive sales targets and give expert advice in line with customers’ needs.' ],
            logo: TheOrdinary_logo,
            duration: 'Oct 2023 - Dec 2023'
        },

        {
            company: 'John Lewis & Partners',
            job_title: 'Operations Partner',
            description: ['Assisted in upholding visual merchandising standards, maintaining stockroom appearance, and helping customers locate the products they need in an open and approachable manner.', 
                'Assisted customers with styling and product selection, creating personalized outfits that accurately reflect the brand’s aesthetics and guidelines.', 'Leveraged a vast variety of company tools, incentives, and strategies to support meeting the store goals.'],
            logo: JohnLewis_Logo,
            duration: 'Oct 2021 - Jan 2022'
        },

        {
            company: 'South Westminster aLegal Advice Centre (SWLAC)',
            job_title: 'Administrative Assistant Intern',
            description: ['Collaborated with legal professionals to provide timely and accurate legal advice to clients on a range legal of matters within 30-minute consultation sessions, including employment, consumer landlord/tenant and family law.', 
                'Established and maintained detailed case files, summarizing critical information regarding court rulings.', 'Conducted comprehensive legal research into case law, statute and legislation to ensure clients are given well-informed advice.'],
            duration: 'Jul 2023 - Aug 2023'
        },

        {
            company: 'NCS National Citizen Service',
            job_title: 'Team Associate',
            description: ['Managed financial budget for advertisements and campaigns by implementing daily spending limits and assessing the impact of each purchase on the campaign, as a result, 15% of the overall budget was saved.', 
                'Accelerated sales of tickets for fundraising by 10%, through extensive research into innovative and unique marketing and advertising strategies, which attracted intellectual investment from marketing experts.'],
            logo: NCSLogo,
            duration: 'Jul 2018 - Aug 2018'
        },
    ]

    const Projects =[
        {
            Title: 'Climate Sense',
            image: ClimateSenseHomepagePhoneOne,
            github_link: '',
            description: 'The Climate Sense project aimed to develop a React Native mobile application that raises climate change awareness and fosters eco-friendly behaviors through engaging and educational features. Guided by principles of user-centric design and gamification, the app combines multiple functionalities to encourage user retention and action.',
            technologiesLogo: [pythonLogo,firebase,reactLogo],
            decription_list: ['Server and NLP: Python Flask server utilized spaCy for NLP preprocessing and TF-IDF for term extraction, ensuring climate-relevant content in the game.', 'APIs and Libraries: Integrated APIs for news content, Firebase for real-time data synchronization, and Flask-SocketIO for multiplayer functionality.',' Development Environment: Built using React Native Expo for cross-platform compatibility (Android and iOS), with Firebase providing backend services for user authentication and data storage.']
        },

        {
            Title: 'FDM WellbeingApp',
            image: FDMWellbeingHomepageOne,
            github_link: '',
            description: 'The FDM Wellbeing App was a cross-platform mobile application developed using React Native and Firebase to enhance employee well-being and mental health. The app offered a seamless and user-friendly interface to engage users while securely managing their data.',
            technologiesLogo: [firebase,reactLogo],
            decription_list: ['Well-being Focus: Designed to support mental health initiatives, offering tools and features aimed at improving employee wellness.','Firebase Integration: Facilitated secure data storage and real-time synchronization for user information and app interactions.','React Native Framework: Enabled the development of a robust and responsive app compatible with both iOS and Android platforms.']
        },

        {
            Title: 'Spotify Music Reccomendation Analysis',
            image: Spotify,
            github_link: '',
            description: 'The Spotify Playlist Dynamics project investigated the underlying mechanisms of Spotify’s playlist recommendation system, focusing on uncovering patterns in song co-occurrence and attribute relationships. The study applied network analysis techniques to explore how music attributes influence recommendation algorithms, with an emphasis on promoting transparency and improving user trust.',
            technologiesLogo: [pythonLogo,gephiLogo],
            decription_list: ['Louvain Community Detection: Partitioned the network into clusters of similar songs based on their connectivity.', 'Gephi Visualizations: Compared small and large network properties to understand community structures.', 'Analyzed attribute distributions across communities to determine their impact on playlist dynamics.']
        },

    ]


  return (
    <div>
    <section id='profile'>
    <div className='justify-items-center' >
        <div className='container grid md:grid-cols-2 gap-11 mx-10 min-h-[500px] bg-white w-full'>
            <div className='flex flex-col justify-center text-center md:text-left pt-24 md:p-0 pb-5 bg-white w-full'>
                <h4 className='text-xl font-light text-stone-900 mt-48' >Hi, I'm</h4>
                <h1 className='text-6xl font-bold'> Sarah Mensah </h1>
                <h1 className='text-6xl font-bold text-stone-900'>Law Graduate</h1>
                <p className='my-4'> Highly motivated Law graduate with valuable experience in customer-facing roles, demonstrating a unique blend of legal knowledge and exceptional client service skills. Proven ability to provide personalised advice and support, manage client interactions, and ensure efficient operations. Expertise in building client relationships, analyzing needs, and delivering solutions, complemented by skills in legal research and administrative tasks. 
                </p>
                <div class="flex flex-nowrap my-5 gap-4 justify-start">
                    <div>
                        <a href="https://drive.google.com/uc?export=download&id=1VS2lJSuqRcQFO7LDeIljtOf8jCjygMTz">
                            <button className='bg-stone-600 hover:bg-stone-800 text-white font-bold py-2 px-4 rounded-full'>
                                <p>Downlaod CV</p>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/contact-sarah-info/">
                            <button>
                                <img className ='rounded-full src' src={linkinimg} height={42} width={42}/>
                            </button>
                        </a>
                    </div>
            </div>    
            </div>
            <div className='mt-48 mx-7'>
                <img className='rounded-md' src={Heroimg} alt= ""/>
            </div>
        </div>

    </div>
    </section>

    <section id="about" className="my-60">
        <p className="text-stone-900 text-center">Get To Know Me</p>
        <h1 className="text-6xl font-bold text-center mb-12">About Me</h1>
        <div className="container flex flex-col items-center justify-center gap-11 mx-auto  bg-white w-full">
            <div className="flex flex-wrap justify-center gap-4">
                <div className="border-2 rounded-md p-3 w-96 h-70">
                <p className="text-center font-bold mb-3">Experience</p>
                <p className="text-center">2+ years</p>
                <p className="text-center mt-2">Customer Service</p>
            </div>
            <div className="border-2 rounded-md p-3 w-96 h-70">
                <p className="text-center font-bold mb-3">Education</p>
                <p className="text-center">LLM in Public International Law (High Merit, 69%)</p>
                <p className="text-center">LLB Honours Bachelor of Laws</p>
            </div>
            <div className="border-2 rounded-md p-3 w-97 h-70">
                <p className="text-center font-bold mb-3">Skills</p>
                <p className="text-center">LexisNexis, Canva, Microsoft office Suite (Word, powerpoint, Excel, Access), West Law, Halsbury Laws</p>
                <p className="text-center">Google analytics, Microsoft Outlook, Salesforce, Shopify analytics, GDPR basic Knowledge and AI Regulations</p>
            </div>
            
        </div>
        </div>
    </section>

    <section id="work_experience" className="my-60">
    <p className="text-stone-900 text-center">Explore my</p>
    <h1 className="text-6xl font-bold text-center mb-10">Work Experience</h1>
    <div className="container flex flex-col items-center justify-center gap-11 mx-auto bg-white w-full">
        <div className="flex flex-wrap justify-center gap-3">
            {Work_Experiences.map((Work_Experiences, index) => (
                <div key={index} className="border-2 rounded-3xl p-3 w-96 h-70">
                    <p className="text-center font-bold mb-3">{Work_Experiences.job_title}</p>

                    <div className='flex space-x-3 grid-rows-2 justify-center items-center'>
                        {/* Logo and Company Name if the company image is not avaible then it only showes the name of the company*/}
                        {Work_Experiences.logo ? (
                            <>
                                <img src={Work_Experiences.logo} height={40} width={40} alt={`${Work_Experiences.company} logo`} />
                                <p className="text-center mt-2">{Work_Experiences.company}</p>
                            </>
                        ) : (
                            <p className="text-center mt-2">{Work_Experiences.company}</p>
                        )}
                    </div>

                    <p className='text-center font-thin mt-3 text-neutral-800 antialiased'>{Work_Experiences.duration}</p>

                    <div>
                        {Work_Experiences.description.map((text, textIndex) => (
                            <div key={textIndex}>
                                <ol className='list-disc pl-5'>
                                    <li className='mt-4'>{text}</li>
                                </ol>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>

    <section id="projects" className="my-60">
    <p className="text-stone-900 text-center">Browse My Recent</p>
    <h1 className="text-6xl font-bold text-center mb-10">Projects</h1>
    <div className="container flex flex-col items-center justify-center gap-11 mx-auto bg-white w-full">
        <Carousel swipeable={true} showIndicators={true} showThumbs={false} showArrows={true}>
            {Projects.map((Projects, index) => (
                <div key={index} className="container grid md:grid-cols-2 bg-white w-full gap-6">
                    {/* Column for Image */}
                    <div className="flex justify-center items-center">
                        <img
                            className="rounded-3xl"
                            src={Projects.image}
                            height={200}
                            width={200}
                            alt={`${Projects.Title} image`}
                        />
                    </div>

                    {/* Column for Text */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold my-4 text-center">{Projects.Title}</h2>
                        <p className='text-start'>{Projects.description}</p>
                        <div>
                        {Projects.decription_list.map((text, textIndex) => (
                            <div key={textIndex}>
                                <ol className=' list-disc pl-5'>
                                    <li className='mt-4 text-start'>{text}</li>
                                </ol>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-nowrap my-5 gap-4 justify-center'>
                    {Projects.technologiesLogo.map((image, imgIndex) => (
                            <div key={imgIndex} className='flex flex-nowrap my-5 gap-4 justify-center'>
                                <img className='rounded-md' src={image} height={15} width={15}/>
                            </div>
                        ))}

                    </div>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
</section>


    </div>
    

  )
}

export default Main