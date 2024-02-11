class User {
  constructor(id: string) {
    this.id = id
    this.isSelected = false
  }

  id: string;
  isSelected: boolean = false

  get init(): void {
    let thisObject =  document.getElementById(this.id)
    let cover = document.getElementById(`${this.id}-cover`)

    thisObject!.addEventListener('click', () => {
      if (this.isSelected) {
        cover!.style.opacity = '0'
        this.isSelected = false
        console.log(`${this.id} just got deselected`);
      } else {
        cover!.style.opacity = '0.5'
        this.isSelected = true
        console.log(`${this.id} just got selected`);
      }
    })

    //DEBUG: console.log('just initiated ' + this.id)
    return;
  }
}


class Vid {
  Vid(id: string, data: {}) {
    this.id = id
    this.data = data
  }
  id
  data

  get init(): void {
    let thisObject =  document.getElementById(this.id)

    thisObject!.addEventListener('click', () => {
      localStorage.setItem('videoDetails', JSON.stringify(this.id))
      console.log(JSON.parse(localStorage.getItem('videoDetails')))
    })
    return;
  }
}