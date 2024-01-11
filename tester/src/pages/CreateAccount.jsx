import { Header, Footer } from '../sections';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {

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

  return (
    <div>
        <Header />
        <div className = "flex justify-center pb-5 bg-cweam">
        </div>
        <Auth supabaseClient={supabase} providers={['google']} appearance={{

            extend: false,
            className: {
                button: "btn btn-primary bg-dashing-pink hover:bg-[#db5656] text-white border-dashing-pink hover:border-dashing-pink hover:text-[#c0c0c0]",
                container: "flex flex-col items-center gap-4 bg-cweam pb-2",
                input: "bg-white rounded-md p-2 flex-row",
                divider: "bg-cweam p-2",
                label: "text-navy-sucks pr-4",
                anchor: "text-navy-sucks hover:text-[#5e7aeb]"
            }
        }}/>
        <Footer />
    </div>
  )
}

export default CreateAccount