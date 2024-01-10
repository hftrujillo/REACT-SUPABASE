import { Header, Footer } from '../sections';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';
import ProButton from '../components/ProButton';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Account = () => {

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        Navigate("/Home");
    }

    async function getUserData() {
        try {
          const { data: { user } } = await supabase.auth.getUser();
          // Handle the 'user' data as needed
          console.log('User data:', user);
        } catch (error) {
          // Handle errors if any
          console.error('Error fetching user data:', error);
        }
      }
      
      // Call the asynchronous function
      getUserData();

  return (
    <>
    <Header/>
    <h1>ACCOUNT PAGE</h1>
    <ProButton label = "Logout" onClick = {() => signOutUser()}></ProButton>
    <Footer/>
    </>
  )
}

export default Account