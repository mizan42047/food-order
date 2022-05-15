import mealImage from '../../assets/meals.jpg';
import styles from './header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1>Raect Meals</h1>
                    <HeaderCartButton></HeaderCartButton>
                </header>
            </div>
            <div className={styles['main-image']}>
                <img src={mealImage} alt="Meals Photo" />
            </div>
        </>
    )
}

export default Header;