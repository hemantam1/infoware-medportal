module.exports = function(sequelize, Sequelize) {
 
    var Nearbybuyer = sequelize.define('nearbybuyer', {
 
        nb_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        yes_or_no:{
            type: Sequelize.TEXT
        },
 
        name: {
            type: Sequelize.TEXT
        },
         
        address: {
            type: Sequelize.TEXT
        }, 

        pin_code_number : {
            type: Sequelize.BIGINT
        },

        mobile: {
            type: Sequelize.BIGINT
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