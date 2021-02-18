module.exports = function(sequelize, Sequelize) {
 
    var PinCode = sequelize.define('pincode', {
 
        pincode_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        pincode_no: {
            type: Sequelize.BIGINT,
            allowNull: false
        },

        areaId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'area', // Can be both a string representing the table name or a Sequelize model
              key: 'area_id'
            }
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
        tableName : 'pincode',
        timestamps : false
    });
 
    return PinCode;
 
}