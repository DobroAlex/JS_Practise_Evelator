<template>
  <div>
    <div class="buttonsPanel">
      <button type="button" class="button">1</button>
      <br>
      <button type="button" class="button">2</button>
      <br>
      <button type="button" class="button">3</button>
      <br>
      <button type="button" class="button">4</button>
      <br>
      <button type="button" class="button">5</button>
      <br>
      <label class="currentFloor">{{cureentFloor}}</label>
      <br>
      <label class="movementState"> {{currentStateToStr()}} </label>
    </div>
  </div>
</template>

<script>
import {elevatorStates} from '../classes/elevator_states_enum.js'

export default {
  name: 'ElevatorPage',
  data () {
    return {
      cureentFloor: 1,
      currentState: elevatorStates.still
    }
  },
  methods: {
    currentStateToStr: function () {
      if (this.currentState === elevatorStates.still) {
        return 'S'
      } else if (this.currentState === elevatorStates.goingUp) {
        return '↑'
      } else {
        return '↓'
      }
    }
  }
}
</script>

<style>
  @import '../styles/buttonsPanel.css';
  @import '../styles/button.css';
  @import '../styles/currentFloor.css';
  @import '../styles/movementState.css';
</style>
