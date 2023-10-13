import desktopImage from '../../assets/desk.png'

function Banner(){
    return(
        <div style={{ backgroundImage: `url(${desktopImage})`, paddingTop: '13vh', paddingBottom: '13vh', textAlign: 'center'}}>
            <h1 className='text-4xl text-white font-rubik' >IP Address Tracker</h1>
        </div>
        
    )
}

export default Banner;