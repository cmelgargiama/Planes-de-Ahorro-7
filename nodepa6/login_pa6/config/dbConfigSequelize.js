module.exports = {
        HOST:"giama-db-t3.cojfgn4yxtap.us-west-2.rds.amazonaws.com",
        USER:"christian",
        PASSWORD:"1704",
        DB:'pa7',
        dialect:"mysql",  
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          },
    }
