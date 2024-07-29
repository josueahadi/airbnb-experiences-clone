import airbnbLogo from '../assets/airbnb-logo.png'
import experiencesGrid from '../assets/photo-grid.png'

export default function Header() {
    return (
        <header className='w-full'>
            <nav className='px-20 py-8 shadow-custom w-full'>
                <a href="#" target="_blank">
                    <img src={airbnbLogo} className="w-24" alt="Airbnb Logo" />
                </a>
            </nav>
            <div className='flex justify-center'>
                <img src={experiencesGrid} className='w-2/3 py-8' alt="Experience Grid" />
            </div>
            <div className='text-left px-20 pt-8'>
                <h1 className='font-semibold text-4xl'>Online Experiences</h1>
                <p className='font-light text-base pt-2'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </header>
    )
}
