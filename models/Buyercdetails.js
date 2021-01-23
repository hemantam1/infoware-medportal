module.exports = function(sequelize, Sequelize) {
 
    var Buyercdetails = sequelize.define('buyercdetails', {
 
        buyercID: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        nameofcomp: {
            type: Sequelize.TEXT
        },
 
        nameofhead : {
            type: Sequelize.TEXT
        },

        address : {
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
        gstin : {
            type : Sequelize.BIGINT
        },
        cin : {
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
        tableName : 'buyerCDetails',
        timestamps : false
    }); 
    return Buyercdetails;
 
} 