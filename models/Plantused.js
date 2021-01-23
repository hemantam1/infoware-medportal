module.exports = function(sequelize, Sequelize) {
 
    var Plantused = sequelize.define('plantused', {
 
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

        part : {
            type: Sequelize.TEXT
        },

        form : {
            type: Sequelize.DATE
        },

        consump : {
            type: Sequelize.BIGINT
        },

        endapp : {
            type: Sequelize.TEXT
        },

        stateofsup : {
            type: Sequelize.TEXT
        },
        organic : {
            type: Sequelize.TEXT
        },
        rate : {
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
        tableName : 'plantused',
        timestamps : false
    }); 
    return Plantused;
 
}
