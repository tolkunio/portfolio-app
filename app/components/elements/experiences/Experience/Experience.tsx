import s from './Experience.module.scss';
type PropsType={
    title:string,
    desc:string
}
const Experience = ({title,desc}:PropsType) => {
    return (
        <div className={s.experience}>
            <h3>{title}</h3>
            <div className={s.desc}>{desc}</div>
        </div>
    );
};

export default Experience;
