class Song {
    constructor(id, artist , title , genre, mp3 , image , album){
        this.id = id
        this.artist = artist
        this.title = title
        this.genre = genre
        this.mp3 = mp3
       this.image = image
       this.album = album
       this.renderSong()
    }


    deleteSong(e){
        const id  = parseInt(e.target.parentElement.id)
        fetch(`http://localhost:3000/songs/${id}`,{
            method: 'DELETE'
        })
        .then(() => {
            document.getElementById('song-container').removeChild(document.getElementById(id))
        })

    }


    songHTML(){
        return `
        <a><img src="${this.image}"/></a>
        <h2 id="texts">${this.artist}</h2>
        <h3 id="texts">${this.title}</h3>
        <button class="delete">Delete</button>
        `
    }
    
    renderSong(){
        const songContainer = document.getElementById('song-container')
        const songCard = document.createElement('div')
        songCard.classList.add('song-card')
        songCard.id = this.id
        songCard.innerHTML += this.songHTML()
        songContainer.appendChild(songCard)
        songCard.addEventListener('click', e => {
            if (e.target.className.includes('delete')) this.deleteSong(e)
  
                
                
        })
    }


}


