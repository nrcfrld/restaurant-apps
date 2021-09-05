import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeInitiator from '../../utils/like-initiator';
import { createRestaurantDetail } from '../templates/templates-creator';

const Detail = {
  async render() {
    return /* html */ `
    <section id="restaurant">
    </section>
    <div id="likeButtonContainer">
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    </div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.getElementById('restaurant');
    restaurantContainer.innerHTML = createRestaurantDetail(restaurant);

    LikeInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
