import React, { useEffect, useState } from "react";
import Recipe from "./recipes/Recipe"
import './App.css';
import logo from '../src/components/footer/logo.jpeg';

function App() {
  const APP_ID = "9844040b";
  const APP_KEY = "ee2f82cb138e232e525a261462a655bb";
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]); // константное значение элементов. через вторую функцию мы устанавливаем данные рецепта
  const [search, setSearch] = useState(''); // значення з пошуком, яке використовує стринговий тип. вказують це лапки в дужках 
  const [query, setQuery] = useState('apple');
  useEffect(() => { getRecipes(); }, [query]); // функция для вывода рецептов, с использованием функции "достать рецепт"
  const [type, setType] = useState('');
  
  const getRecipes = async () => { // функция "достать рецепт, в которой указывается ссылка на апи, информацию, которую мы достаем с джейсона"
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits); // установить рецепт через данные
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }
  
  const getSearch = e => { e.preventDefault(); setQuery(search); }

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt = "" /> 
      </div>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch} /> {/* впихуємо елемент стрінг в "значення", тим самим по цьому значенню буде корегуватись пошук*/}      
        <button className='search-button' type="submit">Search</button>
      </form>  
      <div className="Recipes">
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredientLines={recipe.recipe.ingredientLines} type={recipe.recipe.dishType} url={recipe.recipe.url} />
        // витягуючи з джейсона, ми можемо взяти ту інформацію, яку нам потрібно. це як взяти з класу конкретне поле.
      ))}  {/* меп - функция с джава, который выводит элемент реакт */}
      </div>
    </div >
  );
}

export default App;