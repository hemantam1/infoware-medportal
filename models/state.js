module.exports = function(sequelize, Sequelize) {
 
    var State = sequelize.define('state', {
 
        state_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
         
        state_name: {
            type: Sequelize.TEXT,
            // allowNull: false
        },

        countryId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'country', // Can be both a string representing the table name or a Sequelize model
              key: 'country_id'
            }
          }
    }, {
        tableName : 'state',
        timestamps : false
    });
 
    return State;
 
}