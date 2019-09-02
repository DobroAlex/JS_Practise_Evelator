<template>
  <div>
    <div class="buttonsPanel">
      <button type="button" class="button" @click="floorButtonClicked(1)">1</button>
      <br>
      <button type="button" class="button" @click="floorButtonClicked(2)">2</button>
      <br>
      <button type="button" class="button" @click="floorButtonClicked(3)">3</button>
      <br>
      <button type="button" class="button" @click="floorButtonClicked(4)">4</button>
      <br>
      <button type="button" class="button" @click="floorButtonClicked(5)">5</button>
      <br>
      <label class="currentFloor">{{this.currentFloor}}</label>
      <br>
      <label class="movementState"> {{currentStateToStr()}} </label>
      <br>
    </div>
      <div class="floor">
        <img src="../assets/closedDoor.png">
        <img src="../assets/openedDoor.png" v-if="matchCurrentFloorAndTartget(5)">
        <button type="button" class="downButton">↓</button>
      </div>
      <br>
      <div class="floor">
        <img src="../assets/closedDoor.png">
        <img src="../assets/openedDoor.png" v-if="matchCurrentFloorAndTartget(4)">
        <button type="button" class="upButton">↑</button>
        <button type="button" class="downButton">↓</button>
      </div>
      <br>
      <div class="floor">
        <img src="../assets/closedDoor.png">
        <img src="../assets/openedDoor.png" v-if="matchCurrentFloorAndTartget(3)">
        <button type="button" class="upButton">↑</button>
        <button type="button" class="downButton">↓</button>
      </div>
      <br>
      <div class="floor">
        <img src="../assets/closedDoor.png">
        <img src="../assets/openedDoor.png" v-if="matchCurrentFloorAndTartget(2)">
        <button type="button" class="upButton">↑</button>
        <button type="button" class="downButton">↓</button>
      </div>
      <br>
      <div class="floor">
        <img src="../assets/closedDoor.png">
        <img src="../assets/openedDoor.png" v-if="matchCurrentFloorAndTartget(1)">
        <button type="button" class="upButton">↑</button>
      </div>
  </div>
</template>

<script>
import elevatorStates from '../classes/elevator_states_enum'
import Elevator from '../classes/elevator'

export default {
  name: 'ElevatorPage',
  data () {
    return {
      elevatorObj: new Elevator(),
      currentFloor: this.elevatorObj.floors[0],
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
    },
    matchCurrentFloorAndTartget (tagetFloor) {
      return this.currentFloor === tagetFloor
    },
    calculateDirection (cur, tar) {
      if (cur > tar) {
        return elevatorStates.goingDown
      } else if (tar > cur) {
        return elevatorStates.goingUp
      } else {
        return elevatorStates.still
      }
    },
    floorButtonClicked: function (floorNum) {
      this.elevatorObj.addFloor(floorNum, this.calculateDirection(this.currentFloor, floorNum))
    }
  }
}
</script>

<style>
  @import '../styles/buttonsPanel.css';
  @import '../styles/button.css';
  @import '../styles/currentFloor.css';
  @import '../styles/movementState.css';
  @import '../styles/floor.css';
  @import '../styles/UpAndDownButtons.css';
</style>
