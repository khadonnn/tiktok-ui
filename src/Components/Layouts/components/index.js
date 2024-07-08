import styles from './Header.module.scss'
import className from 'classnames/bind'
const cx = className.bind(styles)
const Header = () => {
    return (
        <h2 classname={cx('wrapper')}>Header</h2>
    );
}

export default Header;