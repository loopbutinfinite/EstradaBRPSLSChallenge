using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RPSLSApi.Services
{
    public class RPSLSServices
    {
        public string RPSLSGame(string userChoice)
        {
            // Scissors cuts Paper
            // Paper covers Rock
            // Rock crushes Lizard
            // Lizard poisons Spock
            // Spock smashes Scissors
            // Scissors decapitates Lizard
            // Lizard eats Paper
            // Paper disproves Spock
            // Spock vaporizes Rock
            // Rock breaks Scissors
            Random random = new Random();
            int cpuChoice = random.Next(1, 6);
            switch (cpuChoice)
            {
                case 1: //CPU Rock Choice
                    {
                        if (userChoice == "paper")
                        {
                            return $"Congratulations You Won!!! You chose {userChoice} and the CPU chose Rock";
                        }
                        else if (userChoice == "spock")
                        {
                            return $"Congratulations You Won!!! You chose {userChoice} and the CPU chose Rock";
                        }
                        else if (userChoice == "lizard")
                        {
                            return $"You Lose, Try Again. You chose {userChoice} and the CPU chose Rock";
                        }
                        else if (userChoice == "scissors")
                        {
                            return $"You Lose, Try Again. You chose {userChoice} and the CPU chose Rock";
                        }
                        else
                        {
                            return $"It's a Draw! You chose {userChoice} and the CPU also chose Rock";
                        }
                    }
                case 2: //CPU Paper
                    {
                        if (userChoice == "lizard")
                        {
                            return $"Congratulations You Won!!! You chose {userChoice} and the CPU chose Paper";
                        }
                        else if (userChoice == "scissors")
                        {
                            return $"Congratulations You Won!!! You chose {userChoice} and the CPU chose Paper";
                        }
                        else if (userChoice == "rock")
                        {
                            return $"You Lose, Try Again. You chose {userChoice} and the CPU chose Paper";
                        }
                        else if (userChoice == "spock")
                        {
                            return $"You Lose, Try Again. You chose {userChoice} and the CPU chose Paper";
                        }
                        else
                        {
                            return $"It's a Draw! You chose {userChoice} and the CPU also chose Paper";
                        }
                    }
                case 3: //CPU Scissors
                    {
                        if (userChoice == "rock")
                        {
                            return $"Congratulations You Won!!! You chose {userChoice} and the CPU chose Scissors";
                        }
                        else if (userChoice == "spock")
                        {
                            return $"Congratulations You Won!!! You chose {userChoice} and the CPU chose Scissors";
                        }
                        else if (userChoice == "paper")
                        {
                            return $"You Lose, Try Again. You chose {userChoice} and the CPU chose Scissors";
                        }
                        else if (userChoice == "lizard")
                        {
                            return $"You Lose, Try Again. You chose {userChoice} and the CPU chose Scissors";
                        }
                        else
                        {
                            return $"It's a Draw! You chose {userChoice} and the CPU also chose Scissors";
                        }
                    }
                case 4: //CPU Lizard
                    {
                        if (userChoice == "rock")
                        {
                            return $"Congratulations You Won!!! You chose {userChoice} and the CPU chose Lizard";
                        }
                        else if (userChoice == "scissors")
                        {
                            return $"Congratulations You Won!!! You chose {userChoice} and the CPU chose Lizard";
                        }
                        else if (userChoice == "paper")
                        {
                            return $"You Lose, Try Again. You chose {userChoice} and the CPU chose Lizard";
                        }
                        else if (userChoice == "spock")
                        {
                            return $"You Lose, Try Again. You chose {userChoice} and the CPU chose Lizard";
                        }
                        else
                        {
                            return $"It's a Draw! You chose {userChoice} and the CPU also chose Lizard";
                        }
                    }
                case 5: //CPU Spock
                    {
                        if (userChoice == "lizard")
                        {
                            return $"Congratulations You Won!!! You chose {userChoice} and the CPU chose Spock";
                        }
                        else if (userChoice == "paper")
                        {
                            return $"Congratulations You Won!!! You chose {userChoice} and the CPU chose Spock";
                        }
                        else if (userChoice == "scissors")
                        {
                            return $"You Lose, Try Again. You chose {userChoice} and the CPU chose Spock";
                        }
                        else if (userChoice == "rock")
                        {
                            return $"You Lose, Try Again. You chose {userChoice} and the CPU chose Spock";
                        }
                        else
                        {
                            return $"It's a Draw! You chose {userChoice} and the CPU also chose Spock";
                        }
                    }
                default:
                    return "";
            }
        }
    }
}