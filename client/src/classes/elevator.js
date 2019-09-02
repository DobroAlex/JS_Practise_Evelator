const elevatorStates = require('./elevator_states_enum')
const utils = require('./utils')

export default class Elevator {
  constructor () {
    this.state = elevatorStates.still
    this.floors = []
  }
  get state () {
    return this.state
  }

  get floors () {
    return this.floors
  }

  set state (state) {
    this.state = state
  }

  set floors (floors) {
    this.floors = floors
  }
  
  arrivedAtFloor () {
    this.floors.shift() // is ought to be called then elevator arrives at floor
  }

  addFloor (floor, direction) {
    if (this.floor.includes(floor)) { // it's pointless to add floor if queue contains one
      return
    }
    if (this.state === elevatorStates.still) { // if elevator queue is empty
      this.floors.push(floor) // insert target to queue
      return
    }
    if (this.state === direction === elevatorStates.goingUp) { // if elevetor's going up and person wants to go up
      if (utils.isBisBetween(this.floors[0], this.floors[1], floor)) { // and if new floor is between current and target (e.x from 1 to 5 and button pressed at 3 ^)
        this.floors.splice(1, 0, floor) // pushing new flor bettwen current and target marking new floor as new target
      }
      if ((floor > this.floors[this.floors.length - 1]) || (floor < this.floors[0])) { // if new floor as higher than last in queue or lower than first
        this.floors.push(floor) // push it to the top (making last in queue)
      }
      utils.partialSort(this.floors, utils.ascendingOrderComparator, 2) // sort all floors except for current and target in ascending order
    } else if (this.state === direction === elevatorStates.goingDown) {
      if (utils.isBetween(this.floors[0], this.floors[1], floor)) {
        this.floors.splice(1, 0, floor) //  similar to previous in goingUp: pushing level in between two neighboors
      }
      if (floor < this.floors[this.floors.length - 1]) {
        this.floors.push(floor) // push it to the top (making last in queue)
      }
      utils.partialSort(this.floors, utils.descendingOrderComparator) // sort all floors except for current and target in descendingwi order
    } else {
      this.floors.push(floor) // push it to the top (making last in queue)
      if (this.state === elevatorStates.goingUp) {
        utils.partialSort(this.floors, utils.ascendingOrderComparator, 2) // and then sort floors in ascending order
      } else {
        utils.partialSort(this.floors, utils.descendingOrderComparator, 2) // // and then sort floors in descending order
      }
    }
  }
}
