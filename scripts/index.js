
window.onload = function (){
    const postsContainer = document.getElementById('main-posts--container'); 

    fetchPosts('mijel.dev')
        .then(data => {
            data.items.map(post => {
                const articleContainer = document.createElement('div')
                articleContainer.classList.add('article')

                articleContainer.innerHTML = `
                    <img src="./statics/images/mmmmmmfood-historia 1.png" alt="Article Image">
                    <div>
                        <h1>${post.title}</h1>
                        <a href="${post.link}" target="_blank">Ver artículo completo</a>
                        <h4>Fecha: ${post.pubDate}</h4>
                    </div>
                `

                postsContainer.appendChild(articleContainer)
            })
        })
}


const fetchPosts = async(user) => {
    const api  = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${user}` 
    const resp = await fetch(api)
    const data = await resp.json()
    return data
}