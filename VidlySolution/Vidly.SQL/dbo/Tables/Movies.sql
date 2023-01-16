CREATE TABLE [dbo].[Movies]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] NVARCHAR(200) NOT NULL, 
    [Genre_Id] INT NOT NULL, 
    [RentFee] DECIMAL(18, 2) NOT NULL, 
    [Stock] INT NOT NULL
)
