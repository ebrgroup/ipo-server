// Import IP Modals
//Than replace Model_Name with actual model

const searchIP = async (req, res, IPType) => {
    try {
        const name = req.body;
        const Registered_IP = await Model_Name.find({ IPName: name });
        res.status(200).json({ [IPType]: Registered_IP });
    }
    catch (error) {
        res.status(500).json({ error: `An error has occurred while retrieving the ${IPType} data.` });
    }
};

const searchTrademarkByName = async (req, res) => {
    await searchIP(req, res, 'Trademark');
};

const searchPatentByName = async (req, res) => {
    await searchIP(req, res, 'Patent');
};

const searchDesignByName = async (req, res) => {
    await searchIP(req, res, 'Design');
};

const searchCopyrightByName = async (req, res) => {
    await searchIP(req, res, 'Copyright');
};

const getIPByUserId = async (req, res) => {
    try {
        const { user_ID } = req.params.id;

        const user_IP = await Model_Name.find({ _id: user_ID });

        if (!user_IP) {
            return res.status(404).json({ error: "Not registered any yet!" });
        }

        res.status(200).json({ user_IP });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching registerd IP by name." });
    }
};

module.exports = {
    searchTrademarkByName,
    searchDesignByName,
    searchPatentByName,
    searchCopyrightByName,
    getIPByUserId
}

