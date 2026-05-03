import Image from "next/image";
import Link from "next/link";
import Styles from "@/styles/blog.module.css";

const Blog = () => {
  return (
    <section id="blog" className={Styles.wrap}>
      <div className={Styles.inner}>
        <div className={Styles.header}>
          <p className={Styles.subTitle}>Archive</p>
          <h1 className={Styles.title}>Study Blog</h1>
          <p className={Styles.description}>
            학습한 내용과 개발 과정에서 겪은 문제 해결 경험을
            꾸준히 기록하고 정리하고 있습니다.
          </p>
        </div>

        <div className={Styles.card}>
          <div className={Styles.content}>
            <div className={Styles.textArea}>
              <span className={Styles.badge}>Tistory Blog</span>
              <h2 className={Styles.cardTitle}>Shin&apos;s Study Blog</h2>
              <p className={Styles.cardDescription}>
                Java, Spring, React, 배포, 트러블슈팅 등
                공부한 내용을 기록하며 성장 과정을 정리하는 공간입니다.
              </p>

              <div className={Styles.buttonWrap}>
                <Link
                  href="https://chamchicoder.tistory.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Styles.primaryButton}
                >
                  블로그 바로가기
                </Link>
              </div>
            </div>

            <Link
              href="https://chamchicoder.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.previewLink}
            >
              <div className={Styles.imageWrap}>
                <Image
                  src="/blog.png"
                  alt="신승철 티스토리 블로그 미리보기"
                  fill
                  quality={100}
                  priority
                  className={Styles.blogImage}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;