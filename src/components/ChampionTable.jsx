export const ChampionTable = ({champions, loading}) => {
  return (
    <ul className="grid grid-cols-9">
    {loading && (
      <div className="text-white">
        Cargando...
      </div>
    )}
    {champions.map((champion) => (
      <li key={champion.key} className="text-white bg-gray-800">
        <a className="cursor-pointer"><img src={champion.img} className="h-32 w-32 pt-2 pl-2 hover:brightness-150 transition ease-in hover:scale-105 duration-75"/></a>
        <span className="text-center">{champion.name}</span>
      </li>
    ))}
  </ul>
  
  )
};

