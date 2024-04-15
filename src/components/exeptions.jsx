export const exeptions = (champion) => {
const value=`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${
    champion === 'Aurelion Sol' ? 'AurelionSol' : 
    champion === "Cho'Gath" ? 'Chogath' : 
    champion === 'Dr. Mundo' ? 'DrMundo' :
    champion === 'Jarvan IV' ? 'JarvanIV' :
    champion === "Kai'Sa" ? 'Kaisa' :
    champion === "Kha'Zix" ? 'Khazix' :
    champion === "Kog'Maw" ? 'KogMaw' :
    champion === "LeBlanc" ? 'Leblanc' :
    champion === "Lee Sin" ? 'LeeSin' :
    champion === "Master Yi" ? 'MasterYi' :
    champion === "Miss Fortune" ? "MissFortune" :
    champion === "Nunu & Willump" ? "Nunu" :
    champion === "Rek'Sai" ? "RekSai" :
    champion === "Tahm Kench" ? "TahmKench" :
    champion === "Twisted Fate" ? "TwistedFate" :
    champion === "Vel'Koz" ? "Velkoz" :
    champion === "Xin Zhao" ? "XinZhao" :
    champion === "Wukong" ? "MonkeyKing" :
    champion}.png` 
    return value
}