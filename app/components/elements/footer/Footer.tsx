import s from './Footer.module.scss'
import Image from "next/image";
const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.questionTitle}>
                    Для любых вопросов, пожалуйста, пишите мне по адресу:
                </div>
                <div className={s.gmail}>
                    toprog27@gmail.com
                </div>
                <div className={s.contacts}>
                    <Image src={'/icons/linkeldn.svg'} width={34} height={36} alt={''}/>
                    <Image src={'/icons/telegram.svg'} width={34} height={36} alt={''}/>
                    <Image src={'/icons/github.svg'} width={34} height={36} alt={''}/>
                </div>
                <div className={s.bottom}>
                    © 2024 Tolkun Omurbekova, All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
