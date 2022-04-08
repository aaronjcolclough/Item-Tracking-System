namespace Core.Data.Configuration;

using Core.Data.Entities;

using Microsoft.EntityFrameworkCore;

public static class UploadConfig
{
    public static void ConfigureUpload(this ModelBuilder builder)
    {
        builder
            .Entity<UserImage>()
            .HasOne(x => x.User)
            .WithOne(x => x.Image)
            .HasForeignKey<UserImage>(x => x.UserId)
            .IsRequired(false);

        builder
            .Entity<Upload>()
            .HasDiscriminator(x => x.Type)
            .HasValue<Upload>("upload")
            .HasValue<UserImage>("user-image");
    }
}