const assert = require('assert');

/* eslint-disable no-undef */
Feature('Like Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Anda belum menambahkan restorant favorite.', '.no-restaurant');
});

Scenario('like and unlike restaurant', async ({ I }) => {
  I.see('Anda belum menambahkan restorant favorite.', '.no-restaurant');

  I.amOnPage('/#');

  I.seeElement('.restaurant-info--name a');

  const firstRestaurant = locate('.restaurant-info--name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.wait(2);
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-info--name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  const likedRestaurant = locate('.restaurant-info--name a').first();

  I.click(likedRestaurant);

  I.seeElement('#likeButton');
  I.wait(2);
  I.click('#likeButton');
  I.amOnPage('/#/favorites');

  I.see('Anda belum menambahkan restorant favorite.', '.no-restaurant');
});
