import Image from "next/image";
import Styles from "@/styles/blog.module.css"
import Link from "next/link";
const Blog = () => {
    return (
        <>
            <div id="blog" className={Styles.wrap}>
                <h1>Shin&apos;s Study Blog</h1>

                <div className={Styles.blogImage}>
                    <Link
                        href="https://chamchicoder.tistory.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/blog.png"
                            alt="블로그 입장 이미지"
                            width={1100}
                            height={400}
                            quality={100}
                            priority
                            style={{cursor: "pointer"}}
                        />
                    </Link>

                    <div className={Styles.projectGoWrap}>
                        <Link
                            href="https://chamchicoder.tistory.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <span className={Styles.projectGo}>
                                   Go Shin&apos;s Blog →
                                </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;