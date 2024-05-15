import React, { useState } from 'react';
import axios from 'axios';
import './Restaurants.css';

function Restaurants() {
    const [stateInput, setStateInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.get('https://localhost:5001/api/restaurants/top-restaurants', {
                params: {
                    state: stateInput,
                    city: cityInput
                }
            });
            
            const top3Restaurants = response.data.slice(0, 3);
            setRestaurants(top3Restaurants);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    return (
        <div className="restaurant-search">
            <h2>Search Top 3 Restaurants</h2>
            <form onSubmit={handleSearch}>
                <div>
                    <label htmlFor="state">State:</label>
                    <input
                        type="text"
                        id="state"
                        value={stateInput}
                        onChange={(e) => setStateInput(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        value={cityInput}
                        onChange={(e) => setCityInput(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Search</button>
            </form>

            <div>
                <h3>Top 3 Restaurants in {cityInput}, {stateInput}:</h3>
                {restaurants.length > 0 ? (
                    <ul>
                        {restaurants.map((restaurant, index) => (
                            <li key={index}>
                                <h4>{restaurant.name}</h4>
                                <p>Address: {restaurant.address}</p>
                                <p>Rating: {restaurant.rating}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
}

export default Restaurants;
