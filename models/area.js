module.exports = function(sequelize, Sequelize) {
 
    var Area = sequelize.define('area', {
 
        area_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        area_name: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        pincode: {
            type: Sequelize.INTEGER,
        },

        talukaId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'taluka', // Can be both a string representing the table name or a Sequelize model
              key: 'taluka_id'
            }
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
        tableName : 'area',
        timestamps : false
    });
 
    return Area;
 
}