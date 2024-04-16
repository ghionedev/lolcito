addEventListener("keyup", e=>{
  e.target.matches("#searcher") &&(
    document.querySelectorAll(".champ").forEach(champ =>{
      champ.textContent.toLowerCase().includes(e.target.value.toLowerCase())
      ?champ.classList.remove("filtro")
      :champ.classList.add("filtro")
    })
  )
  
})

export const Searcher = () => {
  return (
    <div className="pt-2 pb-4">
      <input
        className="w-full bg-gray-200 text-gray-700 margin-left-4 hover:border-orange-400 rounded-xl border-4 py-3 leading-tight focus:outline-none focus:bg-white transicion ease-in duration-100"
        id="searcher"
        type="text"
        placeholder=" Aatrox, Annie, ..."
      />
    </div>
  );
};
