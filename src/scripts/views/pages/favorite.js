import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../components/RestaurantCard';

const Favorite = {
  async render() {
    return /* html */ `
<section id="favorites">
    <div class="container">
        <h2 tabindex="0">Daftar Favorite Restoran</h2>
        <div class="restaurants-list mt-3">
            
        </div>
    </div>
</section>`;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.restaurants-list');
    const favoritesContainer = document.getElementById('favorites');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.restaurant = restaurant;
        restaurantsContainer.appendChild(restaurantCard);
      });
    } else {
      favoritesContainer.innerHTML = `
        <div class="no-restaurant d-flex flex-center">
          Anda belum menambahkan restorant favorite.
        </div>
      `;
    }
  },
};

export default Favorite;
