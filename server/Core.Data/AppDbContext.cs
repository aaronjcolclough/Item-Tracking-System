[assembly:System.Runtime.Versioning.SupportedOSPlatform("windows")]
namespace Core.Data;

using Core.Data.Configuration;
using Core.Data.Entities;

using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Upload> Uploads { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<UserImage> UserImages { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ConfigureUpload();
        builder.ConfigureUser();

        builder
            .Model
            .GetEntityTypes()
            .Where(x => x.BaseType == null)
            .ToList()
            .ForEach(x =>
            {
                builder
                    .Entity(x.Name)
                    .ToTable(x.Name.Split('.').Last());
            });
    }
}