using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JeanStation.Models;
using Microsoft.AspNetCore.Cors;

namespace JeanStation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class ProdcutsDetailsController : ControllerBase
    {
        private readonly JeanStationDbContext _context;

        public ProdcutsDetailsController(JeanStationDbContext context)
        {
            _context = context;
        }

        // GET: api/ProdcutsDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProdcutDetails>>> Getdetails()
        {
            return await _context.details.ToListAsync();
        }

        // GET: api/ProdcutsDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProdcutDetails>> GetProdcutDetails(int id)
        {
            var prodcutDetails = await _context.details.FindAsync(id);

            if (prodcutDetails == null)
            {
                return NotFound();
            }

            return prodcutDetails;
        }

        // PUT: api/ProdcutsDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProdcutDetails(int id, ProdcutDetails prodcutDetails)
        {
            if (id != prodcutDetails.ProductId)
            {
                return BadRequest();
            }

            _context.Entry(prodcutDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdcutDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProdcutsDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProdcutDetails>> PostProdcutDetails(ProdcutDetails prodcutDetails)
        {
            _context.details.Add(prodcutDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProdcutDetails", new { id = prodcutDetails.ProductId }, prodcutDetails);
        }

        // DELETE: api/ProdcutsDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProdcutDetails(int id)
        {
            var prodcutDetails = await _context.details.FindAsync(id);
            if (prodcutDetails == null)
            {
                return NotFound();
            }

            _context.details.Remove(prodcutDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProdcutDetailsExists(int id)
        {
            return _context.details.Any(e => e.ProductId == id);
        }
    }
}
