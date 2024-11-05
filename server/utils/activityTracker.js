import Activity from "../models/activitiesModel.js"

const activityTracker = async(description, date, userId) => {
    try {
        await Activity.create({description, date, userId})
        console.log("activity tracked");
    } catch (error) {
        console.log(error);
    }
}

export default activityTracker