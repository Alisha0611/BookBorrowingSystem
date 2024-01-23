using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookApp.DAL.Migrations
{
    public partial class DefaultUsersAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Name", "Password", "TokensAvailable", "UserName" },
                values: new object[,]
                {
                    { 1, "User1", "Password@1", 5, "username1" },
                    { 2, "User2", "Password@2", 5, "username2" },
                    { 3, "User3", "Password@3", 5, "username3" },
                    { 4, "User4", "Password@4", 5, "username4" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
