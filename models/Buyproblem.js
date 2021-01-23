module.exports = function(sequelize, Sequelize) {
 
    var Buyproblem = sequelize.define('buyproblem', {
 
        problem_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        problem: {
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
        tableName : 'buyproblem',
        timestamps : false
    });
 
    return Buyproblem;
 
}