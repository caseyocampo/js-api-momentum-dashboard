const imageAuthorEl = document.getElementById('imageAuthorEl')
const coinImage = document.getElementById('coinImage')
const coinName = document.getElementById('coinName')
const currentPrice = document.getElementById('currentPrice')
const dayHigh = document.getElementById('dayHigh')
const dayLow = document.getElementById('dayLow')
const currentTimeEl = document.getElementById('currentTimeEl')

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
        currentPrice.textContent = `Current price: ${data.market_data.current_price.usd} USD`
        dayHigh.textContent = `24-hour High: ${data.market_data.high_24h.usd}`
        dayLow.textContent = `24-hour Low: ${data.market_data.low_24h.usd}`
    })
    .catch(err => console.error(err))

const time = new Date()
const currentTime = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
})

currentTimeEl.textContent = currentTime
