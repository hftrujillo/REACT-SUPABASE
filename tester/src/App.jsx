import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://nniwatmmmiliqazeqqah.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uaXdhdG1tbWlsaXFhemVxcWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzOTAyNjAsImV4cCI6MjAxOTk2NjI2MH0.18fO9ARw3owvL_bNDhJMsook4MBU0YzwYdMQyXW64z4");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;