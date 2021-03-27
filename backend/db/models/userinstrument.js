'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserInstrument = sequelize.define('UserInstrument', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    instrumentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  UserInstrument.associate = function(models) {
    // associations can be defined here
  };
  return UserInstrument;
};
