const User = require('../models/user');

exports.getUserById = async (req, res, next, id) => {
    try {
        user = await User.findById(id).exec();
        if (!user) {
            return res.status(422).json({
                message: 'User Not Found!!'
            })
        }
        req.profile = user;
        next();

    } catch (error) {
        return res.status(500).json('something went wrong');
    }
};

exports.getUser = (req, res, next) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.createdAt = undefined;
    req.profile.updatedAt = undefined;
    return res.json(req.profile);
};




