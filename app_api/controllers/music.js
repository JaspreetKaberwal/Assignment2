const getMusics = (req, res) => {
res
.status(200)
.json({"status" : "success"});
};

const createMusic = (req, res) => {
res
.status(200)
.json({"status" : "CreateMusic"});
};

const getSingleMusic = (req, res) => {
res
.status(200)
.json({"status" : "GetsingleMusic"});
};

const updateMusic = (req, res) => {
res
.status(200)
.json({"status" : "updateMusic"});
};

const deleteMusic = (req, res) => {
res
.status(200)
.json({"status" : "DeleteMusic"});
};


module.exports = {
getMusics,
createMusic,
getSingleMusic,
updateMusic,
deleteMusic
};