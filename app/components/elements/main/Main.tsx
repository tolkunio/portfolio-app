import s from './Main.module.scss';
import mainImg from '../../../assets/images/main-img.png';
import Image from "next/image";
const links=[
    {
        iconUrl:'/icons/linkeldn.svg',
        link:'https://www.linkedin.com/in/tolkun-omurbekova/'
    },
    {
        iconUrl:'/icons/telegram.svg',
        link:'https://t.me/tolkunio/'
    },
    {
        iconUrl:'/icons/github.svg',
        link:'https://github.com/tolkunio'
    },
]

export const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.content}>
                        <span className={s.hello}>
                            Привет, я Толкун 👋
                        </span>
                        <span className={s.dev}>
                             {'<фронтенд-разработчик/>,'}
                        </span>
                        <p className={s.desc}>
                            разрабатываю креативные интерфейсы, сайты и веб-приложения
                        </p>
                        <div className={s.links}>
                            {
                                links.map(link=><a key={link.iconUrl} href={link.link}>
                                    <Image src={link.iconUrl} width={36} height={36}/>
                                </a>)
                            }
                        </div>
                    </div>
                    <img className={s.img} src={'/images/main-img.png'} width={'360'} height={'351'}/>
                </div>
            </div>
        </main>
    );
};
