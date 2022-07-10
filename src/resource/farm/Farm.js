import React from 'react';
import Image from 'react-bootstrap/Image';
import Empty from '../../assets/img/gh-empty.png';
import '../../assets/css/farm.css';
import Button from 'react-bootstrap/Button'

import Authtab from '../components/Authtab';

function Farm() {
  return (
    <div className="App">
      <Authtab/>

      <div className='container'>
            <div className='row p-4'>
                <div className='col-sm-6 text-center'>
                    <Image src={Empty} className="img-fluid mb-5" alt="Empty Garden"/>
                </div>
                <div className='col-sm-6 oops'>
                    <h5>Oops.. Kamu belum membuat data kebun kamu</h5>
                    <center>
                    <Button href="/farm/create" className="btn w-80 mt-3 mb-0" style={{backgroundColor: '#778beb', color: '#fff'}}>Tambah Data</Button>
                    </center>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Farm;
