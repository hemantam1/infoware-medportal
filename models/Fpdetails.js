module.exports = function(sequelize, Sequelize) {
 
    var Fpdetails = sequelize.define('fpdetails', {
 
        farmerpID: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        name: {
            type: Sequelize.TEXT,
            allowNull: false
        },
 
        surname : {
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

        pin : {
            type: Sequelize.TEXT
        },

        email : {
            type: Sequelize.TEXT
        },

        phoneno : {
            type : Sequelize.BIGINT,
            allowNull: false
        },

        altphoneno : {
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
        landrevenuerno : {
            type : Sequelize.BIGINT
        },
        vill : {
            type : Sequelize.TEXT
        },
        talu : {
            type : Sequelize.TEXT
        },
        dist : {
            type : Sequelize.TEXT
        },
        surveyno : {
            type : Sequelize.BIGINT
        },
        area : {
            type : Sequelize.TEXT
        },
        userid: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users', // Can be both a string representing the table name or a Sequelize model
              key: 'id'
            }
          }
    }, {
        tableName : 'farmerPDetails',
        timestamps : false
    }); 
    return Fpdetails;
 
}