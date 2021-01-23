module.exports = function(sequelize, Sequelize) {
 
    var Lab = sequelize.define('lab', {
 
        lab_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        labname: {
            type: Sequelize.TEXT
        },
        address: {
            type: Sequelize.TEXT
        },
        mobileno: {
            type: Sequelize.BIGINT
        },
        userid: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users', // Can be both a string representing the table name or a Sequelize model
              key: 'id'
            }
          }
    }, {
        tableName : 'lab',
        timestamps : false
    });
 
    return Lab;
 
}