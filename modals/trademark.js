const mongoose = require("mongoose");

const trademarkSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, sparse: true },
    trademarkId: { type: String, unique: true },
    fileDate: Date,
    status: { type: String, default: "Register" },
    applicationOwner: {
        ownerType: { type: String, sparse: true },
        licenseNo: { type: String, sparse: true },
        nameOfLawPractice: { type: String, sparse: true },
        licenseFile: Buffer
    },
    classificationClass: { type: Number, sparse: true },
    detailsOfGoods: { type: String, sparse: true },
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
    logoDetails: {
        logoDescrpiption: { type: String, sparse: true },
        domainName: { type: String, sparse: true },
        colorClaimed: { type: String, sparse: true },
        logoFile: Buffer
    }
});

const Trademark = mongoose.model('Trademark', trademarkSchema);
module.exports = Trademark;