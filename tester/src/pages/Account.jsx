import { Header, Footer } from '../sections';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ProButton from '../components/ProButton';
import AccountCard from '../components/AccountCard'

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
    <h1 className="bg-cweam text-2xl flex justify-center font-bold text-soft-red pb-8">ACCOUNT PAGE</h1>
    <div className="bg-cweam pb-4 flex justify-center">
      <ProButton onClick = {signOutUser} label = {'Logout'}/>
    </div>
    <AccountCard/>
    <Footer/>
    </>
  )
}

export default Account