module.exports = function(sequelize, Sequelize) {
 
    var Buyerdof = sequelize.define('buyerdof', {
 
        bdof_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        date: {
            type: Sequelize.DATE
        },
        userid: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users', // Can be both a string representing the table name or a Sequelize model
              key: 'id'
            }
          }
    }, {
        tableName : 'buyerdof',
        timestamps : false
    });
 
    return Buyerdof;
 
}