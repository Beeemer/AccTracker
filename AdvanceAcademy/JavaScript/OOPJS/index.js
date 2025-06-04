const micro = {
    brand: "Samsung",
    version: "3.0",
    price: 30.2,
    "micro colors": ["black", "green", "blue", "red"],
    discount:{
        period: "14.04.2025 - 24.04.2025",
        percent: 15
    },
    isAvailable: true,
    showBrand: function(){
        console.log(this.brand);
    },
    setDiscount: function(newPeriod, newPercent){
        this.discount.period = newPeriod;
        this.discount.price = newPercent;
    },
}
//
// const myDog = {
//     name: "",
//     ownersName: "",
//     favoriteFood: "",
//     friends: ["",""],
//
//     greetings: function () {
//         console.log("Hello!")
//     },
//     setName: function(newName){
//         this.name = newName;
//     },
//     setOwnerName: function(newOwner){
//         this.ownerName = newOwner;
//     },
//     setFriends: function(newFriends){
//         this.friends = newFriends;
//     },
// }
// console.log(myDog);
// myDog.setName("Rex");
// myDog.setOwnerName("Petur");
// myDog.setFriends("Petq","Alex","Ivan");
// console.log(myDog);
// console.log("Hello my name is")

// const microsArr = [
//     {
//         brand: 'Samsung',
//         model: '3 pro',
//         price: 250
//     },
//     {
//         brand: 'Apple',
//         version: 'pro max',
//         price: 300
//     },
//     {
//         brand: 'realme',
//         model: 'pro max ultra 5 +',
//         price:100
//
//     }
// ]
// for (let i = 0; i <= microsArr.length; i++){
//     console.log(microsArr[i]);
// }
// const objectKeys = Object.keys(micro);
// console.log(objectKeys);
// const objectValues = Object.values(micro);
// console.log(objectValues);
// console.log(micro["micro colors"]);

const hotel = {
    name: "",
    rooms: 30,
    roomsOccupied: 15,
    checkAvailability: function(){
        let roomsAvailable = this.rooms - this.roomsOccupied;
        console.log(`Available rooms: ${roomsAvailable}, occupied rooms ${this.roomsOccupied}`);
    },
    setAvailableRooms(rooms){
        this.availableRooms = rooms;
    }

}
hotel.checkAvailability();
hotel.setAvailableRooms(25);
console.log(hotel);
hotel.location = "Burgas";
console.log(hotel);
delete hotel.location;
console.log(hotel);
