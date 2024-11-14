import Team from '../models/teamModel.js';
import activityTracker from '../utils/activityTracker.js';

export const getAllTeams = async (req, res) => {
    const allTeams = await Team.find({ user: req.user._id });
    res.status(200).json(allTeams);
};

export const createTeam = async (req, res) => {
    try {
        const { name, role, members } = req.body;
        if (!name || !role || !members) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newTeam = await Team.create({
            name,
            role,
            members,
            user: req.user._id,
        });
        activityTracker(`created team "${newTeam.name}"`, new Date(), req.user._id);
        res.status(201).json({ message: 'Team created' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTeam = async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        const { name, role, members } = req.body;
        team.name = name || team.name;
        team.role = role || team.role;
        team.members = members || team.members;
        await team.save();
        res.status(200).json({ message: 'Team updated' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteTeam = async (req, res) => {
    const team = await Team.findById(req.params.id);
    if (!team) {
        return res.status(404).json({ message: 'Team not found' });
    }   
    activityTracker(`deleted team "${team.name}"`, new Date(), req.user._id);       
    await Team.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Team deleted' });
};

export const getIndividualTeam = async (req, res) => {
    const team = await Team.findById(req.params.id);
    if (!team) {
        return res.status(404).json({ message: 'Team not found' });
    }
    res.status(200).json(team);
};
