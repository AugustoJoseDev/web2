const pages = require('./pages.json')

function getPageData(nomeEquipe){
    let filtered = pages.filter(e => e.equipe.toLocaleLowerCase() == nomeEquipe.toLocaleLowerCase())
    
    if(filtered.length !== 1) return {error:404}

    return filtered[0]
}

module.exports = {getPageData}