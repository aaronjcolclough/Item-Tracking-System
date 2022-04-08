namespace Dev.Data.Configuration;

using Dev.Data.Entities;

using Microsoft.EntityFrameworkCore;

public static class UserConfig
{
    public static void ConfigureUser(this ModelBuilder builder)
    {
        builder
            .Entity<User>()
            .Property(x => x.DefaultPageSize)
            .HasDefaultValue(20);
    }
}