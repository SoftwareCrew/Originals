import React, { useState } from 'react';
import axios from 'axios';

function Restaurants() {
    // State to hold form inputs and search results
    const [stateInput, setStateInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    // Function to handle form submission
    const handleSearch = async (event) => {
        event.preventDefault();
        
        // Make an API request to fetch top 3 restaurants based on state and city
        try {
            const response = await axios.get('/api/top-restaurants', {
                params: {
                    state: stateInput,
                    city: cityInput
                }
            });
            
            // Assuming the API returns a list of restaurants
            const top3Restaurants = response.data.slice(0, 3);
            
            // Set the state to the top 3 restaurants
            setRestaurants(top3Restaurants);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    return (
        <div className="restaurant-search">
            <h2>Search Top 3 Restaurants</h2>
            {/* Form for state and city input */}
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

            {/* Display the top 3 restaurants */}
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