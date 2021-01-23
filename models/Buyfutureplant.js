module.exports = function(sequelize, Sequelize) {
 
    var Buyfutureplant = sequelize.define('buyfutureplant', {
 
        bfp_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        pname: {
            type: Sequelize.TEXT
        }, 
        formpart: {
            type: Sequelize.TEXT
        },
         
        test: {
            type: Sequelize.TEXT
        },
         
        requirement: {
            type: Sequelize.BIGINT
        },
         
        price: {
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
        tableName : 'buyfutureplant',
        timestamps : false
    });
 
    return Buyfutureplant;
 
}  