module.exports = function(sequelize, Sequelize) {
 
    var Plantg = sequelize.define('plantg', {
 
        plant_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        pname: {
            type: Sequelize.TEXT
        },
 
        variety : {
            type: Sequelize.TEXT
        },

        area : {
            type: Sequelize.TEXT
        },

        whenplant : {
            type: Sequelize.DATE
        },

        useful_part : {
            type: Sequelize.TEXT
        },

        harvest : {
            type: Sequelize.DATE
        },

        estprod : {
            type: Sequelize.BIGINT
        },

        expprice : {
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
        tableName : 'plantg',
        timestamps : false
    }); 
    return Plantg;
 
}