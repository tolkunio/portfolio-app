import s from './Main.module.scss';
import mainImg from '../../../assets/images/main-img.png';
export const Main = () => {
    return (
        <div className={s.container}>
            <div className={s.main}>
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
                    <div className={s.icons}>

                    </div>
                </div>
                <img className={s.img} src={mainImg} width={'400'} height={'400'}/>
            </div>
        </div>
    );
};
