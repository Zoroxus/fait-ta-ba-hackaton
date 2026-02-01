const Mission = require('../models/mission');

exports.getAllCardsMission = (req, res, next) => {
    Mission.find()
    .then((cardsMission) => {res.status(200).json(cardsMission); console.log(cardsMission)})
    .catch((error) => res.status(400).json({error: error}));
};


exports.getOneMission = (req, res, next) => {
    Mission.findOne({ _id: req.params.id})
        .then((oneMission) => { res.status(200).json(oneMission);})
        .catch((error) => res.status(404).json({error: error}));
};

exports.getOneMissionDate = (req, res, next) => {
    Mission.findOne({ _id: req.params.id})
        .then((oneMission) => { res.status(200).json(oneMission.date);})
        .catch((error) => res.status(404).json({error: error}));
};

exports.getOneMissionHour = (req, res, next) => {
    Mission.findOne({ _id: req.params.id})
        .then((oneMission) => { res.status(200).json(oneMission.heure);})
        .catch((error) => res.status(404).json({error: error}));
};



exports.createMission = (req, res, next) => {

    const missionObject = {...req.body };
    delete missionObject._id;
    const mission = new Mission({
        ...missionObject,
        /*userId: req.auth.userId,*/
    });

    mission.save()
    .then(() => { res.status(201).json({message: 'Mission enregistrée!' , _id: mission._id})})
    .catch(error => { res.status(400).json( { error })})
};


exports.modifyMission = (req, res, next) => {
    const missionObject = req.file ? {
        ...JSON.parse(req.body.mission),
    } : { ...req.body };

    delete missionObject._userId;
    Mission.findOne({_id: req.params.id})
        .then((mission) => {
            /*if (mission.userId != req.auth.userId) {
                res.status(403).json({ message : 'unauthorized request.'});
            } else {*/
                Mission.updateOne({ _id: req.params.id}, { ...missionObject, _id: req.params.id})
                .then(() => res.status(200).json({message : 'Mission modifiée!'}))
                .catch(error => res.status(401).json({ error }));
            /*}*/
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};


exports.deleteMission = (req, res, next) => {

    Mission.findOne({ _id: req.params.id })
        .then(OneMission => {

            Mission.deleteOne({ _id: req.params.id })
                .then(() => { res.status(200).json({ message: 'Mission supprimée!' }) })
                .catch(error => res.status(401).json({ error }));

        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

