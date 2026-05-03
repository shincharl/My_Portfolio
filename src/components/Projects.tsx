import Image from "next/image";
import Link from "next/link";
import Styles from "@/styles/projects.module.css";
import { useEffect, useState } from "react";

interface Project {
  name: string;
  url: string;
  image: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/GithubApi");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (error) {
        console.log("프로젝트 데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className={Styles.wrap}>
      <div className={Styles.inner}>
        <div className={Styles.header}>
          <p className={Styles.subTitle}>Portfolio</p>
          <h1 className={Styles.title}>Projects</h1>
          <p className={Styles.description}>
            직접 기획하고 구현한 프로젝트들을 통해
            사용자 경험, 기능 구현, 배포까지의 과정을 담았습니다.
          </p>
        </div>

        <div className={Styles.projectGrid}>
          {projects.map((project) => (
            <article key={project.url} className={Styles.projectCard}>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.imageLink}
              >
                <div className={Styles.imageWrap}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className={Styles.image}
                    quality={100}
                  />
                </div>
              </Link>

              <div className={Styles.cardContent}>
                <span className={Styles.projectBadge}>Project</span>
                <h3 className={Styles.projectName}>{project.name}</h3>
                <p className={Styles.projectText}>
                  프로젝트 상세 내용과 결과는 GitHub 또는 배포 링크에서
                  확인할 수 있습니다.
                </p>

                <div className={Styles.buttonWrap}>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.projectGo}
                  >
                    Visit Project →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;