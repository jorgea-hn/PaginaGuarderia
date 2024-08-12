
interface Nivel{
    img: string;
    title: string;
    description: string;
    color:string
}

interface CardNivelProps{
    nivel: Nivel
}

const CardNiveles: React.FC<CardNivelProps> = ({nivel})=>{
    return(
        <div className="w-full p-4">
            <div className={`flex w-full p-5 ${nivel.color} h-full rounded-md`}>
                <div className="w-1/5 items-center p-5">
                    <img className="" src={nivel.img} alt="" />
                </div>
                <div className="w-4/5 p-8">
                    <h4 className="text-center my-4 text-2xl">{nivel.title}</h4>
                    <p className="text-justify">{nivel.description}</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default CardNiveles