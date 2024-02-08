import s from './Logo.module.scss';

export const Logo = () => {
    return (
        <div>
            <a>
                <span className={s.icon}>{'</'}</span>
                <span className={s.name}>{'Tolkun O'}</span>
            </a>
        </div>
    );
};
