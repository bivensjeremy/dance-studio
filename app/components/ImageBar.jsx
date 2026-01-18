import Image from "next/image";
import dance07 from '../../public/dance/dance07.jpeg'
import dance05 from '../../public/dance/dance05.png'
import model08 from '../../public/model/model08.jpeg'
import photography04 from '../../public/photography/photography04.jpeg'
import photography09 from '../../public/photography/photography09.jpeg'
import Link from "next/link";

const photoGridImages = [
    {
        id: 1,
        image: dance07,
        id: 'Dance'
    },
    {
        id: 2,
        image: dance05,
        id: 'Dance'
    },
    {
        id: 3,
        image: model08,
        id: 'Model'
    },
    {
        id: 4,
        image: photography04,
        id: 'Photography'
    },
    {
        id: 5,
        image: photography09,
        id: 'Photography'
    }
]

const ImageBar = () => {
    return (
        <div id="ViewOurWork" className="m-auto py-12">
            <div className="grid grid-rows-1 grid-flow-col ">
                {photoGridImages.map(({ image, id }, idx) => (
                    <Link href={`/products/${id}`} key={idx} className="flex h-60 w-full">
                        <div className="relative w-full">
                            <Image
                                src={image}
                                alt='Image Card'
                                fill={true}
                                sizes="33vw"
                                className="object-cover"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
            
    );
}

export default ImageBar;