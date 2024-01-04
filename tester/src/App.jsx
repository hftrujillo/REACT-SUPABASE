import { ShowTable, Header } from './sections';

function App() {

  return (
    <>
      <header className = "p-8 bg-[#FFF5E0]">
        <Header/>
      </header>
      <section>
        Navbar
      </section>
      <section>
        Hero
      </section>
      <section>
        BuyWidgets
      </section>
      <section className = "bg-[#141E46]">
        Footer
      </section>
    </>
  );
}

export default App;