const {Game} = require('../models/gameModel');

const addGame = async (name, price, description, img, genre) => {
    const game = Game({
        name: name,
        price: price,
        description: description,
        img: img,
        genre: genre
    })

    await game.save();
};

const getGames = async () => {
    const games = await Game.find();
    return games;
};

const getGamesByTags = async (price, indie, action, adventure) => {
    const games = await Game.find({price: { $gte: price}, genre: {$in: [indie, action, adventure]}});
    return games;
}

const getGame = async (gameName) => {
    const game = await Game.find({name: gameName});
    // const game2 = await Game.aggregate([
    //     { $match: { name: gameName } },
    //     { $group: { _id: "$_id", name: '$name', desctiption: '$description', img: '$img'} }
    // ]);

    // console.log(game2);
    return game;
};

module.exports = {
    addGame,
    getGames,
    getGamesByTags,
    getGame
}