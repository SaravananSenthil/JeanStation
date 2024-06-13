﻿using System;
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
    public class StatusesController : ControllerBase
    {
        private readonly JeanStationDbContext _context;

        public StatusesController(JeanStationDbContext context)
        {
            _context = context;
        }

        // GET: api/Statuses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Status>>> Getstatuses()
        {
            return await _context.statuses.ToListAsync();
        }

        // GET: api/Statuses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Status>> GetStatus(int id)
        {
            var status = await _context.statuses.FindAsync(id);

            if (status == null)
            {
                return NotFound();
            }

            return status;
        }

        // PUT: api/Statuses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatus(int id, Status status)
        {
            if (id != status.StatusId)
            {
                return BadRequest();
            }

            _context.Entry(status).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatusExists(id))
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

        // POST: api/Statuses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Status>> PostStatus(Status status)
        {
            _context.statuses.Add(status);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStatus", new { id = status.StatusId }, status);
        }

        // DELETE: api/Statuses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStatus(int id)
        {
            var status = await _context.statuses.FindAsync(id);
            if (status == null)
            {
                return NotFound();
            }

            _context.statuses.Remove(status);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StatusExists(int id)
        {
            return _context.statuses.Any(e => e.StatusId == id);
        }
    }
}
