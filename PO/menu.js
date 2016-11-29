var _adminPage = require('./adminPage.js'),
    util = require('util'),
    AdminPage = new _adminPage();

/**
 * Конструктор
 * @constructor
 */
function Menu() {
}

/**
 * Получить все элементы меню
 * @returns {webdriver[]} все элементы меню
 */
Menu.prototype.getAllMenuItems = function () {
  return this.getElementOnCurrentPage('Menu')
      .findElements(wd.by.css('#box-apps-Menu > li'));
};

/**
 * Получить раскрытый элемент меню
 * @returns {webdriver[]} раскрытый элемент меню
 */
Menu.prototype.getOpenedMenuItem = function () {
  var openedMenuItem;

  openedMenuItem = this.getElementOnCurrentPage('Menu')
      .findElements(wd.by.css('#box-apps-Menu > li.selected'));

  return wd.wait(openedMenuItem[0]).then(function () {
    return openedMenuItem;
  });
};

/**
 * Получить все элементы меню
 * @returns {Promise.webdriver[]} все подэлементы меню
 */
Menu.prototype.getAllMenuSubItems = function () {
  var subElements;

  return this.getOpenedMenuItem().then(function (_openedMenuItem) {
    if (_openedMenuItem.length > 0) {
      subElements = _openedMenuItem[0].findElements(wd.by.css('li'));
    } else {
      subElements = [];
    }
    return subElements;
  });
};

module.exports = Menu;