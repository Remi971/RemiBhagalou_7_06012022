module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
        url : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        alttext: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Article;
}