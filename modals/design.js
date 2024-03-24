const mongoose = require("mongoose");

const designSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, sparse: true },
    designId: { type: String, unique: true },
    fileDate: {type:String},
    status: { type: String, default: "Pending" },
    applicationOwner: {
        ownerType: { type: String, sparse: true },
        licenseNo: { type: String, sparse: true },
        nameOfLawPractice: { type: String, sparse: true },
        licenseFile: String
    },
    productName: { type: String, sparse: true },
    detailsOfProduct: { type: String, sparse: true },
    ownerDetails: {
        businessName: { type: String, sparse: true },
        businessAddress: { type: String, sparse: true },
        soleProprieterShip: {
            province: { type: String, sparse: true },
            city: { type: String, sparse: true }
        },
        partnerShipFirm: [],
        companies: {
            companyType: { type: String, sparse: true },
            companyName: { type: String, sparse: true },
            otherBusinessDescription: { type: String, sparse: true }
        }
    },
    attachmentDetails: {
        isRepeated: { type: Boolean, sparse: true },
        attachmentFile: String
    }
});

const Design = mongoose.model('Design', designSchema);
module.exports = Design;