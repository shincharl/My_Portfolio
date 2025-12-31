import Styles from '@/styles/contactme.module.css'
import Image from 'next/image';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";

const ContactMe = () => {

    const formRef = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = formRef.current;

        if (!form) return;

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if(!name || !email || !message){
            alert("이름, 이메일, 메시지는 반드시 입력해야 합니다.");
            return;
        }

        emailjs.sendForm(
            "service_ex1lg1d",
            "template_m0el64b",
            form,
            "X4NYz2JCdShwD74pK"
        ).then((result)=>{

            console.log(result.text);
            alert("메일이 성공적으로 전송되었습니다!");
            window.location.reload();

        }).catch((error)=>{
            console.error(error.text);
            alert("메일 전송에 실패했습니다.");
            window.location.reload();
        });
    };



    return (
        <>
            <div id='contact' className={Styles.wrap}>
                <div className={Styles.formWrap}>
                    <div className={Styles.titleWrap}>
                        <h1>Contact Me</h1>
                    </div>

                    <form ref={formRef} onSubmit={sendEmail}>
                        <input type="text" id="name" name="name"  placeholder="Name"/>

                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"/>

                        <input type="text" id="email" name="email" placeholder="E-mail"/>

                        <input type="text" id="interestedIn" name="interestedIn" placeholder="Interested In"/>

                        <textarea typeof="message" id="message" name="message" placeholder="Message" />

                        <button type="submit">SEND EMAIL →</button>
                    </form>
                </div>

                <Image src="/boy.jpg" alt="연락 이미지" width={700} height={400} quality={100} priority />
            </div>
        </>
    );
}

export default ContactMe;