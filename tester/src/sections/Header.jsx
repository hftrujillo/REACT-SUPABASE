import Button from '../components/Button';
import UserHeader from '../components/UserHeader';

const Header = () => {
  return (
    <header className = "p-8 bg-[#FFF5E0]">
      <div className = "flex flex-row justify-end">
        {/*<UserHeader/>*/}
      </div>
      <a href = "/">
      <div className = "flex flex-row items-center justify-center">
        <h1 className= "flex flex-col items-center font-bold text-3xl text-[#BB2525]">
          <span>
            Widget
          </span>
          <span>
            Point
          </span>
        </h1>
        <div className = "p-5 text-[#BB2525] font-bold text-7xl">
          W
        </div>
      </div>
      </a>
      <nav className = "flex flex-row justify-center pt-6">
        <a href = "/Home">
          <Button label = "Home"/>
        </a>
        <a href = "/Payment">
          <Button label = "Pricing"/>
        </a>
        <a href = "#contact us">
          <Button label = "About Us"/>
        </a>
        <a href = "/CreateAccount">
          <Button label = "Account"/>
        </a>
      </nav>
    </header>
  )
}

export default Header