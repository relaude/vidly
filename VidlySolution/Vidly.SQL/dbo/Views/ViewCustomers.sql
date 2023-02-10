CREATE VIEW [dbo].[ViewCustomers]
AS     
select A.Id, A.LastName, A.FirstName
,(A.LastName +', '+ A.FirstName) DisplayName
,CONVERT(VARCHAR(10),  A.DateOfBirth, 120) DateOfBirth, 
A.Membership_Id Membership_Id, B.Name Membership 
from Customers A left join Memberships B on A.Membership_Id=B.Id
