using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace SignUpAPI.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public string SecurityQuestion { get; set; }

        [Required]
        public string SecurityAnswer { get; set; }
    }
}
