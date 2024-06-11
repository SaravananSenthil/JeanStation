using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace JeanStation.Models
{
    public class Payment
    {
        [Key]
        public int PaymentId { get; set; } // Pk
        [Required]
        public int OrderId { get; set; } // Fk
        public string Method { get; set; }
        public double Amount { get; set; }

        public void ProcessPayment()
        {
            // Code to process the payment
            Console.WriteLine($"Payment of {Amount} via {Method} processed successfully.");
        }
    }

    public class Status
    {
        [Key]
        public int StatusId { get; set; } // Pk
        [Required]
        public int OrderId { get; set; } // Fk
        public string CurrentStatus { get; set; }

        public void UpdateStatus(string newStatus)
        {
            CurrentStatus = newStatus;
        }
    }
}

