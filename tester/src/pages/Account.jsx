import { Header, Footer } from '../sections';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';
import ProButton from '../components/ProButton';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Account = () => {

  const navigate = useNavigate();
  
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      console.log('SIGNED_IN', session);
      navigate('/Account');
    } else if (event === 'SIGNED_OUT') {
      console.log('SIGNED_OUT', session);
    } else {
      console.log("No action taken.")
    }
  })

  const signOutUser = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      } else {
        console.log('User logged out successfully');
        [
          window.localStorage,
          window.sessionStorage,
        ].forEach((storage) => {
          Object.entries(storage)
            .forEach(([key]) => {
              storage.removeItem(key)
            })
        })
        navigate('/Home');
      }
    } catch (error) {
      console.log('Error logging out: ', error.message);
    }
  }

  return (
    <>
    <Header/>
    <h1>ACCOUNT PAGE</h1>
    <button onClick = {signOutUser}>Logout</button>
    <Footer/>
    </>
  )
}

export default Account