CREATE VIEW [dbo].[ViewMovies]
	AS select A.Id, A.Name Movie, B.Name Genre, B.Id GenreId, A.RentFee, A.Stock from Movies A left join Genres B on A.Genre_Id=B.Id
