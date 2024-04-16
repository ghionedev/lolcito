export const ChampionTable = ({champions, loading}) => {
  return (
    <ul className="grid grid-cols-4 lg:grid-cols-9">
    {loading && (
      <div className="text-white">
        Cargando..
      </div>
    )}
    {champions.map((champion) => (
      <li key={champion.key} className="text-white bg-opacity-85 bg-gray-800 champ">
        <a className="cursor-pointer "><img src={champion.img} className="h-32 w-32 hover:brightness-150 transition ease-in hover:scale-105 duration-75  pl-2 pt-2"/></a>
        <div className="text-center" >{champion.name}</div>
      </li>
    ))}
  </ul>
  
  )
};

