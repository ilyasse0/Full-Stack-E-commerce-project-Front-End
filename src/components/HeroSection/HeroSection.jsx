import HeroImg from '../../assets/img/hero-img.png';

const HeroSection = () => {
    return (
        <div className='relative delx items-center bg-cover flext-start bg-center text-left h-screen w-full  '
            style={{ backgroundImage: `url(${HeroImg})` }} >
            <div className='absolute top-0 right-0 bottom-0 left-0'>
                <main className='px-10 lg:px-24 z-10' >
                    <div className='text-left'>
                        <h2 className='text-2xl text-white mt-20'>T-Shirt / Tops</h2>
                    </div>
                    <p className='mt-3 text-white sm:mt-5 sm:max-w-xl text-6xl '> Summer <br />
                        Value Pack</p>
                        <p className='mt-7 text-white sm:mt-5 sm:max-w-xl text-2xl'> cool / colorful / comfy</p>
                        <button className='border rounded mt-6 border-white hover:bg-white hover:text-black hover:border-orange-500 text-orange-500 bg-white w-44 h-12'>
                    Shop Now
                </button>
                </main>

            </div>
        </div>
    )
}

export default HeroSection
