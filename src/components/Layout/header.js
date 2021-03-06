import mealImage from '../../assets/meals.jpg';
import styles from './header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1>Raect Meals</h1>
                    <HeaderCartButton onClick={props.onClick}></HeaderCartButton>
                </header>
            </div>
            <div className={styles['main-image']}>
                <img src={mealImage} alt="Meal"/>
            </div>
        </>
    )
}

export default Header;