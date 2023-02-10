/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
			   SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
--BULK INSERT SampleEmployees
--FROM 'C:\temp\employee.csv'
--WITH (FIRSTROW = 2,
--	FIELDTERMINATOR = ',',
--	ROWTERMINATOR='\n',
--	BATCHSIZE=250000,
--	MAXERRORS=2);


--IF Not Exists(select * from Memberships where Name='Pay As You Go') 
--Begin
--	insert into Memberships(Name,DiscountRate) values('Pay As You Go',0)
--End;

--IF Not Exists(select * from Memberships where Name='Monthly') 
--Begin
--	insert into Memberships(Name,DiscountRate) values('Monthly',0.1)
--End;

--IF Not Exists(select * from Memberships where Name='Quarterly') 
--Begin
--	insert into Memberships(Name,DiscountRate) values('Quarterly',0.15)
--End;

--IF Not Exists(select * from Memberships where Name='Annual') 
--Begin
--	insert into Memberships(Name,DiscountRate) values('Annual',0.2)
--End;