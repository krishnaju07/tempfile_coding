const Sample = require('./sample.model')

const getAll = async (req, res, next) => {
    Sample.getAllModel(req, (err, val) => {
        if (err) return next(err);
        res.send(val);
    });
}


module.exports = {
    getAll,
};
