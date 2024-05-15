using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantAPI.Data;
using RestaurantAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RestaurantsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // New endpoint for fetching top 3 restaurants based on city
        [HttpGet("top-restaurants")]
        public async Task<ActionResult<IEnumerable<Restaurant>>> GetTopRestaurants([FromQuery] string state, [FromQuery] string city)
        {
            var restaurants = await _context.Restaurants
                                            .Where(r => r.City == city && r.State == state)
                                            .OrderByDescending(r => r.Rating)
                                            .Take(3)
                                            .ToListAsync();
            if (!restaurants.Any())
            {
                return NotFound();
            }
            return Ok(restaurants);
        }
    }
}
