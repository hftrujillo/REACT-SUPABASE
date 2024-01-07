import { Header, Footer } from '../sections';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../Supabase';

const CreateAccount = () => {
  return (
    <createAccount>
        <Header />
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
    </createAccount>
  )
}

export default CreateAccount