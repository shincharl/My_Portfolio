import Link from "next/link";
import Style from "@/styles/header.module.css"

const Header = () =>{
    return(
        <>
            <header>
                <div className={Style.wrap}>
                        <div className={Style.logo}>
                            <Link href={"/"} className={Style.link}>SHIN&apos;S PORTFOLIO</Link>
                        </div>
                    <ul className={Style.headerList}>
                        <li className={Style.listItem}><Link href="#aboutme" className={Style.link}>ABOUT ME</Link></li>
                        <li className={Style.listItem}><Link href="#skills" className={Style.link}>SKILLS</Link></li>
                        <li className={Style.listItem}><Link href="#projects" className={Style.link}>PROJECTS</Link></li>
                        <li className={Style.listItem}><Link href="#blog" className={Style.link}>SHIN&apos;S BLOG</Link></li>
                        <li className={Style.listItem}><Link href="#contact" className={Style.link}>CONTACT</Link></li>
                    </ul>
                </div>
            </header>
        </>
    );  
};

export default Header;