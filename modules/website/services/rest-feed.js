/**
 * @ngdoc service
 * @name website.services:restFeed
 * @description
 * ...
 */
angular
.module('website')
.factory('RestFeed', function () {
  return {

    /**
     * @ngdoc function
     * @name init
     * @methodOf website.services:restFeed
     * @description 
     * ...
     */
    init: function () {
      return;
    },


    /**
     * @ngdoc property
     * @name dataBrowser
     * @propertyOf website.services:restFeed
     * @type {Array}
     * @description 
     * Array of known Browsers.
     */
    dataBrowser: [
      {
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
      }
    ]
  };
});