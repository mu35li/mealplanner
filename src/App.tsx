import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Recipe, recipes} from "./recipes";
import {RecipeCard} from "./RecipeCard";

type DayRecipe = {
  day: string
  recipe: Recipe
}

function App() {
  const days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]

  const [dayRecipes, setDayRecipes]: [DayRecipe[], any] = useState(() => {
    const initialRecipes = JSON.parse(localStorage.getItem("recipes") || "[]")

    return initialRecipes || [{day: "", recipe: {link: "", title: "", img: ""}}]
  })


  const randomRecipe: () => Recipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length)
    return recipes[randomIndex]
  }

  const generateDayRecipes = () => {
    const dayRecipes: DayRecipe[] =
      days.map(day => {
        const recipe = randomRecipe()
        return {"day": day, "recipe": recipe}
      })

    setDayRecipes(dayRecipes)
  }

  const onClick = () => {
    generateDayRecipes()
  }

  const renewRecipe = (day: string) => {
    const newRecipes = dayRecipes.map((dayRecipe) => {
      if (dayRecipe.day === day) {
        dayRecipe.recipe = randomRecipe()
      }

      return dayRecipe
    })

    setDayRecipes(newRecipes)
  }

  const likeRecipe = (day: string) => {
    const likedRecipe = dayRecipes.find((dayRecipe) => dayRecipe.day === day)
    console.log(`liked recipe: ${likedRecipe?.recipe.title}`)
  }

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(dayRecipes));
  }, [dayRecipes]);

  return (
    <div className="h-screen flex flex-col items-center justify-start">
      <div className="flex justify-around items-center">
        <h1 className="text-5xl font-light">Meal Planner</h1>
      </div>
      <div className="flex justify-end w-9/12">
        <Button onClick={onClick}></Button>
      </div>
      <div className="flex flex-wrap min-h-96 justify-between align-middle w-9/12">
        {dayRecipes.map((dayRecipe, index) => {
          return <div key={index} className="flex flex-col w-64">
            <div>{dayRecipe.day}</div>
            <RecipeCard recipe={dayRecipe.recipe} likeRecipe={() => likeRecipe(dayRecipe.day)} renewRecipe={() => renewRecipe(dayRecipe.day)}></RecipeCard>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
