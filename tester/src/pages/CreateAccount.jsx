import { Header, Footer } from '../sections';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../Supabase';

const CreateAccount = () => {
  return (
    <createAccount>
        <Header />
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }}/>
        <Footer />
    </createAccount>
  )
}

export default CreateAccount