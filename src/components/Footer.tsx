import {MdLocationPin} from "react-icons/md";
import {MdEmail} from "react-icons/md";
import {MdPhone} from "react-icons/md";

import Styles from "@/styles/footer.module.css";

const Footer = () =>{
    return(
        <>
            <footer className={Styles.footer}>
                <div className={Styles.wrap}>
                    <div className={Styles.logo}>
                        <p>SHIN&apos;S PORTFOLIO</p>
                    </div>
                    <div className={Styles.padding}>
                        <p>Information</p>
                        <ul className={Styles.information}>
                            <li>About me</li>
                            <br/>
                            <li>Skill</li>
                            <br/>
                            <li>Projects</li>
                            <br/>
                            <li>Archiving</li>
                            <br/>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div className={Styles.padding}>
                        <p>Contacts</p>
                        <ul className={Styles.contacts}>
                            <li><MdLocationPin/>대전광역시 동구 동대전로 46번길 30</li>
                            <br/>
                            <li><MdEmail/>010-2735-7981</li>
                            <br/>
                            <li><MdPhone/>juns0858@naver.com</li>
                        </ul>
                    </div>
                </div>
                <div className={Styles.copyright}>
                        <hr/>
                        <p>© 2025 SHIN&apos;S PORTFOLIO. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;