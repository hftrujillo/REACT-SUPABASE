import { ShowTable, Header, Hero, Footer } from './sections';

function App() {

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
      <section class = "bg-[#141E46]">
        <Footer/>
      </section>
    </>
  );
}

export default App;