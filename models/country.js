module.exports = function(sequelize, Sequelize) {
 
    var Country = sequelize.define('country', {
 
        country_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
         
        country_name: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        
    }, {
        tableName : 'country',
        timestamps : false
    });
 
    return Country;
 
}