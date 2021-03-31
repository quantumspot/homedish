import React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import InputBase from '@material-ui/core/InputBase';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const arraySample = 
    [ {id: 1,
        url: 'https://www.roadaffair.com/wp-content/uploads/2018/07/vegan-street-food-nyc-shutterstock_404195452-1024x683.jpg',
        name: 'Squash Soup',
        cook_name: 'Sandra Song',
        meal_type: 'dinner',
        allergens: 'none',
        rating: 4,
        price: 8
      },
      {id: 2,
        url: 'https://www.roadaffair.com/wp-content/uploads/2018/07/vegan-street-food-nyc-shutterstock_404195452-1024x683.jpg',
        name: 'Squash Soup2',
        cook_name: 'Sandra Song',
        meal_type: 'dinner',
        allergens: 'none',
        rating: 4,
        price: 8
      },
      {id: 3,
        url: 'https://www.roadaffair.com/wp-content/uploads/2018/07/vegan-street-food-nyc-shutterstock_404195452-1024x683.jpg',
        name: 'Squash Soup3',
        cook_name: 'Sandra Song',
        meal_type: 'dinner',
        allergens: 'none',
        rating: 4,
        price: 8
      },
      {id: 4,
        url: 'https://www.roadaffair.com/wp-content/uploads/2018/07/vegan-street-food-nyc-shutterstock_404195452-1024x683.jpg',
        name: 'Squash Soup4',
        cook_name: 'Sandra Song',
        meal_type: 'dinner',
        allergens: 'none',
        rating: 4,
        price: 8
      },
      {id: 5,
        url: 'https://www.roadaffair.com/wp-content/uploads/2018/07/vegan-street-food-nyc-shutterstock_404195452-1024x683.jpg',
        name: 'Squash Soup5',
        cook_name: 'Sandra Song',
        meal_type: 'dinner',
        allergens: 'none',
        rating: 4,
        price: 8
      },
    ];

const Search = () => {
    // const [arraySample, updateSample] = useState(arraySample);

    return (
        <div className="search">
            <div className="subtitle">
                Dishes available near you
                </div>
            <div className="search-loc">
                <div>
                <LocationOnOutlinedIcon />
                </div>
                <div>
                <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                </div>
                <div>
                    <ArrowForwardIcon />
                </div>
            </div>

            <div className="filters">
                <button>Meal Type</button>
                <button>Rating</button>
                <button>Price</button>
                <button>Preferences</button>
            </div>

            <div className="results">
                {arraySample.map((el) => {
                    return (
                        <Result 
                            key={el.id}
                            recipeUrl={el.url}
                            recipeName={el.name}
                            recipeCook={el.cook_name}
                            recipeMealType={el.meal_type}
                            allergens={el.allergens}
                            rating={el.rating}
                            recipePrice={el.price} />
                    )
                })}
            </div>
        </div>
    )
}

// const Filter = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div classname="filter"></div>
//         <button onclick="{()" ==""> setIsOpen(!isOpen)} className="filter__button"></button>
//         Technologies
//   );
// }

const Result = ( { key, recipeUrl, recipeName, recipeCook, recipeMealType, allergens, rating, recipePrice }) => {
    const starRating = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) { 
            starRating.push(<StarIcon style={{ fontSize: 'small' }} />);
        } else {
            starRating.push(<StarBorderIcon style={{ fontSize: 'small' }} />);
        }
    }

    return (
        <div className="result" key={key}>
            <img src={recipeUrl} />

            <div className="result-name">
                <b>{recipeName}</b> by {recipeCook}
            </div>

            <div className="result-details">
                {recipeMealType} 
                <div className="allergens"> 
                    {/* /* this should loop */}
                    {allergens}
                </div>
                <div>
                    {starRating}
                </div>
            </div>

            <div className="result-price">
                {recipePrice} Tokens
            </div>
        </div>
  );
}

export default Search;