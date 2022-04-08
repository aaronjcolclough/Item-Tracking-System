namespace Core.Data.Extensions;

using Core.Data.Extensions.Seed;

using Microsoft.EntityFrameworkCore;

public static class DbInitializer
{
    public static async Task Initialize(this AppDbContext db)
    {
        Console.WriteLine("Initializing database");
        await db.Database.MigrateAsync();
        Console.WriteLine("Database initialized");

        var users = await db.SeedUsers();
    }
}