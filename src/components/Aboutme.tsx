import Styles from "@/styles/aboutme.module.css";
import {
  FaUser,
  FaEnvelope,
  FaCertificate,
  FaPhone,
  FaBirthdayCake,
  FaGraduationCap,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import type { IconType } from "react-icons";

type AboutItem = {
  icon: IconType;
  label: string;
  value: string;
};

const aboutItems: AboutItem[] = [
  {
    icon: FaUser,
    label: "이름",
    value: "신승철",
  },
  {
    icon: FaBirthdayCake,
    label: "생일",
    value: "1997.01.27",
  },
  {
    icon: MdLocationOn,
    label: "지역",
    value: "대전광역시",
  },
  {
    icon: FaPhone,
    label: "연락처",
    value: "010-2735-7981",
  },
  {
    icon: FaEnvelope,
    label: "이메일",
    value: "juns0858@naver.com",
  },
  {
    icon: FaGraduationCap,
    label: "학력",
    value: "대전대학교 졸업 (전자·정보통신공학 학사)",
  },
  {
    icon: FaCertificate,
    label: "자격증",
    value: "정보처리기사, SQLD, 네트워크관리사 2급, 리눅스마스터 2급",
  },
];

const AboutMe = () => {
  return (
    <section id="aboutme" className={Styles.aboutMe}>
      <div className={Styles.inner}>
        <div className={Styles.header}>
          <p className={Styles.subTitle}>Profile</p>
          <h1 className={Styles.title}>About Me</h1>
          <p className={Styles.description}>
            사용자 중심의 웹 서비스를 직접 설계하고 구현하는 개발자를 목표로,
            프론트엔드부터 백엔드, 배포까지 꾸준히 경험을 쌓아가고 있습니다.
          </p>
        </div>

        <div className={Styles.card}>
          <div className={Styles.grid}>
            {aboutItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className={Styles.item}>
                  <div className={Styles.iconBox}>
                    <Icon className={Styles.icon} />
                  </div>

                  <div className={Styles.textBox}>
                    <span className={Styles.label}>{item.label}</span>
                    <p className={Styles.value}>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;