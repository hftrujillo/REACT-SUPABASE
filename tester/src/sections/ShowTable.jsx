import { useEffect, useState } from "react";
import { supabase } from '../Supabase';

const ShowTable = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);
  
    async function getCountries() {
      const { data } = await supabase.from("countries").select();
      setCountries(data);
    }
  
    return (
  
      <ul className="text-3xl font-bold underline">
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
      
    );
};

export default ShowTable