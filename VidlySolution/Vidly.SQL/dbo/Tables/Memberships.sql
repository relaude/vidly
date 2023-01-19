CREATE TABLE [dbo].[Memberships]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] NVARCHAR(50) NOT NULL, 
    [DiscountRate] DECIMAL(18, 2) NOT NULL
)
