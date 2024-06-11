import s from './Project.module.scss'
import Image from "next/image";

type PropsType = {
    imgUrl: string,
    title: string,
    desc: string,
    techStack: string[],
    codeUrl: string
}
export const Project = ({imgUrl, title, desc, codeUrl, techStack}: PropsType) => {
    return (
        <div className={s.project}>
            <Image className={s.bgimg} src={imgUrl} width={310} height={257} alt='project img'/>
            <div className={s.content}>
                <div className={s.descContent}>
                    <span className={s.title}>{title}</span>
                    <div className={s.desc}>{desc}</div>
                    <div className={s.stack}>
                        {
                            techStack.map((item) => <span key={item}>{item}, </span>)
                        }
                    </div>
                </div>
                <div className={s.code}>
                    <Image src={'/icons/github.svg'} width={36} height={36} alt=''/>
                    <button onClick={() => {
                    }}>
                        View Code
                    </button>
                </div>
            </div>
        </div>
    );
};

