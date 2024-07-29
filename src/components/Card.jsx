import KatieZaferes from '../assets/katie-zaferes.png';
import StarIcon from '../assets/star.png';

export default function Card() {
    return (
        // <div className='card'>
        //     <button onClick={() => setCount((count) => count + 1)}>
        //         count is {count}
        //     </button>
        //     <p>
        //         Edit <code>src/App.jsx</code> and save to test HMR
        //     </p>
        // </div>
        <section className="pt-16 px-20">
            <div className="relative w-44 md:w-60">
                <img src={KatieZaferes} className='w-full rounded-xl' alt="Katie Zaferes" />
                <span className='uppercase text-[#222222] bg-[#FFFFFF] rounded-md px-2 py-1 absolute top-3 left-3'>Sold Out</span>
                <div className='flex items-center text-base md:text-lg'>
                    <img src={StarIcon} className='w-4 md:w-6' alt="Star Icon" />
                    <span>50.</span>
                    <span className='text-[#918E9B]'>(6)</span>
                    <span className='text-[#918E9B]'>&#8226; USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className='font-bold'>From $136</span> / person</p>
            </div>
        </section>

    )
}