import { BigBoxData } from './BigBoxData'

export default function BigBox() {
    return (
        <>
            <div className='py-32 px-96 flex gap-10'>
                <div class="relative w-full h-full">
                    <img
                        src={BigBoxData[0].image}
                        style={{ height: "360px", width: "1fr" }}
                        alt={BigBoxData[0].id} />
                    <div class="absolute text-3xl text-white top-5 left-5">{BigBoxData[0].title}</div>
                </div>
                <div class="relative h-full w-full">
                    <img
                        src={BigBoxData[1].image}
                        style={{ height: "360px", width: "1fr" }}
                        alt={BigBoxData[1].id} />
                    <div class="absolute text-3xl text-white top-5 left-5">{BigBoxData[1].title}</div>
                </div>
            </div>
        </>
    )
}
