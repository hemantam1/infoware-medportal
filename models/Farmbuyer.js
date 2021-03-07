module.exports = function(sequelize, Sequelize) {
 
    var Farmbuyer = sequelize.define('farmbuyer', {
 
        farmbuyer_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        yes_or_no:{
            type: Sequelize.TEXT
        },
 
        name_of_vendor: {
            type: Sequelize.TEXT
        },

        address : {
            type: Sequelize.TEXT
        },

        mobile_number: {
            type: Sequelize.BIGINT
        },

        email_id: {
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
        tableName : 'farmbuyer',
        timestamps : false
    });
 
    return Farmbuyer;
 
}