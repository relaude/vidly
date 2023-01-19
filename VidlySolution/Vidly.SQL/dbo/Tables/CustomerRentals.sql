CREATE TABLE [dbo].[CustomerRentals]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Rental_Id] INT NOT NULL, 
    [Movie_Id] INT NOT NULL, 
    [RentFee] DECIMAL(18, 2) NOT NULL, 
    [DateRented] DATETIME NOT NULL, 
    [DateReturned] DATETIME NULL
)
