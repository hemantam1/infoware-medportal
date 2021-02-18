module.exports = function(sequelize, Sequelize) {
 
    var Taluka = sequelize.define('taluka', {
 
        taluka_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        taluka_name: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        districtId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'district', // Can be both a string representing the table name or a Sequelize model
              key: 'district_id'
            }
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
        tableName : 'taluka',
        timestamps : false
    });
 
    return Taluka;
 
}