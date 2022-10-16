const siteRouter = require('./site');
const authRouter = require('./auth');
const userRouter = require('./user')

function route (app) {

    app.use('/', siteRouter);
    app.use('/auth', authRouter);
    app.use('/user', userRouter);

}

module.exports = route