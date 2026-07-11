using API.Data;
using Microsoft.EntityFrameworkCore;
using API.Middleware;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
 builder.Services.AddDbContext<StoreContext>(opt =>
 {
     opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
     });

builder.Services.AddCors();
builder.Services.AddTransient<ExceptionMiddleware>();
var app = builder.Build();
app.UseMiddleware<ExceptionMiddleware>();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000"); 
});
app.MapControllers();
app.MapFallbackToController("Index", "Fallback");

DbInitializer.InitDb(app);

app.Run();

