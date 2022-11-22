const productsRouter = require('./products');
const authRouter = require('./auth');
const userRouter = require('./user')

function route (app) {

    // app.use('/', siteRouter);
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
    app.use('/products',productsRouter);

}

module.exports = route