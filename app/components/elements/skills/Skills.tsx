import s from './Skills.module.scss'
import SectionTitle from "@/app/components/common/sectionTitle/SectionTitle";
const Skills = () => {
    return (
        <section className={s.skills}>
            <div className={s.title}>
                <SectionTitle>{`</Мои навыки/>`}</SectionTitle>
            </div>
            <div className={s.container}>

            </div>
        </section>
    );
};

export default Skills;
