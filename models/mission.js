const mongoose = require('mongoose');
const MongooseErrors = require('mongoose-errors');
mongoose.set('debug', true);

const placeSchema = new mongoose.Schema(
  {
    libre: { type: Number, required: true },
    total: { type: Number, required: true }
  },
  { _id: false }
);

const creneauSchema = new mongoose.Schema({
  date: { type: String, required: true },
  heure: { type: Number, required: true },
  place: { type: placeSchema, required: true }
});

const utilisateurSchema = new mongoose.Schema(
  {
    avatar: String,
    localisation: String,
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    naissance: String,
    interet: [String],
    description: String,
    animal: [String]
  },
  { _id: false }
);

const missionSchema = mongoose.Schema({

    createur: { type: String, required: true },
    client: { type: String, required: true },
    titre: { type: String, required: true},
    categorie: { type: String, required: true},
    date: { type: String, required: true},
    heure: { type: String, required: true},
    duree: { type: Number, required: true},
    description: String,
    vehicule: { type: Boolean, required: true},
    place: { type: String, required: true},
    code: { type: String, required: true},
    confirmed : [{ type: String }],
    status : { type: Number, required: false},
    points : { type: Number, required : false},
    utilisateur: {
        type: utilisateurSchema,
        required: true
    },
    creneaux: {
        type: [creneauSchema],
        required: true
    }

})

missionSchema.plugin(MongooseErrors);

module.exports = mongoose.model('mission', missionSchema, "mission");