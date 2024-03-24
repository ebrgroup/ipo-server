const Design = require("../modals/design.js");
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const insertDesign = async (req, res) => {
    try {

        req.body.applicationOwner = JSON.parse(req.body.applicationOwner);
        req.body.ownerDetails = JSON.parse(req.body.ownerDetails);
        req.body.attachmentDetails = JSON.parse(req.body.attachmentDetails);
        const cleanedData = removeEmptyFields(req.body);

        const attachmentImagePath = req.files['attachmentFile'][0].filename;

        if(req.files['licenseFile'] && req.files['licenseFile'][0]) {
            const licenseFilePath = req.files['licenseFile'][0].filename;
            cleanedData.applicationOwner.licenseFile = licenseFilePath;
        }

        cleanedData.attachmentDetails.attachmentFile = attachmentImagePath;

        const newDesign = new Design(cleanedData);
        await newDesign.save();

        res.status(201).json({ message: 'Design created successfully!', design: newDesign });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Failed to create design.' });
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

const searchDesign = async (req, res) => {
    try {
        const { name } = req.params;
        const response = await Design.find({ productName: { $regex: name, $options: 'i' }, 'status': 'Register' }, {
            designId: 1, productName: 1,
            fileDate: 1, 'attachmentDetails.attachmentFile': 1, 'attachmentDetails.isRepeated': 1, status: 1, _id: 0
        });
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: `An error has occurred while retrieving the design data.` });
    }

};

const trackDesign = async (req, res) => {
    try {

        let id = req.params.id;
        id = '#' + id;
        const response = await Design.find({ designId: id }, {
            designId: 1, productName: 1,
            fileDate: 1, 'attachmentDetails.attachmentFile': 1, 'attachmentDetails.isRepeated': 1, status: 1, _id: 0
        });

        res.status(200).json({ response });
    }

    catch (error) {
        res.status(500).json({ error: `An error has occurred while retrieving the design data.` });
    }
};

module.exports = {
    insertDesign,
    searchDesign,
    trackDesign,
}
