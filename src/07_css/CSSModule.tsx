import styles from '@styles/CSSModule.module.css';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const CSSModule = () => {
    console.log(styles);
    console.log(cx('wrapper'));
    return (
        <div className={styles.wrapper}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
}

export default CSSModule;