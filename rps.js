function playGame() {
      const arr = ["Paper", "Scissors", "Rock"];
      const user = arr[Math.floor(Math.random() * 3)];
      console.log("User Choice:", user);
      const computer = arr[Math.floor(Math.random() * 3)];
      console.log("Computer Choice:", computer);
        
        if(user === computer) {
          console.log("Egalitate");
        } else if(user === "Rock" && computer === "Scissors" || user === "Paper" && computer === "Rock" || user === "Scissors" && computer === "Paper") {
          console.log("User Wins!");
        } else {
          console.log("Computer Wins!");
        }
      }
      
      playGame();