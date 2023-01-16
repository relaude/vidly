using AutoMapper;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

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
    }
}