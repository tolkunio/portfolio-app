import s from './HeaderMenu.module.scss';
import {IHeaderMenu} from "@/app/components/type/HeaderMenu.type";
import Link from "next/link";

export const HeaderMenu = (props: { menuItems: IHeaderMenu[] }) => {
    return (
        <div className={s.headerMenu}>
            {
                props.menuItems.map((item) =>
                    <Link href={item.link} key={item.title}
                        className={s.link}>
                        {item.title}
                    </Link>)}
        </div>
    );
};