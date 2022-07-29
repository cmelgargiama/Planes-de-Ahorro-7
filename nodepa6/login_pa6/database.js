const Sequelize = require("sequelize")

const sequelize = new Sequelize('pa7', 'admin', 'juan1720',{
    host: 'giama-db-t3.cojfgn4yxtap.us-west-2.rds.amazonaws.com',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('DB connected')
})
.catch(err => {
    console.log('DB ERROR: ', err)
})

const db = {}

//db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = {db, sequelize}