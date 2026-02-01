require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/user');

const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
    User.findOne({ username: req.body.username })
        .then(user => {
            if (!user) {
                return res.status(401).json({ type: 'error' ,error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ type:'error' ,error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        type: 'ok',
                        token: jwt.sign(
                            { userId: user._id },
                            process.env.TOKEN,
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({type:'error', error }));
        })
        .catch(error => res.status(500).json({type:'error', error }));
};

exports.getAllCardsUser = (req, res, next) => {
    User.find()
    .then((cardsUser) => {res.status(200).json(cardsUser); console.log(cardsUser)})
    .catch((error) => res.status(400).json({error: error}));
};


exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id})
        .then((oneUser) => { res.status(200).json(oneUser);})
        .catch((error) => res.status(404).json({error: error}));
};

exports.createUser = (req, res, next) => {

    const userObject = {...req.body };
    delete userObject._id;
    userObject.password = bcrypt.userObject.password;
    const user = new User({
        ...userObject,
        /*userId: req.auth.userId,*/
    });

    user.save()
    .then(() => { res.status(201).json({message: 'User enregistrée!' , _id: user._id})})
    .catch(error => { res.status(400).json( { error })})
};
