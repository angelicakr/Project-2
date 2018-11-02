module.export = function (sequelize, DataTypes) {
    var Dogs = sequelize.define("Dogs", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        other_dogs: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cats: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        exercise: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        special: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        age: {
            type: DataTypes.INTERGER,
            allowNull: false,

        },
        children: {
            type: DataTypes.INTEGER,
            allowNull: true,

        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        fur: {
            type: DataTypes.NUMERIC,
            allowNull: false,

        },
        food: {
            type: DataTypes.NUMERIC,
            allowNull: false,

        },
        protective: {
            type: DataTypes.NUMERIC,
            allowNull: false,

        },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false,

        },
        experience: {
            type: DataTypes.BOOLEAN,
            allowNull: false,

        },
    });

 
    Dogs.associate = function(models) {
        Dogs.belongsTo(models.adopters, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Dogs;
};