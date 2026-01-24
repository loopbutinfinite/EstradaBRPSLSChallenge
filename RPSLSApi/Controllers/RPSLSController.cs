using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RPSLSApi.Services;

namespace RPSLSApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RPSLSController : ControllerBase
    {
        private readonly RPSLSServices _RPSLSServices;
        public RPSLSController(RPSLSServices rPSLSServices)
        {
            _RPSLSServices = rPSLSServices;
        }

        [HttpGet]
        [Route("RPSLSGame/{userChoice}")]
        public string RPSLSGame(string userChoice)
        {
            return _RPSLSServices.RPSLSGamevCPU(userChoice);
        }
        [HttpGet]
        [Route("RPSLSPvP1Round/{player1}/{player2}")]
        public string RPSLSPVP1Round(string player1, string player2)
        {
            return _RPSLSServices.RPSLSPlayerVPlayer1Round(player1, player2);
        }
        [HttpGet]
        [Route("RPSLSPvPBof5/{player1}/{player2}")]
        public string RPSLSPvPBof5(string player1, string player2)
        {
            return _RPSLSServices.RPSLSPvPBof5(player1, player2);
        }

        [HttpGet]
        [Route("RPSLSPvPBof7/{player1}/{player2}")]
        public string RPSLSPvPBof7(string player1, string player2)
        {
            return _RPSLSServices.RPSLSPvPBof7(player1, player2);
        }
    }
}