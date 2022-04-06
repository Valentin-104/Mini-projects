const textarea = document.getElementById('textarea')
const tags = document.querySelector('.tags')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    const tagList = input.split(',').filter(input => input.trim() !== '').map(input => input.trim())

    tags.innerHTML = ''

    tagList.forEach(tag => {
        const span = document.createElement('span')
        span.classList.add('tag')
        span.innerText = tag
        tags.appendChild(span)
    })
}

function randomSelect() {
    const interval = setInterval(() => {
        const randomTag = pickRandomtag()
        highlightTag(randomTag)
        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100)        
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        
        setTimeout(() => {
            const randomTag = pickRandomtag()
            highlightTag(randomTag)               
        }, 100)        
    }, 3000)
}

function pickRandomtag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}