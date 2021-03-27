'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instrument = sequelize.define('Instrument', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Instrument.associate = function(models) {
    // associations can be defined here
  };
  return Instrument;
};
