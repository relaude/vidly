using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vidly.Web.Repositories
{
    public interface IRepositoryAsync<TEntity, TEntityDto> where TEntity: class where TEntityDto : class
    {
        Task<IEnumerable<TEntityDto>> GetListAsync();
        Task<TEntityDto> GetByIdAsync(int id);
        Task<TEntityDto> CreateAsync(TEntityDto dto);
        Task UpdateAsync(TEntityDto dto, int id);
        Task DeleteAsync(int id);
    }
}
