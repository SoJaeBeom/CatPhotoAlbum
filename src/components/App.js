import Breadcrumb from './Breadcrumb.js'
import ImageView from './ImageView.js'
import Loading from './Loading.js'
import Nodes from './Nodes.js'

const dummy_data = [
  {
    id: '1',
    name: '노란고양이',
    type: 'DIRECTORY',
    filePath: null,
    parent: null,
  },
  {
    id: '3',
    name: '까만고양이',
    type: 'DIRECTORY',
    filePath: null,
    parent: null,
  },
  {
    id: '10',
    name: '고등어무늬 고양이',
    type: 'DIRECTORY',
    filePath: null,
    parent: null,
  },
  {
    id: '13',
    name: '삼색이 고양이',
    type: 'DIRECTORY',
    filePath: null,
    parent: null,
  },
  {
    id: '14',
    name: '회색고양이',
    type: 'DIRECTORY',
    filePath: null,
    parent: null,
  },
  {
    id: '20',
    name: '하얀고양이',
    type: 'DIRECTORY',
    filePath: '/images/20201218_002047.jpg',
    parent: null,
  },
]

export default function App($app) {
  this.state = {
    isRoot: false,
    nodes: [],
    depth: [],
    selectedFilePath: null,
    isLoading: false,
  }

  const breadcrumb = new Breadcrumb({
    $app,
    initialState: this.state.depth,
  })

  const nodes = new Nodes({
    $app,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    },
  })

  const imageView = new ImageView({
    $app,
    initialState: this.state.selectedFilePath,
  })

  const loading = new Loading({
    $app,
    initialState: this.state.isLoading,
  })

  this.setState = (nextState) => {
    this.state = nextState
    breadcrumb.setState(this.state.depth)
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    })
    imageView.setState(this.state.selectedFilePath)
    loading.setState(this.state.isLoading)
  }

  const init = () => {
    const nextState = {
      isRoot: false,
      nodes: [],
      depth: [],
      selectedFilePath: null,
      isLoading: false,
    }

    this.setState(nextState)
  }

  // init()
}
