const assert = require('assert');

const emptyConditions = "You don't have any Favorite Restaurant";
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see(emptyConditions, '.favorite-empty');

  I.amOnPage('/');

  I.waitForElement('.contentlistCard a', 5);
  I.seeElement('.contentlistCard a');
  const restauranCard = locate('.inf-title').first();
  const firstrestauranCard = await I.grabTextFrom(restauranCard);
  I.click(restauranCard);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.contentlistCard');
  const likedrestauranCard = await I.grabTextFrom('.inf-title');
  assert.strictEqual(firstrestauranCard, likedrestauranCard);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see(emptyConditions, '.favorite-empty');

  I.amOnPage('/');

  I.waitForElement('.contentlistCard a', 5);
  I.seeElement('.contentlistCard a');
  const restauranCard = locate('.inf-title').first();
  const firstrestauranCard = await I.grabTextFrom(restauranCard);
  I.click(restauranCard);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.contentlistCard');
  const likedrestauranCard = await I.grabTextFrom('.inf-title');
  assert.strictEqual(firstrestauranCard, likedrestauranCard);

  I.click(likedrestauranCard);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-empty');

  const empty = await I.grabTextFrom('.favorite-empty');

  assert.strictEqual(empty, emptyConditions);
});
