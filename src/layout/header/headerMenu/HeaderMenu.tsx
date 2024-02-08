import s from './HeaderMenu.module.scss';
import {IHeaderMenu} from "../../../components/type/HeaderMenu.type";
import {Link} from "react-scroll";

export const HeaderMenu = (props: { menuItems: IHeaderMenu[] }) => {
    return (
        <div className={s.headerMenu}>
            {
                props.menuItems.map((item) =>
                    <Link
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