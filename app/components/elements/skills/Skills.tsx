import s from './Skills.module.scss'
import SectionTitle from "@/app/components/common/sectionTitle/SectionTitle";
import Skill from "@/app/components/elements/skills/Skill/Skill";

const skills = [
    {
        title: 'Javascript',
        iconUrl: '/icons/js.svg'
    },
    {
        title: 'Typescript',
        iconUrl: '/icons/ts.svg'
    }, {
        title: 'React',
        iconUrl: '/icons/react.svg'
    }, {
        title: 'Redux Toolkit',
        iconUrl: '/icons/redux.svg'
    }, {
        title: 'NextJS',
        iconUrl: '/icons/next.svg'
    }, {
        title: 'Html5',
        iconUrl: '/icons/html.svg'
    }, {
        title: 'Css3',
        iconUrl: '/icons/css.svg'
    },
    {
        title: 'SASS/SCSS',
        iconUrl: '/icons/sass.svg'
    },
    {
        title: 'Styled Components',
        iconUrl: '/icons/styled.svg'
    }, {
        title: 'NodeJS',
        iconUrl: '/icons/node.svg'
    },
    {
        title: 'Axios',
        iconUrl: '/icons/rest.svg'
    },
    {
        title: 'Figma',
        iconUrl: '/icons/figma.svg'
    },
    {
        title: 'Git',
        iconUrl: '/icons/git.svg'
    },
    {
        title: 'NPM',
        iconUrl: '/icons/npm.svg'
    },
    {
        title: 'PostgreSql',
        iconUrl: '/icons/postgresql.svg'
    },


]
const Skills = () => {
    return (
        <section className={s.skills}>
            <div className={s.title}>
                <SectionTitle>{`</Мои навыки/>`}</SectionTitle>
            </div>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    {skills.map(skill => <Skill key={skill.title} title={skill.title} iconUrl={skill.iconUrl}/>)}
                </div>
            </div>
        </section>
    );
};

export default Skills;
