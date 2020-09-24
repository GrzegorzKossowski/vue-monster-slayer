import { monsterName } from './monster-names'

export const defaultState = {
    data: {
        monster: {
            health: 100,
            name: monsterName()
        },
        player: {
            health: 100
        },
        currentRound: 0,
        specialCharge: 0
    }
};
