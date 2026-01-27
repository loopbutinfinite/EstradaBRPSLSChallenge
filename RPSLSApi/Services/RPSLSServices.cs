using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RPSLSApi.Services
{
    public class RPSLSServices
    {
        public string RPSLSGamevCPU(string userChoice)
        {
            Random random = new Random();
            int cpuChoice = random.Next(1, 6);
            switch (cpuChoice)
            {
                case 1:
                    {
                        if (userChoice == "paper")
                        {
                            return $"Congratulations, You Won!!! You chose {userChoice} and the CPU chose Rock";
                        }
                        else if (userChoice == "spock")
                        {
                            return $"Congratulations, You Won!!! You chose {userChoice} and the CPU chose Rock";
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
                case 2:
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
                case 3:
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
                case 4:
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
                case 5:
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
                    return "Invalid Input. Also make sure to type your reply in lowercase.";
            }
        }
        public string RPSLSPlayerVPlayer1Round(string player1, string player2)
        {
            if (player1 == player2)
            {
                return $"It's a Draw! Both players picked {player1}. No points awarded.";
            }
            if (player1 == player2)
            {
                return $"It's a Draw! Both players picked {player1}";
            }

            if ((player1 == "rock" && (player2 == "scissors" || player2 == "lizard")) ||
                (player1 == "paper" && (player2 == "rock" || player2 == "spock")) ||
                (player1 == "scissors" && (player2 == "paper" || player2 == "lizard")) ||
                (player1 == "lizard" && (player2 == "spock" || player2 == "paper")) ||
                (player1 == "spock" && (player2 == "scissors" || player2 == "rock")))
            {
                return $"Player 1 Wins! Player 1 chose {player1} and Player 2 chose {player2}";
            }
            else
            {
                return $"Player 2 Wins! Player 1 chose {player1} and Player 2 chose {player2}";
            }
        }
        public string RPSLSPvPBof5(string player1, string player2)
        {
            int player1Score = 0;
            int player2Score = 0;

            if (player1Score <= 3 || player2Score <= 3)
            {
                if (player1 == player2)
                {
                    return $"It's a Draw! Both players picked {player1}. No points awarded.";
                }

                if ((player1 == "rock" && (player2 == "scissors" || player2 == "lizard")) ||
                    (player1 == "paper" && (player2 == "rock" || player2 == "spock")) ||
                    (player1 == "scissors" && (player2 == "paper" || player2 == "lizard")) ||
                    (player1 == "lizard" && (player2 == "spock" || player2 == "paper")) ||
                    (player1 == "spock" && (player2 == "scissors" || player2 == "rock")))
                {
                    player1Score++;
                    return $"Player 1 wins this round! Player 1 chose {player1} and Player 2 chose {player2}. Current score Player 1: {player1Score} player 2: {player2Score}";
                }
                else
                {
                    player2Score++;
                    return $"Player 2 wins this round! Player 1 chose {player1} and Player 2 chose {player2}. Current score Player 1: {player1Score} player 2: {player2Score}";
                }
            }
            return "Broken, if you see this";
        }
        public string RPSLSPvPBof7(string player1, string player2)
        {
            int player1Score = 0;
            int player2Score = 0;

            if (player1Score <= 4 || player2Score <= 4)
            {
                if (player1 == player2)
                {
                    return $"It's a Draw! Both players picked {player1}. No points awarded.";
                }

                if ((player1 == "rock" && (player2 == "scissors" || player2 == "lizard")) ||
                    (player1 == "paper" && (player2 == "rock" || player2 == "spock")) ||
                    (player1 == "scissors" && (player2 == "paper" || player2 == "lizard")) ||
                    (player1 == "lizard" && (player2 == "spock" || player2 == "paper")) ||
                    (player1 == "spock" && (player2 == "scissors" || player2 == "rock")))
                {
                    player1Score++;
                    return $"Player 1 wins this round! Player 1 chose {player1} and Player 2 chose {player2}";
                }
                else
                {
                    player2Score++;
                    return $"Player 2 wins this round! Player 1 chose {player1} and Player 2 chose {player2}";
                }
            }
            return "Broken, if you see this";
        }
    }
}