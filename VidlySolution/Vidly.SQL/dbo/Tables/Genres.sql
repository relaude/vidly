﻿CREATE TABLE [dbo].[Genres] (
    [Id]   TINYINT        NOT NULL IDENTITY,
    [Name] NVARCHAR (255) NOT NULL,
    CONSTRAINT [PK_dbo.Genres] PRIMARY KEY CLUSTERED ([Id] ASC)
);

