class Classic{
  constructor(art_url){
    this.frame = 'black-border'
    this.art_url = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
  }
  render(){
    let thing = document.createElement('div')
    thing.style.width = '1000px'
    thing.style.height = '1000px'
    thing.style.backgroundColor = 'red'
    document.body.appendChild(thing)
    this.art_url = ''
  }
}
