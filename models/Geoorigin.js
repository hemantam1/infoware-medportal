module.exports = function(sequelize, Sequelize) {
 
    var Geoorigin = sequelize.define('geoorigin', {
 
        geo_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        pname: {
            type: Sequelize.TEXT
        },
         
        tribal: {
            type: Sequelize.TEXT
        }, 
        farmer: {
            type: Sequelize.TEXT
        }, 
        state: {
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
        tableName : 'geoorigin',
        timestamps : false
    });
 
    return Geoorigin;
 
}