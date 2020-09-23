export const gameConfig = {
    player: {
        hitMax: 10,
        hitMin: 3,
        pUrl: `https://robohash.org/${Math.random().toString(16).slice(2)}.png?set=set3&size=100x100`

    },
    monster: {
        hitMax: 10,
        hitMin: 3,
        mUrl: `https://robohash.org/${Math.random().toString(16).slice(2)}.png?set=set2&size=100x100`
    }
}