import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Headimg from '../../assets/img/head-img.png';
import {
  Link
} from "react-router-dom";
import '../../assets/css/signin.css';

import Fronttab from '../components/Fronttab';

function Signin() {

  const apiUrl = useSelector(state => state.ApiReducer);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {

    if (email === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            text: 'Mohon isi form dengan lengkap',
            showConfirmButton: false,
            timer: 2500
        })
        setLoading(false);
    }else {
        axios.post(apiUrl.url+'/postlogin', {
            email: email,
            password: password
        })
        .then(function (response) {
            var res = response.data.message;
            var token = response.data.token;
            if (res === "success") {
                localStorage.setItem('passport', token);
                Swal.fire({
                    icon: 'success',
                    title: 'Selamat Datang',
                    text: response.data.user,
                    showConfirmButton: false,
                    timer: 2000
                })
                setLoading(false);
                history.push("/dashboard");

            }else if (res === "error") {
                Swal.fire({
                    icon: 'error',
                    text: 'Email atau Password yang anda masukan salah',
                    showConfirmButton: false,
                    timer: 2500
                })
                setLoading(false);
            }else {
                Swal.fire({
                    icon: 'warning',
                    text: 'Akun ini sedang tidak aktif',
                    showConfirmButton: false,
                    timer: 2500
                })
                setLoading(false);
            }
        })
        .catch(function (error) {
            console.log("error nih");
            Swal.fire({
                icon: 'error',
                text: 'Mohon maaf, sedang ada gangguan pada server',
                showConfirmButton: false,
                timer: 2500
            })
            setLoading(false);
        });
    }
}

  return (
    <div className="App">
        <Fronttab/>
        
        <div className="page-header min-vh-75">
          <div className="container" style={{paddingTop : '3%'}}>
            <div className="row">

              <div className="col-md-6">
                  <br/>
                  <Image src={Headimg} className="img-fluid" alt="Head Image"/>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                <div className="card card-plain mt-2">
                  <div className="card-header pb-0 text-left bg-transparent">
                    <h3 className="font-weight-bolder">Masuk</h3>
                  </div>
                  <div className="card-body">
                      <form role="form">
                          <label>Email</label>
                          <div className="mb-3">
                              <Form.Control type="text" className="form-control" placeholder="Email kamu" id="email" onChange={(event)=> setEmail(event.target.value)} />
                          </div>
                          <label>Password</label>
                          <div className="mb-3">
                              <Form.Control type="password" className="form-control" placeholder="Password" id="password" onChange={(event)=> setPassword(event.target.value)} />
                          </div>
                          <div className="text-center">
                              <button onClick={submit} className="btn w-100 mt-4 mb-0" style={{backgroundColor: '#778beb', color: '#fff'}}>Masuk</button>
                          </div>
                      </form>
                      <br/>
                      <div className="card-footer text-center pt-0 px-lg-2 px-1">
                          <p className="mb-4 text-sm mx-auto">
                              Belum mempunyai akun?
                              <Link to="/daftar" className="font-weight-bold" style={{marginLeft: '4%', color: '#546de5'}}> Daftar</Link>
                          </p>
                      </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

    </div>
  );
}

export default Signin;
