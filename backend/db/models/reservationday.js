'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReservationDay = sequelize.define('ReservationDay', {
    reserverId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    venueId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    concertDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  ReservationDay.associate = function(models) {
    // associations can be defined here
    }
  };
  return ReservationDay;
};
