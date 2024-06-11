import s from './Projects.module.scss'
import {IProject} from "@/app/components/type/Project.type";
import SectionTitle from "@/app/components/common/sectionTitle/SectionTitle";
import {Project} from "@/app/components/elements/projects/project/Project";

const projects: IProject[] = [
    {
        imgurl: '/images/itcalendar.png',
        title: 'It Calendar',
        desc: 'Designed for IT companies, this robust event calendar app helps teams stay on top of their busy schedules, coordinate events, and streamline collaboration',
        techStack: ['React', 'TypeScript', 'Next JS', 'Html/CSS', 'StoryBook'],
        codeUrl: 'https://github.com/tolkunio/task-organized-app'
    },
    {
        imgurl: '/images/todos.png',
        title: 'Task Organized App',
        desc: 'Task tracking app for manage tasks, projects and everything in between',
        techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        codeUrl: 'https://github.com/tolkunio/task-organized-app'
    },
    {
        imgurl: '/images/weather.png',
        title: 'Weather Dashboard ',
        desc: 'Weather Dashboard is a web application built with Next.js and SCSS Modules, allowing users to check the current weather conditions of various locations.',
        techStack: ['React.js', 'OpenWeatherMap API', 'SCSS', 'Next.js'],
        codeUrl: 'https://github.com/tolkunio/weather-dashboard'
    },
    {
        imgurl: '/images/chartScrolls.png',
        title: 'ChartScrolls',
        desc: 'Fintech news via chatGPT',
        techStack: ['TypeScript', 'React', 'NextJS', 'SCSS', 'Vercel'],
        codeUrl: 'https://github.com/tolkunio/chartScrolls'
    },
    {
        imgurl: '/images/travelio.png',
        title: 'Travelio',
        desc: 'Travel planning app that simplifies the journey from start to finish. ',
        techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        codeUrl: 'https://github.com/tolkunio/travelio'
    },
    {
        imgurl: '/images/learnify.png',
        title: 'Learnify',
        desc: 'Landing page for learnify ',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        codeUrl: 'https://github.com/tolkunio/learnify'
    }
]
export const Projects = () => {
    return (
        <section className={s.projects}>
            <div className={s.title}>
                <SectionTitle>{`</Мои проекты/>`}</SectionTitle>
            </div>
            <div className={s.container}>
                <div className={s.mainFlexWrapper}>
                    <div className={s.flexWrapper}>
                        <Project imgUrl={projects[0].imgurl}
                                 title={projects[0].title}
                                 desc={projects[0].desc}
                                 techStack={projects[0].techStack}
                                 codeUrl={projects[0].codeUrl}/>
                        <Project imgUrl={projects[1].imgurl}
                                 title={projects[1].title}
                                 desc={projects[1].desc}
                                 techStack={projects[1].techStack}
                                 codeUrl={projects[1].codeUrl}/>
                        <Project imgUrl={projects[2].imgurl}
                                 title={projects[2].title}
                                 desc={projects[2].desc}
                                 techStack={projects[2].techStack}
                                 codeUrl={projects[2].codeUrl}/>
                    </div>
                    <div className={s.flexWrapper}>
                        <Project imgUrl={projects[3].imgurl}
                                 title={projects[3].title}
                                 desc={projects[3].desc}
                                 techStack={projects[3].techStack}
                                 codeUrl={projects[3].codeUrl}/>
                        <Project imgUrl={projects[4].imgurl}
                                 title={projects[4].title}
                                 desc={projects[4].desc}
                                 techStack={projects[4].techStack}
                                 codeUrl={projects[4].codeUrl}/>
                        <Project imgUrl={projects[5].imgurl}
                                 title={projects[5].title}
                                 desc={projects[5].desc}
                                 techStack={projects[5].techStack}
                                 codeUrl={projects[5].codeUrl}/>
                    </div>
                </div>
            </div>

        </section>
    );
};
