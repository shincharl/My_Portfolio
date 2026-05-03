import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";

import Styles from "@/styles/home.module.css";
import AboutMe from "@/components/Aboutme";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import ContactMe from "@/components/Contactme";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const projects = [
  {
    src: "/main.jpg",
    alt: "BeatAI 서비스 이미지",
    link: "https://github.com/shincharl/songsAI",
    title: "BeatAI",
    description: "감정 분석 기반 음악 추천 서비스 프로젝트",
  },
  {
    src: "/project2.jpg",
    alt: "포트폴리오 사이트 서비스 이미지",
    link: "https://github.com/shincharl/My_Portfolio",
    title: "Portfolio",
    description: "개인 포트폴리오 사이트 프로젝트",
  },
  {
    src: "/project1.jpg",
    alt: "강아지 산책 서비스 이미지",
    link: "https://github.com/shincharl/Dog_Go_Frontend",
    title: "Dog Go",
    description: "반려견 산책 관련 서비스를 구현한 프로젝트",
  },
  {
    src: "/eduProject.png",
    alt: "1:1 과외 서비스 이미지",
    link: "https://github.com/shincharl/homeSchools",
    title: "Home Schools",
    description: "1:1 과외 연결 서비스를 주제로 한 프로젝트",
  },
];

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const nextImage = () => {
    setImageIndex((prev) => {
      if (prev === projects.length - 1) return 0;
      return prev + 1;
    });
  };

  const prevImage = () => {
    setImageIndex((prev) => {
      if (prev === 0) return projects.length - 1;
      return prev - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => {
        if (prev === projects.length - 1) return 0;
        return prev + 1;
      });
    }, 4000);

    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const currentProject = projects[imageIndex];

  return (
    <div className={`${roboto.className} ${Styles.page}`}>
      <section className={Styles.hero}>
        <div className={Styles.heroInner}>
          <div className={Styles.leftBlock}>
            <span className={Styles.heroBadge}>Web Developer Portfolio</span>

            <div className={Styles.mainTitle}>
              <h1>신승철</h1>
              <h2>사용자 경험과 구현을 함께 고민하는 웹 개발자</h2>
            </div>

            <p className={Styles.heroDescription}>
              프론트엔드부터 백엔드, 데이터베이스, 배포까지 직접 구현하며
              서비스의 흐름을 이해하고 완성해왔습니다.
            </p>

            <div className={Styles.heroButtons}>
              <a href="#projects" className={Styles.primaryButton}>
                프로젝트 보기
              </a>
              <a href="#contact" className={Styles.secondaryButton}>
                연락하기
              </a>
            </div>

            <div className={Styles.sliderControls}>
              <button onClick={prevImage} aria-label="이전 프로젝트">
                ←
              </button>

              <div className={Styles.projectDemo}>
                <span>{String(imageIndex + 1).padStart(2, "0")}</span>
                <span className={Styles.slash}>/</span>
                <span>{String(projects.length).padStart(2, "0")}</span>
                <strong className={Styles.projectNameDebug}>
                  {currentProject.title}
                </strong>
              </div>

              <button onClick={nextImage} aria-label="다음 프로젝트">
                →
              </button>
            </div>
          </div>

          <div className={Styles.rightBlock}>
            <div className={Styles.previewCard}>
              <Link
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.imageLink}
              >
                <div className={Styles.mainImage}>
                  <Image
                    src={currentProject.src}
                    alt={currentProject.alt}
                    fill
                    quality={100}
                    priority
                    className={Styles.previewImage}
                  />
                </div>
              </Link>

              <div className={Styles.previewContent}>
                <span className={Styles.previewBadge}>Featured Project</span>
                <h3>{currentProject.title}</h3>
                <p>{currentProject.description}</p>

                <Link
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Styles.projectGo}
                >
                  View Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutMe />
      <Skills />
      <Projects />
      <Blog />
      <ContactMe />

      {visible && (
        <div className={Styles.upArrow}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="맨 위로 이동"
          >
            ↑
          </button>
        </div>
      )}
    </div>
  );
}