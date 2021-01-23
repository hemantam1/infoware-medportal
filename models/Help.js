module.exports = function(sequelize, Sequelize) {
 
    var Help = sequelize.define('help', {
 
        help_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        help: {
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
        tableName : 'help',
        timestamps : false
    });
 
    return Help;
 
}