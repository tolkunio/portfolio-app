import s from './Logo.module.scss';

export const Logo = () => {
    return (
        <div className={s.logo}>
            <h3 className={s.icon}>{'</'}</h3>
            <a className={s.name}>{'Tolkun O'}</a>
        </div>
    );
};
