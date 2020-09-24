<template>
  <EndGame v-if="endGame" @reset-game="resetGame" :winner="winner" />
  <Header />
  <div class="n-container">
    <BasicInput />
  </div>
  <div class="n-container">
    <HealthCard
      :creature="{
        name: 'Monster ' + getMonsterName + '\'s',
        health: getMonsterHealth
      }"
    />
  </div>
  <div class="n-container">
    <HealthCard
      :creature="{
        name: getPlayerName + '\'s',
        health: getPlayerHealth
      }"
    />
  </div>
  <div class="n-container">
    <BasicButton @click="hitMonster" label="Attack">
      <svg
        style="margin-left: 10px"
        height="1em"
        width="1em"
        viewBox="0 0 4 4 "
        fill="currentColor"
      >
        <g transform="translate(0,-292.76667)">
          <path
            d="m 2.2045503,292.81427 a 0.1204124,0.17271454 43.736638 0 0 -0.1601415,0.0996 0.1204124,0.17271454 43.736638 0 0 -0.026553,0.0544 c -0.2041528,0.0179 -0.3562239,0.0957 -0.470469,0.21334 a 0.21451091,0.0950655 21.806094 0 0 -0.047295,-0.0283 0.21451091,0.0950655 21.806094 0 0 -0.1875237,-0.0493 0.21451091,0.0950655 21.806094 0 0 -0.076338,0.022 0.21451091,0.0950655 21.806094 0 0 0.1103559,0.16581 0.21451091,0.0950655 21.806094 0 0 0.089612,0.0351 c -0.075997,0.12861 -0.1254826,0.28323 -0.1526753,0.45556 a 0.11626376,0.27366944 82.31706 0 0 -0.1120161,0.0232 0.11626376,0.27366944 82.31706 0 0 -0.1319311,0.17034 0.11626376,0.27366944 82.31706 0 0 0.2215437,0.0424 c -0.032215,0.58191 0.1097099,1.27418 0.210757,1.72433 0.081819,0.36448 0.4306942,0.98663 0.761712,0.9762 0.4232766,-0.0126 -0.2701537,-0.91372 -0.2904132,-1.37743 -0.015906,-0.36391 0.2819874,-0.86721 0.5028295,-1.31971 a 0.22183906,0.10643963 15.907731 0 0 0.00166,5.7e-4 0.22183906,0.10643963 15.907731 0 0 0.2771372,-0.004 0.22183906,0.10643963 15.907731 0 0 -0.1261226,-0.16809 0.22183906,0.10643963 15.907731 0 0 -0.064721,-0.0209 c 0.079693,-0.18256 0.1360869,-0.35138 0.1360793,-0.48952 a 0.09502199,0.26579633 79.512545 0 0 0.082146,-0.012 0.09502199,0.26579633 79.512545 0 0 0.2323304,-0.14318 0.09502199,0.26579633 79.512545 0 0 -0.1609725,-0.0532 0.09502199,0.26579633 79.512545 0 0 -0.1277813,0.0142 0.09502199,0.26579633 79.512545 0 0 -0.063061,0.0158 c -0.052042,-0.0934 -0.1629132,-0.15537 -0.3418575,-0.18222 a 0.1204124,0.17271454 43.736638 0 0 -0.038997,-0.15563 0.1204124,0.17271454 43.736638 0 0 -0.047295,-0.009 z m -0.00166,0.455 a 0.21036646,0.10941663 9.719859 0 1 0.09708,0.0118 0.21036646,0.10941663 9.719859 0 1 0.153504,0.15279 0.21036646,0.10941663 9.719859 0 1 -0.2505851,0.0504 0.21036646,0.10941663 9.719859 0 1 -0.1543332,-0.15223 0.21036646,0.10941663 9.719859 0 1 0.1543332,-0.0628 z m -0.4928723,0.29709 a 0.110016,0.21462756 69.57508 0 1 0.09708,0.0271 0.110016,0.21462756 69.57508 0 1 -0.090444,0.17883 0.110016,0.21462756 69.57508 0 1 -0.2746478,0.022 0.110016,0.21462756 69.57508 0 1 0.089613,-0.17883 0.110016,0.21462756 69.57508 0 1 0.1783967,-0.0493 z"
          />
        </g>
      </svg>
    </BasicButton>
    <BasicButton
      @click="hitMonsterSpecial"
      label="Special"
      :disabled="isSpecialActive"
    >
      <FistIcon />
    </BasicButton>
    <BasicButton @click="healPlayer" label="Heal" :disabled="isSpecialActive">
      <HeartIcon />
    </BasicButton>
  </div>
  <div class="n-container">
    <FightHistory />
  </div>
  <div></div>
</template>

<script>
import Header from "../components/Header";
import HealthCard from "../components/HealthCard";
import BasicButton from "../components/BasicButton";
import { gameConfig } from "../config/config";
import EndGame from "../components/EndGame";
import HeartIcon from "../components/icons/HeartIcon";
import FistIcon from "../components/icons/FistIcon";
import FightHistory from "../components/FightHistory";
import BasicInput from "../components/BasicInput";

export default {
  data() {
    return {
      disabledSpecial: false,
      endGame: false,
      winner: {}
    };
  },
  components: {
    BasicButton,
    BasicInput,
    EndGame,
    Header,
    HealthCard,
    HeartIcon,
    FistIcon,
    FightHistory
  },
  methods: {
    hitMonster() {
      this.$store.dispatch("hitMonster");
      this.hitPlayer();
    },
    hitMonsterSpecial() {
      this.$store.dispatch("hitMonsterSpecial");
      this.$store.dispatch("resetSpecialCharge");
      this.hitPlayer();
    },
    hitPlayer() {
      this.$store.dispatch("hitPlayer");
      this.setNextRound();
      let mh = this.getMonsterHealth;
      let ph = this.getPlayerHealth;
      if (ph <= 0) {
        // Player loose
        this.winner = {
          type: "monster"
        };
        this.endGame = true;
      }
      if (mh <= 0 && ph > 0) {
        this.winner = {
          type: "player"
        };
        this.endGame = true;
      }
    },
    healPlayer() {
      this.$store.dispatch("healPlayer");
      this.$store.dispatch("resetSpecialCharge");
    },
    setNextRound() {
      this.$store.dispatch("nextRound");
    },
    resetGame() {
      this.$store.dispatch("resetGame");
      this.endGame = false;
      this.winner = {};
    }
  },
  computed: {
    getMonsterHealth() {
      return this.$store.getters.getMonsterHealth;
    },
    getMonsterName() {
      return this.$store.getters.getMonsterName;
    },
    getMonsterUrl() {
      return gameConfig.monster.mUrl;
    },
    getPlayerHealth() {
      return this.$store.getters.getPlayerHealth;
    },
    getPlayerName() {
      return this.$store.getters.getPlayerName || "Player";
    },
    getPlayerUrl() {
      return gameConfig.player.pUrl;
    },
    isSpecialActive() {
      let charge = this.$store.getters.getSpecialCharge;
      if (charge < 3) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>