import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;
//DataTypes adalah fungsi dari sequelize
const User = db.define(
  'users',
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

// membuat function (asyncronus) untuk generate table user jika user tdk terdapat di db

(async () => {
  await db.sync();
})();
