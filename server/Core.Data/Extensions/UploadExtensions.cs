namespace Dev.Data.Extensions;

using Dev.Core;
using Dev.Core.Extensions;
using Dev.Data.Entities;

using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

public static class UploadExtensions
{
    #region Uploads

    public static void DeleteAll<T>(this List<T> uploads) where T : Upload =>
        uploads.ForEach(upload => upload.Delete());

    public static void Delete<T>(this T upload) where T : Upload
    {
        if (File.Exists(upload.Path))
            File.Delete(upload.Path);
    }

    #endregion

    #region Image

    public static string GetDefaultUserImage(this string url) =>
        $"{url}user.svg";

    #endregion

    #region UserImage

    public static async Task<UserImage> GetUserImage(this AppDbContext db, int userId) =>
        await db.UserImages
            .FirstOrDefaultAsync(x => x.UserId == userId);

    public static async Task UploadUserImage(this AppDbContext db, IFormFileCollection files, string path, string url, int userId)
    {
        if (files.Validate("image"))
        {
            await db.RemoveUserImage(userId);

            var file = files[0];
            await db.AddUserImage(file, path, url, userId);
        }
    }

    public static async Task RemoveUserImage(this AppDbContext db, int userId)
    {
        var image = await db.UserImages
            .FirstOrDefaultAsync(x => x.UserId == userId);

        if (image is not null)
        {
            db.UserImages.Remove(image);
            await db.SaveChangesAsync();
            image.Delete();
        }
    }

    static async Task AddUserImage(this AppDbContext db, IFormFile file, string path, string url, int userId)
    {
        var image = await file.Write(new UserImage(), path, url);
        image.UserId = userId;
        await db.UserImages.AddAsync(image);
        await db.SaveChangesAsync();
    }

    #endregion

    #region Internal

    static async Task<T> Write<T>(this IFormFile file, T upload, string path, string url) where T : Upload
    {
        if (!Directory.Exists(path))
            Directory.CreateDirectory(path);

        file.Create(upload, path, url);
        using var stream = new FileStream(upload.Path, FileMode.Create);
        await file.CopyToAsync(stream);

        return upload;
    }

    static void Create<T>(this IFormFile file, T upload, string path, string url) where T : Upload
    {
        var f = file.CreateSafeName(path);

        upload.File = f;
        upload.Name = file.Name;
        upload.Path = $"{path}{f}";
        upload.Url = $"{url}{f}";
        upload.FileType = file.ContentType;
        upload.Size = file.Length;
    }

    static string CreateSafeName(this IFormFile file, string path)
    {
        var increment = 0;
        var fileName = file.FileName.UrlEncode();
        var newName = fileName;

        while (File.Exists(path + newName))
        {
            var extension = fileName.Split('.').Last();
            newName = $"{fileName.Replace($".{extension}", "")}_{++increment}.{extension}";
        }

        return newName;
    }

    static bool Validate(this IFormFileCollection files, string filetype = null)
    {
        if (!files.Any())
            throw new AppException("No files were provided for upload");

        if (!string.IsNullOrEmpty(filetype))
        {
            var invalid = files
                .Any(f => f.ContentType
                    .Split('/')[0]
                    .ToLower() != filetype.ToLower()
                );

            if (invalid)
                throw new AppException($"All uploads should be of type {filetype}");
        }

        return true;
    }

    #endregion
}