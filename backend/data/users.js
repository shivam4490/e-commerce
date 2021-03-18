const bcrypt = require('bcryptjs')

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },

  {
    name: 'Shivam',
    email: 'shivam@example.com',
    password: bcrypt.hashSync('123456', 10),
  },

  {
    name: 'Hunter',
    email: 'hunter@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

module.exports = users
