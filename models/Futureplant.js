module.exports = function(sequelize, Sequelize) {
 
    var Futureplant = sequelize.define('futureplant', {
 
        fc_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        yes_or_no:{
            type: Sequelize.TEXT
        },
 
        // name: {
        //     type: Sequelize.TEXT
        // },
         
        // variety: {
        //     type: Sequelize.TEXT
        // },
         
        // area: {
        //     type: Sequelize.TEXT
        // },
         
        // seedsadd: {
        //     type: Sequelize.TEXT
        // },
         
        // buyercontact: {
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
        tableName : 'futureplant',
        timestamps : false
    });
 
    return Futureplant;
 
}