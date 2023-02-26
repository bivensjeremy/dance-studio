import Image from "next/image";
import dance07 from '../../public/dance/dance07.jpeg'
import dance05 from '../../public/dance/dance05.png'
import model08 from '../../public/model/model08.jpeg'
import photography04 from '../../public/photography/photography04.jpeg'
import photography09 from '../../public/photography/photography09.jpeg'

const photoGridImages = [
    {
        id: 1,
        image: dance07,
    },
    {
        id: 2,
        image: dance05,
    },
    {
        id: 3,
        image: model08,
    },
    {
        id: 4,
        image: photography04,
    },
    {
        id: 5,
        image: photography09,
    }
]

const ImageCard = ({image, id, alt}) => {
    return(
        <div key={id} className="flex h-60 w-100">
            <div className="relative w-full">
                <Image
                    src={image}
                    alt='Image Card'
                    fill={true}
                    sizes="33vw"
                    className="object-cover"
                />
            </div>
        </div>
    )
}
const ImageBar = () => {
    return (
        <div id="ViewOurWork" className="m-auto py-12">
            <div className="grid grid-rows-1 grid-flow-col ">
                {photoGridImages.map(
                    ImageCard
                )}
            </div>
        </div>
            
    );
}

export default ImageBar;