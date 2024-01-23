using BookApp.BLL;
using BookApp.BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BookAppBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly UserService _userService;
        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> GetSpecificUsers(string username, string password)
        {
            var users = await _userService.GetSpecificUsers(username, password);
            return Ok(users);
        }

    
    }
}
