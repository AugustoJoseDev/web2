const pages = require('./pages.json')

function getPageData(nomeEquipe){
    let filtered = pages.filter(e => beautify(e.equipe) == beautify(nomeEquipe) )
    
    if(filtered.length !== 1) return {error:404}

    return filtered[0]
}

function beautify(str){
    return str.toLowerCase().replace(/\s+/g,'-').normalize("NFD").replace(/[^a-zA-Z-]/g,"")
}

module.exports = {getPageData}