import React, { useState } from 'react'
import Mealitem from '../components/Mealitem'

const Meal = () => {
    const [search, setSearch] = useState();
    const [Mymeal, setMeal] = useState();
    const searchMeal = (evt) => {
        if(evt.key === "Enter") 
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
				.then(res => res.json())
				.then(data => {
					// console.log(data);
					setMeal(data.meals);
				}); 
        }  

    }
    return (
		<div className="main">
			<div className="heading">
				<h1> Search Your Cook Recipe!</h1>
				<h4>
					Hello, Everyone! we are so glad that you found your interesse here! If
					you are looking for a heaping variety of delicious and makeable
					recipes, then you have come to the right place! We will help to
					guide you through the process so you can learn to cook at
					home for your family or for best friends party or for yourself.
				</h4>
			</div>
			<div className="serachBox">
				<input
					type="serach"
					className="searchBar"
					placeholder="Enter Food name"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
					onKeyPress={searchMeal}
				></input>
			</div>
			<div className="container">
				{Mymeal == null ? (
					<p className="notFound">Not Found</p>
				) : (
					Mymeal.map((res) => {
						return <Mealitem data={res} />;
					})
				)}
			</div>
		</div>
	);
}

export default Meal


 