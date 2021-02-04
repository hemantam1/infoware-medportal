module.exports = function(sequelize, Sequelize) {
 
    var Membership = sequelize.define('membership', {
 
        ms_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        // username: {
        //     type: Sequelize.TEXT
        // },
         
        type: {
            type: Sequelize.TEXT
        },
         
        duration: {
            type: Sequelize.TEXT
        },
        
        amount: {
            type: Sequelize.INTEGER
        },

        userid: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users', // Can be both a string representing the table name or a Sequelize model
              key: 'id'
            }
          }
    }, {
        tableName : 'membership',
        timestamps : false
    });
 
    return Membership;
 
}