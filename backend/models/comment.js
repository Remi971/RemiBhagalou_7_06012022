module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        article_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Comment;
}