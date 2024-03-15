//bootstrap import
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Card from './Components/Card'
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Csharp from './images/ccsharp.png'
import KompleWeb from './images/kompleweb.jpg'


function App() {


  return (
    <>
    
    <div className="bg-success navbar navbar-lg">
      <div className="container">
      <h3>Card Component</h3>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="d-flex justify-content-center">
            <Card title="Angular" desc="Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins." image={Angular}/>
          </div>
        </div>
        <div className="col-md-3">
          <div className="d-flex justify-content-center">
          <Card title="Bootstrap" desc="Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins." image={Bootstrap}/>
          </div>
        </div>
        <div className="col-md-3">
          <div className="d-flex justify-content-center">
          <Card title="Csharp" desc="Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins." image={Csharp}/>
          </div>
        </div>
        <div className="col-md-3">
          <div className="d-flex justify-content-center">
          <Card title="Full Web" desc="Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins." image={KompleWeb}/>
          </div>
        </div>

        

      </div>
    </div>      

    </>
  )
}

export default App
