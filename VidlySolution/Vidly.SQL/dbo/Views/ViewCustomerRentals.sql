CREATE VIEW [dbo].[ViewCustomerRentals]
AS
select CR.Id,R.Id RentalId, CR.Movie_Id MovieId
,(C.LastName +', '+ C.FirstName) Customer
,M.Name Movie
,CR.RentFee
,CONVERT(VARCHAR(10),CR.DateRented,120) DateRented
,CONVERT(VARCHAR(10),CR.DateReturned,120) DateReturned
from CustomerRentals CR 
left join Rentals R on R.Id=CR.Rental_Id
left join Customers C on C.Id=R.Customer_Id
left join Movies M on M.Id=CR.Movie_Id
