using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace JeanStation.Models
{
    public class ProdcutDetails
    {
        [Key]
        public int ProductId { get; set; } // Pk
        public string Name { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }

        public double CalculateTotal()
        {
            return Price * Quantity;
        }
    }
}
