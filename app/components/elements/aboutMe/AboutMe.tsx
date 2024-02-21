import s from './AboutMe.module.scss';
import SectionTitle from "@/app/components/common/sectionTitle/SectionTitle";
import Image from "next/image";

export const AboutMe = () => {
    return (
        <section className={s.aboutMe}>
            <div className={s.title}>
                <SectionTitle>{'</Oбо мне/>'}</SectionTitle>
            </div>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.firstCardWrapper}>
                        <div className={s.cardContent}>
                            <Image src={'icons/ph_student.svg'} width={64} height={64}/>
                            <div>
                                Фронтенд-разработчик с более чем 1 годом коммерческого опыта.
                                Создаю адаптивные и удобные веб-приложения с использованием JS/ES6+, TypeScript,
                                React, Redux Toolkit, HTML/CSS, Rest API.
                                Опыт работы с тестовыми фреймворками, такими как Jest и StoryBook, а также
                                с Material UI для создания компонентов пользовательского интерфейса.
                            </div>
                        </div>
                    </div>
                    <div className={s.secondCardWrapper}>
                        <div className={s.cardContent}>
                            <Image src={'icons/ph_student.svg'} width={64} height={64}/>
                            <div className={s.content}>
                                <span className={s.education}>Образование</span>
                                <span>2013- 2017</span>
                                <span className={s.univer}>
                                    Кыргызско-Российский Славянский университет
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

