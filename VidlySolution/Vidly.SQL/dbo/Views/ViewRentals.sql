CREATE VIEW [dbo].[ViewRentals]
AS 
select A.Id,(B.LastName + ', ' + B.FirstName) Customer, C.Name Membership
,(select count(Movie_Id) from CustomerRentals where Rental_Id=A.Id) Rented
,(select count(Movie_Id) from CustomerRentals where Rental_Id=A.Id and DateReturned is null) Pending
from Rentals A left join Customers B on A.Customer_Id=B.Id
left join Memberships C on C.Id=B.Membership_Id
