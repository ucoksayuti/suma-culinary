import CONFIG from '../../globals/config';

const restaurantCard = (restaurant) => `
    <div class="contentlistCard" id="list">
        <a href="/#/detail/${restaurant.id}">
        <img class="image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
            <div class="restaurantInformation">
                <div class="top-of-card">
                    <div class="left-card-con">
                        <h2 class="inf-title">${restaurant.name}</h2>
                        <p class="info_city">${restaurant.city}<p>
                    </div>
                    <div class="right-card-con">
                        <p> Rating</p>
                        <p class="info_rates">${restaurant.rating}<p>
                    </div>
                </div>
                <p class="info_desc">${restaurant.description.slice(0, 225)}</p>
            </div>
        </a>
    </div>`;

const restaurantDetail = (restaurant) => `
    <div id="contentdetail" class="contentdetail">
        <img class="image_detail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="detail-resto">
                <h2 class="detail-resto-title">${restaurant.name}</h2>
            <div class="info_list">
            
                <div class="top-detail">

                    <div class="top-detail-left">
                        <h4>City</h4>
                        <p class="info_city">${restaurant.city}<p>
                    </div>

                    <div class="top-detail-middle">
                        <h4>Address</h4>
                        <p class="info_address">${restaurant.address}<p>
                    </div>

                    <div class="top-detail-right">
                        <h4>Rating</h4>
                        <p class="info_rate">${restaurant.rating}<p>
                    </div>

                </div>

                
                <div/>

                <h4>Description</h4>
                <p class="info_desc">${restaurant.description}</p>
            </div>
            <h2 class="detail-resto-title">Menu</h2>
            <div class="menu-rest">
                <div class="foods_detail">
                <h4 class="menu_title">Foods</h4>
                <ul>
                    ${restaurant.menus.foods.map((food) => `<li class="list">${food.name}</li>`).join('')}
                </ul>
                </div>
                <div class="drinks_detail">
                <h4 class="menu_title">Drinks</h4>
                <ul>
                    ${restaurant.menus.drinks.map((drink) => `<li class="list">${drink.name}</li>`).join('')}</p>
                </ul>
                </div>
            </div>
            <div class="restaurant_review">
                <h3 class="review_header">Review</h3>
                <div class="review_item">
                ${restaurant.customerReviews.map((reviewer) => `
                    <h4>${reviewer.name} - ${reviewer.date}</h4>
                    <p>${reviewer.review}</p>`).slice(0, 3)}
                </div>
            </div>
        </div>
    </div>
    `;

const likedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
            <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const likeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

export {
  restaurantCard,
  restaurantDetail,
  likedButtonTemplate,
  likeButtonTemplate,
};
