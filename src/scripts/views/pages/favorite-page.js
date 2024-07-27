import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { restaurantCard } from '../templates/components';

const Favorite = {
  async render() {
    return `
    <div class="latest">
        <h1 class="latesthead">Your Favorite Restaurant</h1>
        <div id="empty_favorite" class="favorite-empty"></div>
    </div>
    <div id="content" class="content"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#content');
    const emptyrestaurant = document.querySelector('#empty_favorite');
    if (restaurants.length === 0) {
      emptyrestaurant.innerHTML = `
        Kamu belum memilih!
      `;
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restaurantCard(restaurant);
    });
  },
};

export default Favorite;
