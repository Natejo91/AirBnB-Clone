'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Venues', [
        {
          title: 'TownHome',
          description: 'This quaint town home is a perfect place to hold a concert for a string quartet or for solo piano. We have an upright piano in the house that is available for use and is always tuned properly.',
          maxGuests: '50',
          dailyCost: '80.00',
          address: '1200 W Hillford Ave',
          concertDate: new Date(),
          bookingImgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-decor-ideas-sfshowcaselivingroom-03-1585257771.jpg',
          city: 'Michigan City',
          state: 'Michigan',
        },
        {
          title: 'Church',
          description: 'loremasedfasdfasdfasdfasdfasdfasdf',
          maxGuests: '40',
          dailyCost: '22.00',
          address: '10 W Hill Ave',
          concertDate: new Date(),
          bookingImgUrl: 'https://media.istockphoto.com/photos/modern-house-interior-design-picture-id1142747548?k=6&m=1142747548&s=612x612&w=0&h=czYvRWAXnGCgBYS9u09ceVJDUbAlbnOef_IsDtONtIs=',
          city: 'East Chicago',
          state: 'Indiana',
        },
        {
          title: 'Studio apartment',
          description: 'wqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
          maxGuests: '20',
          dailyCost: '75.00',
          address: '1452 N Ashford Ave',
          concertDate: new Date(),
          bookingImgUrl: 'https://images.adsttc.com/media/images/6053/e021/f91c/81a5/e900/06a2/newsletter/01_KRADS_thingvellir.jpg?1616109565',
          city: 'Oberlin',
          state: 'Ohio',
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Venues', null, {});
  }
};
