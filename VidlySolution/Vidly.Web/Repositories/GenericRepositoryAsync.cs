using AutoMapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Web.Http.Results;

namespace Vidly.Web.Repositories
{
    public class GenericRepositoryAsync<TEntity, TEntityDto> : IRepositoryAsync<TEntity, TEntityDto> where TEntity : class where TEntityDto : class
    {
        protected readonly DbContext Context;
        public GenericRepositoryAsync(DbContext context)
        {
            Context = context;
        }
        public async Task<TEntityDto> CreateAsync(TEntityDto dto)
        {
            var entity = Mapper.Map<TEntityDto, TEntity>(dto);

            Context.Set<TEntity>().Add(entity);
            await Context.SaveChangesAsync();

            return Mapper.Map<TEntity, TEntityDto>(entity);
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await Context.Set<TEntity>().FindAsync(id);
            Context.Set<TEntity>().Remove(entity);

            await Context.SaveChangesAsync();
        }

        public async Task<TEntityDto> GetByIdAsync(int id)
        {
            var entity = await Context.Set<TEntity>().FindAsync(id);
            return Mapper.Map<TEntity, TEntityDto>(entity);
        }

        public async Task<IEnumerable<TEntityDto>> GetListAsync()
        {
            var entity = await Context.Set<TEntity>().ToListAsync();
            return entity.Select(Mapper.Map<TEntity, TEntityDto>);
        }

        public async Task UpdateAsync(TEntityDto dto, int id)
        {
            var entity = await Context.Set<TEntity>().FindAsync(id);
            Mapper.Map(dto, entity);

            await Context.SaveChangesAsync();
        }

        public IEnumerable<TEntity> Paginated(
            int pageIndex, int pageSize,
            Expression<Func<TEntity, string>> orderby,
            out int totalrows)
        {
            var query = Context.Set<TEntity>();
            totalrows = query.Count();

            return query
                .OrderBy(orderby)
                .Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .ToList();
        }

        public IEnumerable<TEntity> Paginated(
            int pageIndex, int pageSize,
            Expression<Func<TEntity, bool>> where,
            Expression<Func<TEntity, string>> orderby, 
            out int totalrows)
        {
            var query = Context.Set<TEntity>().Where(where);
            totalrows = query.Count();

            return query
                .OrderBy(orderby)
                .Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .ToList();
        }
    }
}