import s from './Main.module.scss';
import mainImg from '../../../assets/images/main-img.png';
import {Icon} from "../../../components/shared/icon/Icon";
const links=[
    {
        iconId:'linkedin',
        link:'https://www.linkedin.com/in/tolkun-omurbekova/'
    },
    {
        iconId:'telegram',
        link:'https://t.me/tolkunio/'
    },
    {
        iconId:'github  ',
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
                                links.map(link=><a href={link.link}>
                                <Icon iconId={link.iconId} width={'36'} height={'36'} viewBox={'0 0 36 36'}/>
                                </a>)
                            }
                        </div>
                    </div>
                    <img className={s.img} src={mainImg} width={'360'} height={'351'}/>
                </div>
            </div>
        </main>
    );
};
