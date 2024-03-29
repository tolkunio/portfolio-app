import Head from "next/head";
import {Inter} from "next/font/google";
import Layout from "@/app/components/common/Layout";
import {AboutMe} from "@/app/components/elements/aboutMe/AboutMe";
import {Main} from "@/app/components/elements/main/Main";
import Skills from "@/app/components/elements/skills/Skills";
import {Experiences} from "@/app/components/elements/experiences/Experiences";
import {Projects} from "@/app/components/elements/projects/Projects";
import Footer from "@/app/components/elements/footer/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <Main/>
                <AboutMe/>
                <Skills/>
                <Experiences/>
                <Projects/>
                <Footer/>
            </Layout>
        </>
    );
}
