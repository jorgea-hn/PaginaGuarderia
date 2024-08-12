import Footer from "../Footer"
import Introduccion from "../Introduccion"
import Navbar from "../Navbar"

const Home: React.FC = ()=>{
    return(
        <div>
            <Navbar/>
            <Introduccion/>
            <Footer/>
        </div>
    )
}

export default Home