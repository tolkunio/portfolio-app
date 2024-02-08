import s from './Header.module.scss';
import {Logo} from "../../components/shared/logo/Logo";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import { IHeaderMenu } from "../../components/type/HeaderMenu.type";

const menuItems: IHeaderMenu[] = [
    {title: 'Обо мне', link: 'aboutMe'},
    {title: 'Мои навыки', link: 'skills'},
    {title: 'Опыт работы', link: 'experience'},
    {title: 'Мои проекты', link: 'projects'},
    {title: 'Контакты', link: 'contacts'}

]
const Header = () => {
    return (
        <header className={s.header}>
            <Logo/>
            <HeaderMenu menuItems={menuItems}/>
        </header>
    );
};

export default Header;
