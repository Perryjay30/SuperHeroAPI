const SUPERHERO_TOKEN = '973989167373837'

const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const getHeroButton = document.getElementById('getHeroButton')

const heroImageDiv = document.getElementById('heroImage')

const searchButtonDiv = document.getElementById('searchButton')

const searchInputDiv = document.getElementById('searchInput').innerText

const heroName = document.getElementById('heroName')

const heroStat = document.getElementById('heroStats')

const getRandomSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    const superHero = json
    showHeroInfo(superHero)
    // const name = `<h2>${json.name}</h2>`
    // heroImageDiv.innerHTML = `${name}<img src="${json.image.url}" height=200 width=200/>${stats}`
  })
}

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`
  const img = `<img src="${character.image.url}" height=200 width=200/>`
  const statHero = Object.keys(character.powerstats).map(stat => {
    return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')
  
  // console.log(starHero.join(''))

  heroImageDiv.innerHTML = `${name}${img}${statHero}`
}


const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
    showHeroInfo(hero)
  })
}

const randomHero = () => {
  const randomHeroButton = 731
  return Math.floor(Math.random() * randomHeroButton) + 1
}

getHeroButton.onclick = () => getRandomSuperHero(randomHero())
searchButtonDiv.onclick = () => getSearchSuperHero(searchInput.value)

// const img = "https://www.superherodb.com/pictures2/portraits/10/100/10405.jpg"

// document.querySelector('body').innerHTML += `<img src="${img}" height=200 width=200/>`