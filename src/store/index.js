import { createStore } from "vuex";
import { gameConfig } from "../config/config"

export default createStore({
  state() {
    return {
      monster: {
        health: 100
      },
      player: {
        health: 100
      },
      currentRound: 0,
      specialCharge: 0
    };
  },
  getters: {
    getMonsterHealth: state => {
      return state.monster.health;
    },
    getPlayerHealth: state => {
      return state.player.health;
    },
    getCurrentRound: state => {
      return state.currentRound;
    },
    getSpecialCharge: state => {
      return state.specialCharge;
    }
  },
  mutations: {
    HIT_MONSTER: (state, payload) => {
      state.specialCharge++;
      if (payload.hitPoints < state.monster.health) {
        state.monster.health -= payload.hitPoints;
      } else {
        state.monster.health = 0;
      }
    },
    HIT_PLAYER: (state, payload) => {
      if (payload.hitPoints < state.player.health) {
        state.player.health -= payload.hitPoints;
      } else {
        state.player.health = 0;
      }
    },
    HEAL_PLAYER: state => {
      if (state.player.health <= 90) {
        state.player.health += 3;
      }
    },
    NEXT_ROUND: state => {
      state.currentRound += 1;
    },
    RESET_CHARGE: state => {
      state.specialCharge = 0;
    }
  },
  actions: {
    hitMonster: (context) => {
      let max = gameConfig.player.hitMax;
      let min = gameConfig.player.hitMin;
      let hitPoints = Math.floor(Math.random() * (max - min + 1)) + min;
      context.commit('HIT_MONSTER', { hitPoints: hitPoints });
    },
    hitMonsterSpecial: (context) => {
      let max = gameConfig.player.hitMax * 2;
      let min = gameConfig.player.hitMin * 2;
      let hitPoints = Math.floor(Math.random() * (max - min + 1)) + min;
      context.commit('HIT_MONSTER', { hitPoints: hitPoints });
    },
    hitPlayer: (context) => {
      let max = gameConfig.monster.hitMax;
      let min = gameConfig.monster.hitMin;
      let hitPoints = Math.floor(Math.random() * (max - min + 1)) + min;
      context.commit('HIT_PLAYER', { hitPoints: hitPoints });
    },
    healPlayer: context => {
      context.commit("HEAL_PLAYER");
    },
    nextRound: (context) => {
      context.commit('NEXT_ROUND');
    },
    resetSpecialCharge: context => {
      context.commit("RESET_CHARGE");
    }
  }
});
