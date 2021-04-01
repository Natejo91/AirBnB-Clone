'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstname: 'Demo',
        lastname: 'User',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        address: '2000 Euclid ave',
        city: 'Chicago',
        state: 'Illinois',
      },
      {
        firstname: 'Fake',
        lastname: 'User1',
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        address: '3400 W Adams Ave',
        city: 'New York',
        state: 'New York',
      },
      {
        firstname: 'Fake',
        lastname: 'User2',
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        address: '5500 N Sutton Ave',
        city: 'Rochester',
        state: 'New York',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
