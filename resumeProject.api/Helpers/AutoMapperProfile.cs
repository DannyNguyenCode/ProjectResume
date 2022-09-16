using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
namespace resumeProject.api.Helpers
{
    public static class AutoMapperProfile<TSource,TDestination>
    {
        private static Mapper _mapper = new Mapper(new MapperConfiguration(
          config => config.CreateMap<TSource, TDestination>()
          ));

        public static TDestination Map(TSource source)
        {
            return _mapper.Map<TDestination>(source);
        }

    }
}
