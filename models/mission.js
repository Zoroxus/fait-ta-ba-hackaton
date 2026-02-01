const mongoose = require('mongoose');
const MongooseErrors = require('mongoose-errors');
mongoose.set('debug', true);

const missionSchema = mongoose.Schema({

    createur: { type: String, required: true },
    client: { type: String, required: true },
    titre: { type: String, required: true},
    categorie: { type: String, required: true},
    date: { type: String, required: true},
    heure: { type: String, required: true},
    duree: { type: Number, required: true},
    description: { type: String, required: true },
    vehicule: { type: Boolean, required: true},
    place: { type: String, required: true},
    volunteers: { type: String, required: false},
    code: { type: String, required: true, unique: true},
    confirmed : [{ type: String }]

})

missionSchema.plugin(MongooseErrors);

module.exports = mongoose.model('mission', missionSchema, "mission");