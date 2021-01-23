module.exports = function(sequelize, Sequelize) {
 
    var Providetest = sequelize.define('providetest', {
 
        ptest_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        ptest: {
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
        tableName : 'providetest',
        timestamps : false
    });
 
    return Providetest;
 
}