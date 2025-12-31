import Styles from '@/styles/skills.module.css'
import Image from 'next/image';
import {HTML5, JavaScript, CSS3, Java, 
    TypeScript, Spring, Oracle, MariaDB, React, 
    Redux, NextJs, Supabase, Linux, PostgreSQL,
    AWS,VercelDark,
    Heroku,
    Railway} from "developer-icons";
const Skills = () => {
    return (
        <>
            <div id='skills' className={Styles.wrap}>
                <h1>Skills</h1>

                <div className={Styles.boxContainer}>
                    <div className={Styles.item}>
                        <h3>Language</h3>
                        <Image className={Styles.images} src="/language.jpg" alt="언어 이미지" width={150} height={100} quality={100} priority/>
                        <div className={Styles.icons}>
                            <JavaScript size={48}/>
                            <TypeScript size={48}/>
                            <Java size={48}/>
                            <Linux size={48}/>
                        </div>
                    </div>

                    <div className={Styles.item}>
                        <h3>Front end</h3>
                        <Image className={Styles.images} src="/frontEnd.png" alt="프런트엔드 이미지" width={150} height={100} quality={100} priority/>
                        <div className={Styles.icons}>
                            <HTML5 size={48}/>
                            <CSS3 size={48}/>
                            <React size={48}/>
                            <Redux size={48}/>
                            <NextJs size={48}/>
                            <VercelDark size={48}/>
                        </div>
                    </div>

                    <div className={Styles.item}>
                        <h3>Back end</h3>
                        <Image className={Styles.images} src="/backEnd.png" alt="백엔드 이미지" width={150} height={100} quality={100} priority/>
                        <div className={Styles.icons}>
                            <Spring size={48}/>
                            <Oracle size={48}/>
                            <MariaDB size={48}/>
                            <PostgreSQL size={48}/>
                            <Heroku size={48}/>
                            <Railway size={48}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;