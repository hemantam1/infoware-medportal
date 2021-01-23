module.exports = function(sequelize, Sequelize) {
 
    var Test = sequelize.define('test', {
 
        test_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        test: {
            type: Sequelize.TEXT
        },
        other: {
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
        tableName : 'test',
        timestamps : false
    });
 
    return Test;
 
}