CREATE VIEW [dbo].[ViewMovies]
AS select A.Id, A.Name Name, B.Name Genre, B.Id Genre_Id, A.RentFee, A.Stock 
from Movies A left join Genres B on A.Genre_Id=B.Id
