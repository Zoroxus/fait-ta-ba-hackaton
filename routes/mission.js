const express = require('express');
const router = express.Router();

const missionController = require('../controllers/mission');

router.get('/', missionController.getAllCardsMission);
router.get('/:id', missionController.getOneMission);
router.get('/date/:id', missionController.getOneMissionDate);
router.get('/hour/:id', missionController.getOneMissionHour);

router.delete('/:id', missionController.deleteMission);
router.post('/', missionController.createMission);
router.put('/:id', missionController.modifyMission)

module.exports = router;