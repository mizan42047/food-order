import DUMMY_MEALS from "./DummyMeals";
import styles from './MealsAvailable.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
  const MealsAvailable = () => {
    const mealsList = DUMMY_MEALS.map((meals) => (
      <MealItem meals ={meals} key={meals.id} />
    ) )
    return(
      <section className = {styles.meals}>
        <Card>
          {mealsList}
        </Card>
      </section>
    )
  }


  export default MealsAvailable;