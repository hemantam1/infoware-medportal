module.exports = function(sequelize, Sequelize) {
 
    var Providetest = sequelize.define('providetest', {
 
        ptest_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        yes_or_no:{
            type: Sequelize.TEXT
        },

        list_of_all_records_entered_by_buyer : {
            type: Sequelize.JSON,
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