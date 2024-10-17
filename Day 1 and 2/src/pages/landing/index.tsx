// should be in function based . Not class based
// components name should be in capital
// components should always be returned in small bracket () because it makes the single line
import './index.css'
// import '../.'

const LandingPage=()=>{

    let name: string = "Reason Khadgi";
    let email:string = "Reasonkhadgi100@gmail.com";
    let address:string = "Bhotebahal" ;
    return(
        <>
        <h1 className='text-red-600'>{name}</h1>
        <p>{email}</p>
        <p>{address}</p>
            <p>
                This is landing page  
            </p>
            <hr></hr>  
            {/* All tag should be in pair tag in react even if it is single tag in html */}
            <p className="text-1xl font-bold underline text-red-400">
      Hello world!
    </p>
        </>
    )
}

export default LandingPage
