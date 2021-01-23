module.exports = function(sequelize, Sequelize) {
 
    var Nearbybuyer = sequelize.define('nearbybuyer', {
 
        nb_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        name: {
            type: Sequelize.TEXT
        },
         
        address: {
            type: Sequelize.TEXT
        }, 
        mobileno: {
            type: Sequelize.BIGINT
        }, 
        pin: {
            type: Sequelize.TEXT
        },
        userid: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users', // Can be both a string representing the table name or a Sequelize model
              key: 'id'
            }
          }
    }, {
        tableName : 'nearbyBuyer',
        timestamps : false
    });
 
    return Nearbybuyer;
 
}