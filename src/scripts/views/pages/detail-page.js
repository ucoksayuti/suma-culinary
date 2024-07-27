import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { restaurantDetail } from '../templates/components';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div class="detail_container">
            <h2 class="detail_head">Detail Page</h2>
        </div>
        <div id="detail_content" class="detail_content"></div>
        <div id="likeButtonCon"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail_content');

    restaurantContainer.innerHTML = restaurantDetail(data.restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonCon'),
      data,
    });
  },
};

export default Detail;
