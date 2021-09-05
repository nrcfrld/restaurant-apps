import RestaurantSource from '../../data/restaurant-source';
import '../components/RestaurantCard';

const Home = {
  async render() {
    return /* html */ `<section id="hero-section">
    <div class="jumbotron">
        <picture>
            <source class="jumbotron-image lazyload" data-srcset="./images/heros/hero-image_4-large.jpg" media="(min-width: 768px)">
            <img class="jumbotron-image lazyload" data-src="./images/heros/hero-image_4-small.jpg" alt="Hero Image">
            Hero image
        </picture>
        <div class="jumbotron-text container">
            <div class="jumbotron-text--card">
                <h1 class="jumbotron-text-title" tabindex="0">
                    Freshtoran
                </h1>
                <p class="jumbotron-text-caption" tabindex="0">
                    Temukan Restoran yang sesuai dengan keinginan
                    Anda
                </p>
                <a
                    href="#restaurants-section"
                    class="btn primary d-inline-flex flex-center"
                >
                    <svg
                        class="mr-1"
                        width="16px"
                        height="16px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                    Temukan Restoran
                </a>
            </div>
        </div>
    </div>
</section>
<section id="restaurants-section">
    <div class="container">
        <h2 tabindex="0">Daftar Katalog Restoran</h2>
        <div class="restaurants-list mt-3">
            
        </div>
    </div>
</section>`;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('.restaurants-list');
    restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('restaurant-card');
      restaurantCard.restaurant = restaurant;
      restaurantsContainer.appendChild(restaurantCard);
    });
  },
};

export default Home;
