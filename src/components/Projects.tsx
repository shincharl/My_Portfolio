import Image from "next/image";
import Styles from '@/styles/projects.module.css';
import { useEffect, useState } from "react";
import Link from "next/link";

// 예제 이미지 데이터 (height를 랜덤으로 지정)
const images = [
  { src: "/webDesign.jpg", alt: "웹 디자인 이미지", height: 200 },
  { src: "/engineer.jpg", alt: "엔지니어 이미지", height: 250 },
  { src: "/online.jpg", alt: "프로그래머 이미지", height: 180 },
  { src: "/code.jpg", alt: "웹 디자인 이미지", height: 220 },
  { src: "/laptop.jpg", alt: "코드 이미지", height: 270 },
];

// 전달 받는 데이터 타입스크립트 타입 설정
interface Project {
    name : string,
    url : string,
    image : string,
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try{
                const res = await fetch('/api/GithubApi');
                const data: Project[] = await res.json();
                setProjects(data);
            }catch (error) {
                console.log("에러입니다..... : ", error)
            }
        };

        fetchProjects();

    },[]);

    return (
        <>
          <div id="projects" className={Styles.wrap}>
            <h1>Projects</h1>
            <ul className={Styles.projectGrid}>
                {projects.map((project, idx) => (
                    <li key={idx} className={Styles.projectCard}>
                        <div className={Styles.cardWrapper}>
                            <Link
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={300}
                                    height={200}
                                    className={Styles.image}
                                    quality={100}
                                    style={{cursor: "pointer"}}
                                />
                            </Link>

                            <div className={Styles.projectGoWrap}>
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={Styles.projectGo}
                                >
                                     Visit {project.name} →
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
        </>
    );
};

export default Projects;