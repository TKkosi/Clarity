import Activity from "../models/activitiesModel.js";

export const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find({userId: req.user._id});
        res.json(activities);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
};

// export const getIndividualActivity = async (req, res) => {
//     try {
//         const activity = await Activity.findById(req.params.id);
//         if (!activity) {
//             return res.status(404).json({ message: "Activity not found" });
//         }
//         res.json(activity);
//         } catch (err) {
//             res.status(500).json({ message: err.message });
//         }
// };

// export const newActivity = async (req, res) => {
//     try {
//         const activity = new Activity(req.body);
//         const newActivity = await activity.save();
//         res.json(newActivity);
//         } catch (err) {
//             res.status(500).json({ message: err.message });
//         }
// };

// export const updateActivity = async (req, res) => {
//     try {
//         const activity = await Activity.findById(req.params.id);
//         if (!activity) {
//             return res.status(404).json({ message: "Activity not found" });
//         }
//         const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(updatedActivity);
//         } catch (err) {
//             res.status(500).json({ message: err.message });
//         }
// }

// export const deleteActivity = async (req, res) => {
//     try {
//         const activity = await Activity.findById(req.params.id);
//         if (!activity) {
//             return res.status(404).json({ message: "Activity not found" });
//         }
//         await activity.remove();
//         res.json({ message: "Activity deleted" });
//         } catch (err) {
//             res.status(500).json({ message: err.message });
//         }
// }