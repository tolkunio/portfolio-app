import s from './Header.module.scss';
import {IHeaderMenu} from "@/app/components/type/HeaderMenu.type";
import {Logo} from "@/app/components/common/logo/Logo";
import {HeaderMenu} from "@/app/components/common/header/headerMenu/HeaderMenu";

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
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <Logo/>
                    <HeaderMenu menuItems={menuItems}/>
                </div>
            </div>
        </header>
    );
};

export default Header;
