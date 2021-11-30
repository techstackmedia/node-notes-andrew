// const square = function(x) {
//     return x * x;
// };

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x;

// console.log(square(3));

// const eventObj = {
//   name: "Birthday Party",
//   printGuestList: () => {
//     console.log(`Guest list for ${this.name}`);
//   },
// };

const eventObj = {
  userName: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log(`Guest list for ${this.userName}`);
    const app = () => {
      //   console.log(`Guest list for ${this.userName}`);
      const guestList = (guest) => {
        console.log(`${guest} is attending ${this.userName}`);
      };

      this.guestList.forEach(guestList);
      // arrow function don't bind their own this value
      // They access the this value in the context in which they're created - in printGuestList()
    };

    app();
  },
};

eventObj.printGuestList();
