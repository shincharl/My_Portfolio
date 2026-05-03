import Styles from "@/styles/contactme.module.css";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const name = form.elements.namedItem("name") as HTMLInputElement | null;
    const email = form.elements.namedItem("email") as HTMLInputElement | null;
    const message = form.elements.namedItem("message") as HTMLTextAreaElement | null;

    if (!name?.value.trim() || !email?.value.trim() || !message?.value.trim()) {
      alert("이름, 이메일, 메시지는 반드시 입력해야 합니다.");
      return;
    }

    try {
      setIsSending(true);

      await emailjs.sendForm(
        "service_ex1lg1d",
        "template_m0el64b",
        form,
        "X4NYz2JCdShwD74pK"
      );

      alert("메일이 성공적으로 전송되었습니다!");
      form.reset();
    } catch (error) {
      alert("메일 전송에 실패했습니다.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className={Styles.wrap}>
      <div className={Styles.inner}>
        <div className={Styles.header}>
          <p className={Styles.subTitle}>Contact</p>
          <h1 className={Styles.title}>Contact Me</h1>
          <p className={Styles.description}>
            협업, 프로젝트, 문의 사항이 있으시면 편하게 메시지를 남겨주세요.
          </p>
        </div>

        <div className={Styles.content}>
          <div className={Styles.formCard}>
            <div className={Styles.formHeader}>
              <h2>Let&apos;s work together</h2>
              <p>아래 정보를 입력해주시면 확인 후 답변드리겠습니다.</p>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className={Styles.form}>
              <div className={Styles.inputGrid}>
                <input type="text" id="name" name="name" placeholder="Name *" />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                />
                <input type="email" id="email" name="email" placeholder="E-mail *" />
                <input
                  type="text"
                  id="interestedIn"
                  name="interestedIn"
                  placeholder="Interested In"
                />
              </div>

              <textarea
                id="message"
                name="message"
                placeholder="Message *"
                rows={8}
              />

              <button type="submit" disabled={isSending}>
                {isSending ? "SENDING..." : "SEND EMAIL →"}
              </button>
            </form>
          </div>

          <div className={Styles.imageCard}>
            <div className={Styles.imageWrap}>
              <Image
                src="/boy.jpg"
                alt="연락 이미지"
                fill
                quality={100}
                priority
                className={Styles.contactImage}
              />
            </div>

            <div className={Styles.imageText}>
              <span className={Styles.imageBadge}>Open to Contact</span>
              <h3>함께 성장하는 개발을 지향합니다</h3>
              <p>
                사용자 경험을 고민하고, 직접 구현과 개선을 이어가는 개발자가
                되기 위해 꾸준히 배우고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;