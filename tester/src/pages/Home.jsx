import { ShowTable, Header, Hero, Footer } from '../sections';
 
function Home() {

  return (
    <>
      <header class = "shadow-md">
        <Header/>
      </header>
      <section class = "">
        <Hero/>
      </section>
      <section class = "bg-dashing-pink p-6">
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
}

export default Home;