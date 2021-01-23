const User = require("./User");

module.exports = function(sequelize, Sequelize) {
 
    var Dof = sequelize.define('dof', {
 
        dof_id: {
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
        tableName : 'dateoffilling',
        timestamps : false
    });
 
    return Dof;
 
}
