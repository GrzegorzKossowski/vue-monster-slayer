import { createStore } from "vuex";
import { gameConfig } from "../config/config";
import { monsterName } from "./monster-names";
import { uuid } from "../utils/utils"

export default createStore({
  state() {
    return {
      data: {
        monster: {
          health: 100,
          name: monsterName()
        },
        player: {
          health: 100,
          name: "Player"
        },
        currentRound: 0,
        specialCharge: 0,
        history: []
      }
    }
  },
  getters: {
    getMonsterHealth: state => {
      return state.data.monster.health;
    },
    getMonsterName: state => {
      return state.data.monster.name;
    },
    getPlayerHealth: state => {
      return state.data.player.health;
    },
    getPlayerName: state => {
      return state.data.player.name;
    },
    getCurrentRound: state => {
      return state.data.currentRound;
    },
    getSpecialCharge: state => {
      return state.data.specialCharge;
    },
    getFightHistory: state => {
      return state.data.history;
    }
  },
  mutations: {
    RESET_GAME: (state) => {
      state.data = {
        monster: {
          health: 100,
          name: monsterName()
        },
        player: {
          health: 100
        },
        currentRound: 0,
        specialCharge: 0,
        history: []
      }
    },
    HIT_MONSTER: (state, payload) => {
      state.data.specialCharge++;
      if (payload.hitPoints < state.data.monster.health) {
        state.data.monster.health -= payload.hitPoints;
      } else {
        state.data.monster.health = 0;
      }
      if (state.data.history.length >= 5) {
        state.data.history.pop();
      }
      state.data.history.unshift({
        id: uuid(),
        type: "monster",
        damage: payload.hitPoints
      });
    },
    HIT_PLAYER: (state, payload) => {
      if (payload.hitPoints < state.data.player.health) {
        state.data.player.health -= payload.hitPoints;
      } else {
        state.data.player.health = 0;
      }
      if (state.data.history.length >= 10) {
        state.data.history.pop();
      }

      state.data.history.unshift({
        id: uuid(),
        type: "player",
        damage: payload.hitPoints
      });
    },
    HEAL_PLAYER: state => {
      if (state.data.player.health <= 90) {
        state.data.player.health += 3;
      }
    },
    NEXT_ROUND: state => {
      state.data.currentRound += 1;
    },
    RESET_CHARGE: state => {
      state.data.specialCharge = 0;
    },
    SET_PLAYER_NAME: (state, payload) => {
      state.data.player.name = payload;
    }
  },
  actions: {
    setPlayerName: (context, payload) => {
      context.commit("SET_PLAYER_NAME", payload);
    },
    resetGame: context => {
      context.commit("RESET_GAME");
    },
    hitMonster: context => {
      let max = gameConfig.player.hitMax;
      let min = gameConfig.player.hitMin;
      let hitPoints = Math.floor(Math.random() * (max - min + 1)) + min;
      context.commit("HIT_MONSTER", { hitPoints: hitPoints });
    },
    hitMonsterSpecial: context => {
      let max = gameConfig.player.hitMax * 2;
      let min = gameConfig.player.hitMin * 2;
      let hitPoints = Math.floor(Math.random() * (max - min + 1)) + min;
      context.commit("HIT_MONSTER", { hitPoints: hitPoints });
    },
    hitPlayer: context => {
      let max = gameConfig.monster.hitMax;
      let min = gameConfig.monster.hitMin;
      let hitPoints = Math.floor(Math.random() * (max - min + 1)) + min;
      context.commit("HIT_PLAYER", { hitPoints: hitPoints });
    },
    healPlayer: context => {
      context.commit("HEAL_PLAYER");
    },
    nextRound: context => {
      context.commit("NEXT_ROUND");
    },
    resetSpecialCharge: context => {
      context.commit("RESET_CHARGE");
    }
  }
});
