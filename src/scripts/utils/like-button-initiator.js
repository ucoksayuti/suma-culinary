import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { likeButtonTemplate, likedButtonTemplate } from '../views/templates/components';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderButtonTemplate(likedButtonTemplate(), this._unlikeButtonHandler.bind(this));
    } else {
      this._renderButtonTemplate(likeButtonTemplate(), this._likeButtonHandler.bind(this));
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderButtonTemplate(template, eventHandler) {
    this._likeButtonContainer.innerHTML = template;

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton.removeEventListener('click', this._lastEventHandler);
    likeButton.addEventListener('click', eventHandler);

    this._lastEventHandler = eventHandler;
  },

  async _likeButtonHandler() {
    await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
    await this._renderButton();
  },

  async _unlikeButtonHandler() {
    await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
    await this._renderButton();
  },
};

export default LikeButtonInitiator;
