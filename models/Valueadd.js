module.exports = function(sequelize, Sequelize) {
 
    var Valueadd = sequelize.define('valueadd', {
 
        valueadd_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        yes_or_no:{
            type: Sequelize.TEXT
        },
        // va: {
        //     type: Sequelize.TEXT
        // },
        // other: {
        //     type: Sequelize.TEXT
        // },
        list_of_all_records_entered_by_farmer : {
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
        tableName : 'valueadd',
        timestamps : false
    });
 
    return Valueadd;
 
}