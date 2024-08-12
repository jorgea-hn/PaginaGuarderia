import Navbar from "../Navbar"
import Footer from "../Footer"

const Egresados: React.FC = ()=>{
    return(
        <div>
            <Navbar/>
            <div className="min-h-screen px-6 pt-20">
                <h2 className="text-4xl text-center">Egresados Happy Face</h2>
            </div>
            <Footer/>
        </div>
    )
}

export default Egresados