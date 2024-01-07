import Button from '../components/Button';

const Header = () => {
  return (
    <header class = "p-8 bg-[#FFF5E0]">
      <a href = "/">
      <div class = "flex flex-row items-center justify-center">
        <h1 class= "flex flex-col items-center font-bold text-3xl text-[#BB2525]">
          <span>
            Widget
          </span>
          <span>
            Point
          </span>
        </h1>
        <div class = "p-5 text-[#BB2525] font-bold text-7xl">
          W
        </div>
      </div>
      </a>
      <nav class = "flex flex-row justify-center pt-6">
        <a href = "/Home">
          <Button label = "Home"/>
        </a>
        <a href = "/">
          <Button label = "Pricing"/>
        </a>
        <a href = "#contact us">
          <Button label = "About Us"/>
        </a>
        <a href = "/Login">
          <Button label = "Account"/>
        </a>
      </nav>
    </header>
  )
}

export default Header