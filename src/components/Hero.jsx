import experiencesGrid from '../assets/photo-grid.png'

export default function Hero() {
    return (
        <section className='w-full'>
            <div className='flex justify-center'>
                <img src={experiencesGrid} className='w-2/3 py-10' alt="Experience Grid" />
            </div>
            <div className='text-left px-20'>
                <h1 className='font-semibold text-4xl'>Online Experiences</h1>
                <p className='font-light text-base md:text-2xl pt-3 md:w-3/5'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
    )
}
