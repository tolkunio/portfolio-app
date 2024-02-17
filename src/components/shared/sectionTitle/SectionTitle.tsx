import s from './SectionTitle.module.scss';
type SectionTitleProps = {
    children?: React.ReactNode
};

const SectionTitle = ({children}:SectionTitleProps) => {
    return (
        <h2 className={s.title}>
            {children}
        </h2>
    );
};

export default SectionTitle;
