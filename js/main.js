const elForm = findElement ('.film__form');
const elInput = findElement ('.search__input');
const elFilmList = findElement('.films__list');

const API_KEY = '78433eb'

fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=films`)
.then(response => response.json())
.then(filmsApi =>
    
    
    filmsApi.Search.forEach(film => {
        let moreBtn = document.createElement('button')
        let newLi = document.createElement('li')
        let newHeading = document.createElement('h3')
        newHeading.textContent = film.Title
        newHeading.classList.add('newheading')
        let newYear = document.createElement('p')
        let apiImg = document.createElement('img')
        moreBtn.setAttribute('class', 'more__btn')
        apiImg.setAttribute('class', 'img__api')
        apiImg.setAttribute('src', 'bnnma')
        apiImg.setAttribute('width', '250')
        apiImg.setAttribute('height', '250')
        newLi.setAttribute('class', 'list__item')
        newYear.classList.add('yeartext')
        newYear.textContent = film.Year
        newHeading.textContent = film.Title
        apiImg.src = film.Poster
        moreBtn.textContent = 'More'
        
        newLi.appendChild(apiImg)
        newLi.appendChild(newHeading)
        newLi.appendChild(newYear)
        newLi.appendChild(moreBtn)
        elFilmList.appendChild(newLi)
    })
    )
    
    
    elForm.addEventListener('submit', (evt) => {
        evt.preventDefault()
        if(elInput.value != '') {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${elInput.value}`)
            .then(response => response.json())
            .then(filmsApi =>
                renderFilmApi(filmsApi, elFilmList)
                )
            } else {
                return
            }
        })
        
        
        function renderFilmApi(array, element){
            element.innerHTML = null
            
            array.Search.forEach(film => {
                let newLi = document.createElement('li')
                let newHeading = document.createElement('h2')
                let newYear = document.createElement('p')
                let apiImg = document.createElement('img')
                let moreBtn = document.createElement('button')
                
                // element's class
                
                newHeading.classList.add('newheading')
                moreBtn.textContent = 'More'
                newYear.classList.add('yeartext')
                moreBtn.classList.add('more__btn')
                apiImg.setAttribute('src', 'bnnma')
                apiImg.setAttribute('width', '250')
                apiImg.setAttribute('height', '250')
                newLi.setAttribute('class', 'list__item')
                newYear.textContent = film.Year
                newHeading.textContent = film.Title
                apiImg.src = film.Poster
                
                // Append elements to newLi
                
                newLi.appendChild(apiImg)
                newLi.appendChild(newHeading)
                newLi.appendChild(newYear)
                newLi.appendChild(moreBtn)
                element.appendChild(newLi)
                
            })
        }
        