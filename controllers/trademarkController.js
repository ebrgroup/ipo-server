const Trademark = require("../modals/trademark.js");

const insertTradeMark = async (req, res) => {
    try {
        const cleanedData = removeEmptyFields(req.body);
        const newTrademark = new Trademark(cleanedData);
        await newTrademark.save();
        res.status(201).json({ message: 'Trademark created successfully', trademark: newTrademark });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create trademark' });
    }
};

const removeEmptyFields = (obj) => {
    const cleanedObj = {};
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            const cleanedSubObj = removeEmptyFields(obj[key]);
            if (Object.keys(cleanedSubObj).length !== 0) {
                cleanedObj[key] = cleanedSubObj;
            }
        } else if (obj[key] !== undefined && obj[key] !== '') {
            cleanedObj[key] = obj[key];
        }
    }
    return cleanedObj;
};

module.exports = { insertTradeMark };

module.exports = {
    insertTradeMark
}