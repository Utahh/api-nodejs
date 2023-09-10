'use strict';
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Pessoas extends Model {
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id',
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        scope: { status: 'confirmado' },
        as: 'aulasMatriculadas',
      });
    }
  }

  Pessoas.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3],
            msg: 'O campo nome deve ter mais de 3 caracteres',
          },
        },
      },
      ativo: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'Email inválido',
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      defaultScope: {
        where: { ativo: true },
      },
      modelName: 'Pessoas',
      tableName: 'Pessoas', // Nome da tabela no banco de dados (opcional)
      timestamps: true, // Se deseja incluir timestamps created_at e updated_at (opcional)
      scopes: {
        all: {},
      },
    }
  );

  return Pessoas;
};
