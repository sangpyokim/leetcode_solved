/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */


/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

class ParkingSystem {
    parking = []
    
    constructor(big, medium, small) {
        this.parking.push(big)
        this.parking.push(medium)
        this.parking.push(small)
    }
    
    addCar(type) {
        if (this.parking[type-1] === 0) return false
        
        this.parking[type-1] -= 1
        return true
    }
}