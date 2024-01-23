using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookApp.DAL.Migrations
{
    public partial class bookAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TokensAvailable",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TokensAvailable",
                table: "Users");
        }
    }
}
