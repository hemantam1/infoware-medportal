module.exports = function(sequelize, Sequelize) {
 
    var District = sequelize.define('district', {
 
        district_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        district_name: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        stateId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'state', // Can be both a string representing the table name or a Sequelize model
              key: 'state_id'
            }
        },
        
        countryId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'country', // Can be both a string representing the table name or a Sequelize model
              key: 'country_id'
            }
        }
 
    }, {
        tableName : 'district',
        timestamps : false
    });
 
    return District;
 
}