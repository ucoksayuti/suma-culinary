import { restaurantCard } from '../templates/components';
import RestaurantSource from '../../data/restaurant-source';

const Hero = {
  async render() {
    return `
    <div class="latest">
        <h2 class="latesthead">Explore Your Favorite Restaurant</h2>
    </div>
    <div id="content" class="content"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.ListRestaurants();
    const restaurantsContainer = document.querySelector('#content');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restaurantCard(restaurant);
    });
  },
};

export default Hero;
