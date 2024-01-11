import { Header, Footer } from '../sections';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';
import ProButton from '../components/ProButton';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Account = () => {

  return (
    <>
    <Header/>
    <h1>ACCOUNT PAGE</h1>
    <button onClick = ''>Logout</button>
    <Footer/>
    </>
  )
}

export default Account