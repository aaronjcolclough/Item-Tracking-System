namespace Dev.Data.Entities;

public class Upload
{
    public int Id { get; set; }
    public string Type { get; set; }
    public string Url { get; set; }
    public string Path { get; set; }
    public string File { get; set; }
    public string Name { get; set; }
    public string FileType { get; set; }
    public long Size { get; set; }
}

public class UserImage : Upload
{
    public int UserId { get; set; }

    public User User { get; set; }
}