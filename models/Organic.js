module.exports = function(sequelize, Sequelize) {
 
    var Organic = sequelize.define('organic', {
 
        organic_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        name: {
            type: Sequelize.TEXT
        },
        
        regdate: {
            type: Sequelize.DATE
        },
        
        regno: {
            type: Sequelize.BIGINT
        },
        
        certificate: {
            type: Sequelize.TEXT
        },
        
        labreport: {
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
        tableName : 'organic',
        timestamps : false
    });
 
    return Organic;
 
}
