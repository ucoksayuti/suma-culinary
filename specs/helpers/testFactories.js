import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  // Memanggil metode init dari LikeButtonInitiator dengan objek konfigurasi
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    data: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithRestaurant };
