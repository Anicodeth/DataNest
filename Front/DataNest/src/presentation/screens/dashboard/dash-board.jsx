import AOS from "aos"
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';

import "./dashboard.css"
import logo from "../../../assets/dashboard/logo.png"
import handImage from "../../../assets/dashboard/Screenshot_2023-09-02_112706-removebg.png"
import wordImage from "../../../assets/dashboard/Screenshot_2023-09-02_113952-removebg-preview.png"
import glassprism1 from "../../../assets/dashboard/Glass_Prism0036.png"
import glassprism2 from "../../../assets/dashboard/Glass_Prism0032.png"
import glassprism3 from "../../../assets/dashboard/Glass_Prism0077.png"
import documentgif from "../../../assets/dashboard/wired-gradient-56-document.gif"
import globegif from "../../../assets/dashboard/wired-gradient-27-globe.gif"
import chart_gif from "../../../assets/dashboard/wired-gradient-153-bar-chart-growth.gif"
import {useEffect} from "react";


const DashBoard = ()=>{

    useEffect(() => {
        AOS.init({duration: 2000})
    }, []);

    const history = useNavigate();

    return (
        <>
            <div class="header">
                <div class="logo-container">
                    <img src={logo} alt="logo alternate" />
                    <h3 className="font-Ubuntu">Data Nest</h3>
                </div>
                <nav>
                    <ul>
                        <li><a href="">Home</a> <span></span></li>
                        <li><a href="">About</a> <span></span></li>
                        <li><a href="">Contact</a> <span></span></li>
                    </ul>
                </nav>
                <div style={{display:"flex", gap:"10px"}}>
                    <button class="signinbtn" onClick={()=>{history("/sign_in")}} style={{marginRight: "10px"}}><span>Login</span></button>
                    <button class="signinbtn" onClick={()=>{history("sign_up")}}><span>Sign up</span></button>
                </div>
            </div>
            <div class="main">
                <section class="herosection">
                    <div class="herodiscription" data-aos="fade-right">
                        <h1>Welcome to Data-Nest</h1>
                        <p>Your AI Data Hub for Discovery and Innovation</p>
                        <p>Unlock the power of data for your artificial intelligence projects.</p>
                        <button onClick={()=>{history('/sign_up')}} class="get_started_btn">Get Started</button>
                    </div>
                    <div class="heroimageContainer">
                        <img class="handimage " src={handImage} data-aos="fade-up" alt=""/>
                        <img class="worldimage floating-image" src={wordImage} alt="" />
                    </div>
                </section>
                <section class="services">
                    <div class="prism-container">
                        <h2>O U R &nbsp; S E R V I C E S</h2>
                        <img src={glassprism1} alt="prism picture" data-aos="fade-right" />
                        <img src={glassprism2} alt="glass prism2" data-aos="fade-left" />
                        <img src={glassprism3} alt="glass prism3" data-aos="fade-down" />
                    </div>
                    <div class="text-content" data-aos="fade-left">
                        <h2>
                            Data-Driven Insights
                        </h2>
                        <p>
                            Unlock the power of data with our data-driven insights service. We provide comprehensive data analysis and visualization solutions to help you gain a deeper understanding of your business, customers, and market trends. Our team of experts will transform raw data into actionable insights, enabling you to make informed decisions that drive growth and innovation.
                        </p>
                    </div>
                </section>
                <section class="cards_section">
                    <div class="title_container">
                        <h2>Discover the power of Datanest, your source for real-time intelligence and AI-driven insights.</h2>
                        <p>With our platform, you can access instant real-time data, receive personalized recommendations, and leverage predictive analytics. Explore our offerings and redefine the way you make informed decisions. Here are three cards showcasing Datanest's transformative capabilities.</p>
                    </div>
                    <div class="cards_container" data-aos="fade-up">
                        <div class="card">
                            <h2>
                                Instant Access to Real-Time Insights
                            </h2>
                            <img src={documentgif} alt="document gif" />
                                <p>Dive into the present moment. Datanest offers users instant access to real-time insights, ensuring that you're always up to date with the latest information. Our AI algorithms continuously monitor and analyze data from various sources, delivering you actionable insights as events unfold. Stay ahead of the curve with up-to-the-minute intelligence to make agile decisions that matter.</p>
                        </div>
                        <div class="card">
                            <h2>
                                Personalized Recommendations
                            </h2>
                            <img src={globegif} alt="document gif" />
                                <p>Tailored insights just for you. Datanest's AI understands your preferences and needs. It provides personalized recommendations based on your past interactions and interests. Whether it's market trends, news updates, or investment opportunities, our platform ensures that you receive insights that are highly relevant to your specific goals and objectives.</p>
                        </div>
                        <div class="card">
                            <h2>
                                Predictive Analytics for Proactive Decision-Making
                            </h2>
                            <img src={chart_gif} alt="document gif" />
                                <p>Anticipate trends and opportunities. Datanest's predictive analytics leverage AI to forecast future events and trends. By analyzing historical and real-time data, our platform empowers you to be proactive in your decision-making. Whether it's predicting market movements, customer behaviors, or supply chain disruptions, Datanest equips you with the foresight</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default DashBoard;