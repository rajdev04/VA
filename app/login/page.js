import React from 'react'


const page = () => {
  return (
    <>
        <div className='main'>
        <div className='overlay'></div>
            <div className='card'>
                <div className='top'>
                    <h1>VADIK ANUSTHANAM</h1>
                    {/* <img src='./preview3 white.png'/> */}
                </div>
                <div className='middle'>
                    <form>
                        <label>
                            Username or Email: <br/>
                            <input name='' placeholder='Enter your email' type='email'/>
                        </label>
                        <br/>
                        <label>
                            Password: <br/>
                            <input name='' placeholder='Enter your password' type='text'/>
                        </label>
                        <button className='b1' type='submit'>Login</button>
                    </form>
                </div>
                <div className='bottom'>
                    GOOGLE 
                </div>
            </div>
            <div className='overlaymain'></div>
        </div>
    </>
  )
}

export default page