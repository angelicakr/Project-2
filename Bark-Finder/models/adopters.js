module.export = function (sequelize, DataTypes) {
        var Adopters = sequelize.define("Adopters", {
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: [1, 50]
                    }
                },
        });