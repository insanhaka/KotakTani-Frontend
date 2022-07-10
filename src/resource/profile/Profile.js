import React from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Pp from '../../assets/img/noimg-user.png';
import Icon from '@mdi/react';
import { mdiAccountCog } from '@mdi/js';
import { mdiInformation } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import Button from 'react-bootstrap/Button';
import { 
    Link,
    useNavigate 
} from "react-router-dom";

import Authtab from '../components/Authtab';

function Profile() {

    let navigate = useNavigate();
    
    const logout = () => {
        localStorage.removeItem('passport');
        navigate("/", { replace: true });
    }

  return (
    <div className="App">
      
        <Authtab/>

        <div className='container pt-3'>
            <div className='row p-5'>
                <div className='col-sm-2 text-center'>
                    <Image src={Pp} className="img-fluid mb-5" alt="User Image"/>
                </div>
                <div className='col-sm-10'>
                    <h1>Insan Hadi Karunia</h1>
                    <p>insanhadikarunia@gmail.com</p>
                    <br/>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to='/edit/{id}/profile'>
                                <Icon path={mdiAccountCog} size={1} style={{ marginRight: 10 }} />
                                Pengaturan Akun
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to='/about'>
                                <Icon path={mdiInformation} size={1} style={{ marginRight: 10 }} />
                                Tentang Kami
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button onClick={logout} variant="light">
                                <Icon path={mdiLogout} size={1} style={{ marginRight: 10 }} />
                                Keluar
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Profile;
