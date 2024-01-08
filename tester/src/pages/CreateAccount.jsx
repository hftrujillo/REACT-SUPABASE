import { Header, Footer } from '../sections';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';
import ProButton from '../components/ProButton';

const handleSignOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
    // Redirect or perform additional actions after successful signout
  } catch (error) {
    console.error('Sign out error:', error.message);
  }
};

const handleSignIn = async () => {

  try {
    const { error } = await supabase.auth.
  }
}

const CreateAccount = () => {
  return (
    <div>
        <Header />
        <div class = "flex justify-center pb-5 bg-cweam">
          <ProButton label = "Logout" onClick = {handleSignOut}></ProButton>
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