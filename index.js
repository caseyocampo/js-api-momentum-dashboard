let imageAuthorEl = document.getElementById('imageAuthorEl')

fetch(
    'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'
)
    .then(res => res.json())
    .then(data => {
        let backgroundImage = data.urls.regular
        document.body.style.backgroundImage = `url(${backgroundImage})`
        const imageAuthor = `By: ${data.user.name}`
        imageAuthorEl.textContent = imageAuthor
    })
    .catch(err => {
        document.body.style.backgroundImage =
            'url(http://placekitten.com/1000/1000)'
    })

const coinImage = document.getElementById('coinImage')
const coinName = document.getElementById('coinName')

fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(res => {
        if (!res.ok) {
            throw Error('Something went wrong')
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        coinImage.src = data.image.small
        coinName.textContent = data.name
    })
    .catch(err => console.error(err))
