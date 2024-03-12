import s from './Experience.module.scss';
type PropsType={
    title:string,
    desc:string
}
const Experience = ({title,desc}:PropsType) => {
    return (
        <div className={s.experience}>
            <span>{title}</span>
            <div className={s.desc}>{desc}</div>
        </div>
    );
};

export default Experience;
