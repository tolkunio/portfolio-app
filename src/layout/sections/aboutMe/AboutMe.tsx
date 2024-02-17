import s from './AboutMe.module.scss';
import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";

export const AboutMe = () => {
    return (
        <section className={s.aboutMe}>
            <SectionTitle>{'</Oбо мне/>'}</SectionTitle>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.firstColumn}>

                    </div>
                    <div className={s.secondColum}>

                    </div>
                </div>
            </div>
        </section>

    );
};

