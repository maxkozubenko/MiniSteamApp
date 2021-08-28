const {User} = require('../models/userModel');
const {Game} = require('../models/gameModel');

const getUserGames = async (userEmail) => {
    const user = await User.findOne({email: userEmail});
    return user.games;
}

const addUserGame = async (userEmail, gameId) => {
    const game = await Game.findOne({_id: gameId}).select('-__v');
    const user = await User.findOne({userEmail});

    const isGame = false;

    user.games.forEach(userGame => {
        if(userGame._id == gameId) {
            isGame = true;
        }
    });

    if(!isGame) {
        const gameItem = Game({
            _id: gameId,
            name: game.name,
            price: game.price,
            description: game.description,
            img: game.img,
            genre: game.genre
        })

        user.games.push(gameItem);

        user.save();
    }
}

const getFriends = async (userEmail) => {
    const user = await User.findOne({email: userEmail});
    return user.friends;
};

const addFriend = async (userEmail, friendEmail) => {
    const user = await User.findOne({email: userEmail});
    const friend = await User.findOne({email: friendEmail});
    
    user.friends.push({
        email: friend.email,
        nickname: friend.nickname,
    });

    user.save();
};

const getAllUsers = async () => {
    const users = User.find();
    return users;
}

module.exports = {
    getUserGames,
    addUserGame,
    getFriends,
    addFriend,
    getAllUsers,
}