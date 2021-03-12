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

        basic_qualification:{
            type: Sequelize.TEXT
        },

        address_society_street_house_number:{
            type: Sequelize.TEXT
        },

        village:{
            type: Sequelize.TEXT
        },

        taluka:{
            type: Sequelize.TEXT
        },

        district:{
            type: Sequelize.TEXT
        },

        pin:{
            type : Sequelize.BIGINT
        },

        phone : {
            type : Sequelize.BIGINT
        },

        mobile : {
            type : Sequelize.BIGINT
        },

        whatsapp : {
            type : Sequelize.BIGINT
        },

        telegram : {
            type : Sequelize.BIGINT
        },

        email_id:{
            type: Sequelize.TEXT
        },

        aadhar_no : {
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