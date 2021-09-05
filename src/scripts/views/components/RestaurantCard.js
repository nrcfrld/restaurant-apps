class RestauranCard extends HTMLElement {
  set restaurant(restaurant) {
    // eslint-disable-next-line no-underscore-dangle
    this._restaurant = restaurant;
    this.render();
  }

  async render() {
    this.innerHTML = /* html */ `
    <div class="restaurant">
    <picture class="restaurant-image">
        <source class="lazyload" data-srcset="https://restaurant-api.dicoding.dev/images/large/${this._restaurant.pictureId}" media="(min-width: 992px)">
        <source class="lazyload" data-srcset="https://restaurant-api.dicoding.dev/images/medium/${this._restaurant.pictureId}" media="(min-width: 768px)">
        <img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${this._restaurant.pictureId}" alt="${this._restaurant.name}">
    </picture>
    <div class="restaurant-info">
        <h3 tabindex="0" class="restaurant-info--name">
            <a href="/#/detail/${this._restaurant.id}">${this._restaurant.name}</a>
        </h3>
        <span
            class="restaurant-info--city"
            tabindex="0"
        >
            ${this._restaurant.city}
        </span>
        <p class="mt-3 text-secondary" tabindex="0">
        ${this._restaurant.description}
        </p>
        <div
            class="restaurant-info--rating mt-3 d-inline-flex flex-center"
            tabindex="0"
            aria-label="rating ${this._restaurant.rating}"
        >
            <svg
                class="mr-1"
                width="16"
                height="16"
                fill="#ffc107"
                stroke="#ffc107"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
            </svg>
            <span>${this._restaurant.rating}</span>
        </div>
    </div>
</div>
    `;
  }
}

window.customElements.define('restaurant-card', RestauranCard);
