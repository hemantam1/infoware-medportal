module.exports = function(sequelize, Sequelize) {
 
    var Buyerpdetails = sequelize.define('buyerpdetails', {
 
        buyerpID: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        name: {
            type: Sequelize.TEXT
        },
 
        surname : {
            type: Sequelize.TEXT
        },
        profession : {
            type: Sequelize.TEXT
        },
        fhname : {
            type: Sequelize.TEXT
        },

        hno : {
            type: Sequelize.TEXT
        },

        village : {
            type: Sequelize.TEXT
        },

        taluka : {
            type: Sequelize.TEXT
        },
        district : {
            type: Sequelize.TEXT
        },
        pin : {
            type: Sequelize.TEXT
        },

        email : {
            type: Sequelize.TEXT
        },

        phoneno : {
            type : Sequelize.BIGINT
        },

        mobileno : {
            type : Sequelize.BIGINT
        },

        whatphoneno : {
            type : Sequelize.BIGINT
        },
        telegphoneno : {
            type : Sequelize.BIGINT
        },
        aadharno : {
            type : Sequelize.BIGINT
        },
        userid: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users', // Can be both a string representing the table name or a Sequelize model
              key: 'id'
            }
          }
    }, {
        tableName : 'buyerPDetails',
        timestamps : false
    }); 
    return Buyerpdetails;
 
}