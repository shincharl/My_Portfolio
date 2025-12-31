import Image from "next/image";
import {Roboto} from 'next/font/google';
import Styles from "@/styles/home.module.css";
import AboutMe from "@/components/Aboutme";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import ContactMe from "@/components/Contactme";
import { useEffect, useState } from "react";
import Link from "next/link";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700']});

const projects = [
  { src: "/project1.jpg", alt: "강아지 산책 서비스 이미지", height: 200, link: "https://github.com/shincharl/Dog_Go_Frontend"},
  { src: "/eduProject.png", alt: "1:1 과외 서비스 이미지", height: 180, link: "https://github.com/shincharl/homeSchools"},
  { src: "/project2.jpg", alt: "포트폴리오 사이트 서비스 이미지", height: 200, link: "https://github.com/shincharl/My_Portfolio"},
];

export default function Home() {

  const [imageIndex, setImageIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  // 다음 이미지로 이동
  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % projects.length);
  };

  // 이전 이미지로 이동
  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    // 1. 이미지 슬라이드
    const interval = setInterval(() => {
      nextImage(); // 4초마다 다음 이미지로 이동
    }, 4000);

    // 2. 스크롤 버튼 표시/숨김
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    // 3. cleanup: interval과 이벤트 리스너 모두 제거
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
   <div className={roboto.className} style={{ padding: '20px' }}>
      <div className={Styles.wrap}>

        <div className={Styles.leftBlock}>
        <div className={Styles.mainTitle}>
          <h1 style={{ color: '#d3d3d3', fontWeight: 300 }}>신승철</h1>
          <h1>개발자</h1>
          <h1>포트폴리오</h1>
        </div>

          <div className={Styles.buttons}>
            <button onClick={prevImage}>←</button>
            <button onClick={nextImage}>→</button>
          </div>

          <div className={Styles.projectDemo}>
            <p>
              <span>{String(imageIndex + 1).padStart(2, "0")}</span>
              <span className={Styles.slash}>/</span>
              <span>{String(projects.length).padStart(2, "0")}</span>
            </p>  
          </div>
        </div>

        <div className={Styles.mainImage}>
          {projects[imageIndex].link ? (
            <Link
              href={projects[imageIndex].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={projects[imageIndex].src}
                alt={projects[imageIndex].alt}
                width={850}
                height={650}
                quality={100}
                style={{ cursor: "pointer" }}
              />
            </Link>
          ): (
            <Image
              src={projects[imageIndex].src}
              alt={projects[imageIndex].alt}
              width={850}
              height={650}
              quality={100}
            />
          )}

          <div className={Styles.projectGoWrap}>
            {projects[imageIndex].link && (
              <Link
                href={projects[imageIndex].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={Styles.projectGo}>
                  View Page →
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <AboutMe />
      <Skills />
      <Projects />
      <Blog/>
      <ContactMe/>

      <div style={{display: visible ? "block" : "none" }} className={Styles.upArrow}>
        <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>↑</button>
      </div>
    </div>
  );
}
