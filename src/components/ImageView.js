export default function ImageView({ $app, initialState }) {
  this.state = initialState
  this.$target = document.createElement('div')
  this.$target.className = 'Modal ImageView'

  $app.appendChild(this.$target)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    console.log('ImageView render!!')
  }

  this.render()
}
