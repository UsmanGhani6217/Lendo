import React , {useState} from 'react'

const Bottom = () => {
    const [active , setActive] = useState(0)
  return (
    <div className='bottom'>
      <div className='bottom-title'>You Might Want to Know</div>
      <div className='borderBottom'>
      <div className='wrap'>
        <div className='bottom-question'>Why should I trust this tool?</div>
        <div onClick={()=>{if(active == 1 ){
            setActive(0)
        }else{
            setActive(1)
        }
        }}><img src='/arr2.png'/></div>
      </div>
      <div className={`bottom-description ${active == 1 ? '' : 'hide'}`}>
        Content...
      </div>
      </div>

      <div className='borderBottom'>
      <div className='wrap'>
        <div className='bottom-question'>What risks are related to investments?</div>
        <div onClick={()=>{if(active == 2 ){
            setActive(0)
        }else{
            setActive(2)
        }
        }}><img src='/arr2.png'/></div>
      </div>
      <div className={`bottom-description ${active == 2 ? '' : 'hide'}`}>
        Content...
      </div>
      </div>

      <div className='borderBottom'>
      <div className='wrap'>
        <div className='bottom-question'>What is the Auto-Investment?</div>
        <div onClick={()=>{if(active == 3 ){
            setActive(0)
        }else{
            setActive(3)
        }
        }}><img src='/arr2.png'/></div>
      </div>
      <div className={`bottom-description ${active == 3 ? '' : 'hide'}`}>
        Content...
      </div>
      </div>
    </div>
  )
}

export default Bottom