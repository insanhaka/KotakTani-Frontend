import React from 'react';
import Image from 'react-bootstrap/Image';
import Empty from '../../assets/img/dv-empty.png';
import '../../assets/css/farm.css';
import Button from 'react-bootstrap/Button'

import Authtab from '../components/Authtab';

function Device() {
  return (
    <div className="App">
      <Authtab/>

      <div className='container'>
            <div className='row p-4'>
                <div className='col-sm-6 text-center'>
                    <Image src={Empty} className="img-fluid mb-5" alt="Empty Garden"/>
                </div>
                <div className='col-sm-6 oops'>
                    <h5>Oops.. Kamu belum terkoneksi dengan perangkat apapun</h5>
                    <center>
                    <Button href="/device/create" className="btn w-80 mt-3 mb-0" style={{backgroundColor: '#778beb', color: '#fff'}}>Tambah Perangkat</Button>
                    </center>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Device;
