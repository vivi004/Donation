function Dashboard(){
    return(

        <>
        <div className='main hv-100 wv-100 flex flex-col'>
    <div className='appbar hv-5 wv-100 flex theme-bg items-center justify-end flex-row'>
    <div className='wv-90 flex theme-bg items-center justify-end'>
    appbar
    </div>
    </div>
    <div className='content-container hv-90 flex flex-row'>
    <div className='leftbar wv-20 theme-bg vh-95'>
    leftbar
    </div>
    <div className='content wv-80 vh-90 flex justify-center items-center'>
    <div className='vw-80 vh-90 theme-bg-dark'>
    mycontent
    </div>
    </div>
    </div>
    </div>
        </>
    )
}

export default Dashboard;