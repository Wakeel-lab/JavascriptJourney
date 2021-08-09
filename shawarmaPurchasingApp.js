let customerChoice = 0;
let totalShawarmaCost = 0;
let customerDecision = "";
do{
    do{
        customerChoice = Number(prompt("Please select your shawarma choice - 1 for small size which is #250, 2 for medium size which is #500 and 3 for big size which is #700", " "));
    
        
        if(customerChoice == 1){
            totalShawarmaCost += 250;
        }
        
        else if(customerChoice == 2){
            totalShawarmaCost += 500;
        }
        
        else if(customerChoice == 3){
            totalShawarmaCost += 700;
        }
        
        else{
            prompt("Invalid choice.", "");
        }
    
    }while(customerChoice != 1 && customerChoice != 2 && customerChoice != 3);
    
   
    do{
        customerDecision = (prompt("Do you want to buy more shawarma? Press Yes or No").toUpperCase());
    
        if(customerDecision != "YES" && customerDecision != "NO"){
            prompt("Your choice is invalid");
        }
    }while(customerDecision != "YES" && customerDecision != "NO");
}while(customerDecision == "YES");

prompt(`Your bill amount is ${totalShawarmaCost}`);

prompt(`Thank you for patronizing us.`);





