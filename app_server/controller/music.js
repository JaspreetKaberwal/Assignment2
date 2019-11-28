const homelist = function(req, res){
    res.render('index',{title:'Welcome to Music Store'});
};


const musiclist = function(req, res){
    res.render('list-display',{songs:musicArray,title:"Music list"});
};

var musicArray = [
    {
        x: "Star Boy",
        genre: "Pop"
    },
    {
        x: "In the end",
        genre: "Rock"
    },
    {
        x: "Not Afraid",
        genre: "Hio Hop"
    }
];


module.exports = {
    homelist,
    
    musiclist};