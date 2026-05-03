import Styles from "@/styles/skills.module.css";
import type { ElementType } from "react";
import {
  HTML5,
  JavaScript,
  CSS3,
  Java,
  TypeScript,
  Spring,
  Oracle,
  MariaDB,
  React,
  Redux,
  NextJs,
  Linux,
  PostgreSQL,
  AWS,
  VercelDark,
  Heroku,
  Railway,
  NodeJs,
  MySQL,
  Docker,
  Git,
  Figma,
  ChatGPT,
} from "developer-icons";
import { SiHibernate } from "react-icons/si";
import { FaPython } from "react-icons/fa";

type SkillItem = {
  label: string;
  icon?: ElementType;
  shortLabel?: string;
};

type SkillGroup = {
  badge: string;
  title: string;
  skills: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    badge: "Front-end",
    title: "Frontend",
    skills: [
      { icon: HTML5, label: "HTML5" },
      { icon: CSS3, label: "CSS3" },
      { icon: JavaScript, label: "JavaScript" },
      { icon: TypeScript, label: "TypeScript" },
      { icon: React, label: "React" },
      { icon: NextJs, label: "Next.js" },
      { icon: Redux, label: "Redux" },
    ],
  },
  {
    badge: "Back-end",
    title: "Backend",
    skills: [
      { icon: Java, label: "Java" },
      { icon: Spring, label: "Spring" },
      { icon: SiHibernate, label: "JPA" },
      { label: "JSP", shortLabel: "JSP" },
      { icon: NodeJs, label: "Node.js" },
    ],
  },
  {
    badge: "AI / API",
    title: "AI / API",
    skills: [
      { icon: FaPython, label: "Python" },
      { label: "FastAPI", shortLabel: "API" },
      { label: "LLaMA", shortLabel: "LLM" },
      { icon: ChatGPT, label: "ChatGPT" },
    ],
  },
  {
    badge: "Database",
    title: "Database",
    skills: [
      { icon: MySQL, label: "MySQL" },
      { icon: Oracle, label: "Oracle" },
      { icon: PostgreSQL, label: "PostgreSQL" },
      { icon: MariaDB, label: "MariaDB" },
    ],
  },
  {
    badge: "Infra / Deploy",
    title: "Infra / Deploy",
    skills: [
      { icon: AWS, label: "AWS" },
      { icon: Docker, label: "Docker" },
      { icon: Railway, label: "Railway" },
      { icon: Heroku, label: "Heroku" },
      { icon: Linux, label: "Linux" },
      { icon: VercelDark, label: "Vercel" },
    ],
  },
  {
    badge: "Tools / Collaboration",
    title: "Tools / Collaboration",
    skills: [
      { icon: Git, label: "Git" },
      { icon: Figma, label: "Figma" },
      { label: "PowerPoint", shortLabel: "PPT" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className={Styles.wrap}>
      <div className={Styles.inner}>
        <div className={Styles.header}>
          <p className={Styles.subTitle}>Tech Stack</p>
          <h1 className={Styles.title}>Skills</h1>
          <p className={Styles.description}>
            프론트엔드부터 백엔드, AI 연동, 데이터베이스, 배포 환경까지
            직접 구현하고 운영하며 프로젝트를 완성해왔습니다.
          </p>
        </div>

        <div className={Styles.boxContainer}>
          {skillGroups.map((group) => (
            <article key={group.title} className={Styles.item}>
              <div className={Styles.cardTop}>
                <div className={Styles.cardTitleArea}>
                  <span className={Styles.badge}>{group.badge}</span>
                  <h3>{group.title}</h3>
                </div>
              </div>

              <div className={Styles.icons}>
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  const badgeClass =
                    skill.shortLabel === "PPT"
                      ? Styles.pptBadge
                      : skill.shortLabel === "JSP"
                      ? Styles.jspBadge
                      : skill.shortLabel === "API"
                      ? Styles.apiBadge
                      : skill.shortLabel === "LLM"
                      ? Styles.llmBadge
                      : "";

                  return (
                    <div key={skill.label} className={Styles.iconItem}>
                      <div className={Styles.iconBox}>
                        {Icon ? (
                          <Icon size={34} />
                        ) : (
                          <div className={`${Styles.textBadge} ${badgeClass}`}>
                            {skill.shortLabel ?? skill.label}
                          </div>
                        )}
                      </div>
                      <span className={Styles.iconLabel}>{skill.label}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;