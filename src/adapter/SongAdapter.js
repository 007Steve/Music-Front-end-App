class SongAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/songs'
    }

    getSong(){
        return fetch('http://localhost:3000/songs').then(res => res.json())
    }
}