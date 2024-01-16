import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const AccountCard = () => {

    const fetchUserData = async () => {

        try {
            const { data: { user } } = await supabase.auth.getUser();
        } catch (error) {
            console.error("Error fetching user data:", error.message);
        }
    }

  return (
    <div>
    <p>User ID:{user.id}</p>
    <p>Email:{user.email}</p>
  </div>
  )
}

export default AccountCard