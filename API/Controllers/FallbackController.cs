using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc; 

namespace API.Controllers;

public class FallbackController : Controller    
{
    public IActionResult Index()//return index.html when the user navigates to a route that does not exist in the API, calling this class
    {
        return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
    }
}