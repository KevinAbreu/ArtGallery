class Classic{
  constructor(art_url){
    this.frame = 'black-border'
    this.art_url = art_url
  }
  render(){
    let thing = document.createElement('div')
    thing.style.width = '1000px'
    thing.style.height = '1000px'
    thing.style.backgroundColor = 'red'
    thing.style.backgroundImage = `url(${this.art_url})`
    document.body.appendChild(thing)
    // this.art_url = ''
  }
}

let pic = new Classic("https://i.ytimg.com/vi/kJ2dr9jAThY/maxresdefault.jpg")
let pic2 = new Classic("https://i.redd.it/daoyaisk14k11.jpg")
// console.log(pic.rend)
pic.render()
pic2.render()
