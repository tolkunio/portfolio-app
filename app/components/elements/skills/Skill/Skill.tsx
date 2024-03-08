import s from './Skill.module.scss';
import Image from "next/image";
type PropsType={
    title:string,
    iconUrl:string
}
const Skill = ({title,iconUrl}:PropsType) => {
    return (
        <div className={s.skill}>
            <Image className={s.img} src={iconUrl} width={80} height={80} alt={'iconUrl'}/>
            <span className={s.title}>{title}</span>
        </div>
    );
};

export default Skill;
