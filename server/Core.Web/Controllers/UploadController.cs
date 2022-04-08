namespace Dev.Web.Controllers;

using Dev.Core.Upload;
using Dev.Data;
using Dev.Data.Entities;
using Dev.Data.Extensions;

using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
public class UploadController : Controller
{
    private readonly AppDbContext db;
    private readonly UploadConfig config;

    public UploadController(AppDbContext db, UploadConfig config)
    {
        this.db = db;
        this.config = config;
    }

    #region Image

    [HttpGet("[action]")]
    public string GetDefaultUserImage() =>
        config.UrlBasePath.GetDefaultUserImage();

    #endregion

    #region UserImage

    private readonly string userPath = "user-images/";

    [HttpGet("[action]/{userId}")]
    public async Task<UserImage> GetUserImage([FromRoute]int userId) =>
        await db.GetUserImage(userId);

    [HttpPost("[action]/{userId}")]
    public async Task UploadUserImage([FromRoute]int userId) =>
        await db.UploadUserImage(
            Request.Form.Files,
            $@"{config.DirectoryBasePath}{userPath}{userId}/".Replace('\\', '/'),
            $@"{config.UrlBasePath}{userPath}{userId}/".Replace('\\', '/'),
            userId
        );

    [HttpGet("[action]/{userId}")]
    public async Task RemoveUserImage([FromRoute]int userId) =>
        await db.RemoveUserImage(userId);

    #endregion
}