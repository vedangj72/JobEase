import React from "react";
import ayushImg from '../../assets/profile/ayush.jpg';
import aayushImg from '../../assets/profile/aayush.jpg';
import vedangImg from '../../assets/profile/vedang.jpg';
import vaidehiImg from '../../assets/profile/vaidehi.jpg';
import linkedImg from '../../assets/icons/linkedin.png';
import GmailImg from '../../assets/icons/Gmail.png';
import githubImg from '../../assets/icons/github-sign.png';
import twitterImg from '../../assets/icons/twitter.png';
import vaishImg from '../../assets/profile/vaishnavi.png';
import shrutiImg from '../../assets/profile/shruti.png';
import "./newstyle.css";

function AboutUs() {
    return (
        <div>
            <h1 className="text-center">Job Ease</h1>
            <div className="text-center">
                {/* <p>Guided by:-<strong><u>Prof. B.V.Wakode</u></strong></p> */}
                A web development project by:
                <ul className="names" >
                    <li>
                        <div className="m1" style={{borderRadius:"8px"}}>
                            <img src={ayushImg} alt="Ayush Ghadekar"/>
                            <div className="info">Ayush Ghadekar</div>
                            <div className="links">
                                <a href="https://twitter.com/ayushghadekar" target="_blank" rel="noopener noreferrer"><img src={twitterImg}/></a>
                                <a  href="https://github.com/Ayushghadekar" target="_blank" rel="noopener noreferrer"><img src={githubImg} /></a>
                                <a href="https://www.linkedin.com/in/ayushghadekar" target="_blank" rel="noopener noreferrer"><img src={linkedImg}/></a>
                                <a href="mailto:ayushghadekar416@gmail.com"><img src={GmailImg}/></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="m1" style={{borderRadius:"8px"}}>
                            <img src={vedangImg}alt="Vedang Joshi" />
                            <div className="info">Vedang Joshi</div>
                            <div className="links">
                                <a href="https://twitter.com/vedangj" target="_blank" rel="noopener noreferrer"><img src={twitterImg}/></a>
                                <a href="https://github.com/vedangj044" target="_blank" rel="noopener noreferrer"><img src={githubImg}/></a>
                                <a href="https://www.linkedin.com/in/vedangj" target="_blank" rel="noopener noreferrer"><img src={linkedImg}/></a>
                                <a href="mailto:vedangjoshi772@gmail.com"><img src={GmailImg}/></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="m1" style={{borderRadius:"8px"}}>
                            <img src={vaidehiImg} alt="Vaidehi Wargat" />
                            <div className="info">Vaidehi Wargat</div>
                            <div className="links">
                                <a href="https://twitter.com/vaidehiwargat" target="_blank" rel="noopener noreferrer"><img src={twitterImg}/></a>
                                <a href="https://github.com/vaidehiwargat" target="_blank" rel="noopener noreferrer"><img src={githubImg}/></a>
                                <a href="https://www.linkedin.com/in/vaidehiwargat" target="_blank" rel="noopener noreferrer"><img src={linkedImg}/></a>
                                <a href="mailto:warvaidehi@gamil.com"><img src={GmailImg}/></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="m1" style={{borderRadius:"8px"}}>
                            <img src={aayushImg}alt="aayush badgujar" />
                            <div className="info">Aayush Badgujar</div>
                            <div className="links">
                                <a href="https://twitter.com/aayushbadgujar" target="_blank" rel="noopener noreferrer"><img src={twitterImg}/></a>
                                <a href="https://github.com/aayushbadgujar" target="_blank" rel="noopener noreferrer"><img src={githubImg}/></a>
                                <a href="https://www.linkedin.com/in/aayushbadgujar" target="_blank" rel="noopener noreferrer"><img src={linkedImg}/></a>
                                <a href="mailto:aayushbadgujar@gmail.com"><img src={GmailImg}/></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="m1" style={{borderRadius:"8px"}}>
                            <img src={vaishImg} alt="vaishanvi lande"/>
                            <div className="info">Vaishnavi Lande</div>
                            <div className="links">
                                <a href="https://twitter.com/ayushghadekar" target="_blank" rel="noopener noreferrer"><img src={twitterImg}/></a>
                                <a  href="https://github.com/Ayushghadekar" target="_blank" rel="noopener noreferrer"><img src={githubImg} /></a>
                                <a href="https://www.linkedin.com/in/vaishnavi-lande-0349aa250" target="_blank" rel="noopener noreferrer"><img src={linkedImg}/></a>
                                <a href="mailto:vaishnavilande342@gmail.com"><img src={GmailImg}/></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="m1" style={{borderRadius:"8px"}}>
                            <img src={shrutiImg} alt="shruti jogi"/>
                            <div className="info">Shruti jogi</div>
                            <div className="links">
                                <a href="https://twitter.com/Shruti118578020?t=J6w_4SETllSel2xnVazb1w&s=08" target="_blank" rel="noopener noreferrer"><img src={twitterImg}/></a>
                                <a  href="https://github.com/Shrutijogi21" target="_blank" rel="noopener noreferrer"><img src={githubImg} /></a>
                                <a href="https://www.linkedin.com/in/shruti-jogi-997470278" target="_blank" rel="noopener noreferrer"><img src={linkedImg}/></a>
                            <a href="mailto:shrutijogi03@gmail.com"><img src={GmailImg}/></a>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    )}

export default AboutUs;
