import s from './HeaderMenu.module.scss';
import {Link} from "react-scroll";
import {IHeaderMenu} from "@/app/components/type/HeaderMenu.type";

export const HeaderMenu = (props: { menuItems: IHeaderMenu[] }) => {
    return (
        <div className={s.headerMenu}>
            {
                props.menuItems.map((item) =>
                    <Link key={item.title}
                        className={s.link}
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        to={item.link}>
                        {item.title}
                    </Link>)}
        </div>
    );
};