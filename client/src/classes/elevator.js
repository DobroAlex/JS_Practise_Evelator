import elevatorStates from './elevator_states_enum'
import {isBetween, partialSort, ascendingOrderComparator, descendingOrderComparator} from './utils'

export default class Elevator {
  constructor () {
    this.state = elevatorStates.still
    this.floors = []
  }
  get state () {
    return this._state
  }

  get floors () {
    return this._floors
  }

  set state (s) {
    this._state = s
  }

  set floors (f) {
    this._floors = f
  }

  arrivedAtFloor = function () {
    this.floors.shift() // is ought to be called then elevator arrives at floor
  }

  addFloor = function (floor, direction) {
    if (this.floors.includes(floor)) { // it's pointless to add floor if queue contains one
      return
    }
    if (this.state === elevatorStates.still) { // if elevator queue is empty
      this.floors.push(floor) // insert target to queue
      return
    }
    if (this.state === direction === elevatorStates.goingUp) { // if elevetor's going up and person wants to go up
      if (isBetween(this.floors[0], this.floors[1], floor)) { // and if new floor is between current and target (e.x from 1 to 5 and button pressed at 3 ^)
        this.floors.splice(1, 0, floor) // pushing new flor bettwen current and target marking new floor as new target
      }
      if ((floor > this.floors[this.floors.length - 1]) || (floor < this.floors[0])) { // if new floor as higher than last in queue or lower than first
        this.floors.push(floor) // push it to the top (making last in queue)
      }
      partialSort(this.floors, ascendingOrderComparator, 2) // sort all floors except for current and target in ascending order
    } else if (this.state === direction === elevatorStates.goingDown) {
      if (isBetween(this.floors[0], this.floors[1], floor)) {
        this.floors.splice(1, 0, floor) //  similar to previous in goingUp: pushing level in between two neighboors
      }
      if (floor < this.floors[this.floors.length - 1]) {
        this.floors.push(floor) // push it to the top (making last in queue)
      }
      partialSort(this.floors, descendingOrderComparator) // sort all floors except for current and target in descendingwi order
    } else {
      this.floors.push(floor) // push it to the top (making last in queue)
      if (this.state === elevatorStates.goingUp) {
        partialSort(this.floors, ascendingOrderComparator, 2) // and then sort floors in ascending order
      } else {
        partialSort(this.floors, descendingOrderComparator, 2) // // and then sort floors in descending order
      }
    }
  }
}
