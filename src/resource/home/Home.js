import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'
import Headimg from '../../assets/img/head-img.png';

import Noauthtab from '../components/Noauthtab';

function Home() {

  // const [tabactive, setTabactive] = useState([]);

  // useEffect(() => {
      
  // },[]);

  return (
    <div className="App">
        <Noauthtab/>
        <div className='container' style={{paddingTop : '5%'}}>
          <div className='row'>
            
            <div className='col-md-6'>
              <Image src={Headimg} className="img-fluid" alt="Head Image"/>
            </div>
            <div className='col-md-6' style={{paddingTop : '5%'}}>
              <h2>Bertani dengan mudah dan efisien, membuat hasil panen lebih maksimal</h2>
              <p>Kotaktani memberikan kemudahan untuk anda dalam bertani dengan bantuan teknologi.</p>
            </div>
            
          </div>
        </div>
    </div>
  );
}

export default Home;
