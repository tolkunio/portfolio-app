import s from './Experiences.module.scss';
import SectionTitle from "@/app/components/common/sectionTitle/SectionTitle";
import {IExperiences} from "@/app/components/type/Experiences.type";
import Experience from "@/app/components/elements/experiences/Experience/Experience";
import Image from "next/image";

const experiences: IExperiences[] = [
    {
        title: 'Frontend разработчик',
        desc: 'Принимала участие в разработке SPA приложений с использованиемReact/TS/Redux/Next.js Оптимизировала производительность работы системы (memo,useCallback , useMemo и т.д). Занималась устранением ошибок и провела рефакторинг кода. Участвовала в коммуникации и взаимодействии с backend. Работала в команде через Git, Jira, активно проводила code review',
    },
    {
        title: 'Junior Frontend разработчик',
        desc: 'Участвовала в анализе и подборе библиотек необходимых длявыполнения ТЗ.Реализовала управление состояниями на уровне BLL с помошью Redux Toolkit .Настраивала связь с сервером с использованием Axios (CRUD). Осуществляла авторизационный flow',
    },
    {
        title: '.Net Support Engineer',
        desc: 'Участие в разработке десктопных приложений длябанковской системы.Поддержка текущей системы, баг фиксинг.Создавала хранимые процедуры и SQL-запросы различной сложности.Чтение документации, чтение и изменение чужого кода.'
    }
]
const companies: IExperiences[] = [
    {
        title: 'It Calendar Lab',
        desc: '(2024 Feb - current)'
    },
    {
        title: 'Cash Landing Co',
        desc: '(2023 June - 2024 Feb)'
    },
    {
        title: 'Instant Payments',
        desc: '(2019 Dec - 2021 May)'
    }
]
export const Experiences = () => {
    return (
        <div className={s.experiences}>
            <div className={s.title}>
                <SectionTitle>{`</Опыт работы/>`}</SectionTitle>
            </div>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.experienceWrapper}>
                        {companies.map((item) => <Experience key={item.title} title={item.title} desc={item.desc}/>)}
                    </div>
                    <div className={s.middleWrapper}>
                        <Image src='/icons/group.svg' width={65} height={580} alt={'grou['}/>
                    </div>
                    <div className={s.descWrapper}>
                        {experiences.map((item) => <Experience key={item.title} title={item.title} desc={item.desc}/>)}
                    </div>
                </div>
            </div>

        </div>
    );
};

