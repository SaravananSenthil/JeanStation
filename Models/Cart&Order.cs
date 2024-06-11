using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace JeanStation.Models
{
    public class Cart
    {
        [Key]
        public int CartId { get; set; } // Pk
        [Required]
        public int ProductId { get; set; } // Fk
        public decimal Price { get; set; }

        public Cart(int productId, decimal price)
        {
            ProductId = productId;
            Price = price;
        }
    }

    public class Order
    {
        [Key]
        public int OrderId { get; set; } // Pk
        [Required]
        public int UserId { get; set; } // Fk
        [Required]
        public List<int> ProductIds { get; set; } // Fk
        public decimal TotalPrice { get; set; }
        public string Status { get; set; }

        public Order(int orderId, int userId, List<int> productIds)
        {
            OrderId = orderId;
            UserId = userId;
            ProductIds = productIds;
            TotalPrice = CalculateTotalPrice();
            Status = "Pending";
        }

        private decimal CalculateTotalPrice()
        {
            decimal totalPrice = 0;
            // Calculate total price based on product IDs
            return totalPrice;
        }
    }
}