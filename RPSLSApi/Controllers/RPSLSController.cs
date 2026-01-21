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
        [Route("SayHello")]
        public string SayHello()
        {
            return "Hello!";
        }
        [HttpGet]
        [Route("RPSLSGame/{userChoice}")]
        public string RPSLSGame(string userChoice)
        {
            return _RPSLSServices.RPSLSGame(userChoice);
        }
    }
}