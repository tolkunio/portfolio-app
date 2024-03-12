import s from './Projects.module.scss'
import {IProject} from "@/app/components/type/Project.type";
import SectionTitle from "@/app/components/common/sectionTitle/SectionTitle";
import {Project} from "@/app/components/elements/projects/project/Project";

const projects: IProject[] = [
    {
        imgurl: '/images/project1.png',
        title: 'Project Title ',
        desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        codeUrl: 'https://github.com/tolkunio/weather-dashboard'
    },
    {
        imgurl: '/images/project2.png',
        title: 'Project Title ',
        desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        codeUrl: 'https://github.com/tolkunio/weather-dashboard'
    },
    {
        imgurl: '/images/project3.png',
        title: 'Project Title ',
        desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        codeUrl: 'https://github.com/tolkunio/weather-dashboard'
    },
    {
        imgurl: '/images/project4.png',
        title: 'Project Title ',
        desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        codeUrl: 'https://github.com/tolkunio/weather-dashboard'
    },
    {
        imgurl: '/images/project5.png',
        title: 'Project Title ',
        desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        codeUrl: 'https://github.com/tolkunio/weather-dashboard'
    },
    {
        imgurl: '/images/project1.png',
        title: 'Project Title ',
        desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        codeUrl: 'https://github.com/tolkunio/weather-dashboard'
    }
]
const petProjects:IProject[]=[

]
export const Projects = () => {
    return (
        <section className={s.projects}>
            <div className={s.title}>
                <SectionTitle>{`</Мои проекты/>`}</SectionTitle>
            </div>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                        {

                            projects.map((project) => <Project key={project.title}
                                                               imgUrl={project.imgurl}
                                                               title={project.title}
                                                               desc={project.desc}
                                                               techStack={project.techStack}
                                                               codeUrl={project.codeUrl}/>)
                        }
                    </div>
            </div>
        </section>
    );
};
