
const Footer = () => {
  return (
    <footer class = "text-[#849bf5] bg-[#141E46]">
        <section class = "bg-dashing-pink p-6"/>
        <header class = "flex gap-40 pl-20 pt-10">
            <div>
                <h1 class = "font-bold pb-2 text-2xl flex justify-center">MENU</h1>
                <ul class = "flex flex-col items-center">
                    <li class = "hover:text-[#9eb1fa]"><a href = "/Home">Home</a></li>
                    <li class = "hover:text-[#9eb1fa]"><a href = "/Payment">Pricing</a></li>
                    <li class = "hover:text-[#9eb1fa]"><a href = "/">About Us</a></li>
                    <li class = "hover:text-[#9eb1fa]"><a href = "/CreateAccount">Account</a></li>
                </ul>
            </div>
            <div>
                <h1 class = "font-bold pb-2 text-2xl flex justify-center">CONTACT US</h1>
                <ul class = "flex flex-col items-center">
                    <li>Phone: XXX-XXX-XXXX</li>
                    <li>Instore: 243 Widget Avenue</li>
                    <li>Email: WidgetPoint@widgets.com</li>
                    <li>Hours: M-F 9:00 am-6:00 pm</li>
                </ul>
            </div>
            <div>
                <h1 class = "font-bold pb-2 text-2xl flex justify-center">SOCIAL</h1>
                <ul class = "flex flex-col items-center">
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>R Widget</li>
                    <li>Snapchat</li>
                </ul>
            </div>
            <div>

            </div>
        </header>
        <div class = "flex flex-row items-center justify-between pt-5 pl-20">
            <h2 class = "">COPYRIGHT 2024 WIDGETS ALL RIGHTS RESERVED</h2>
            <div class = "flex flex-row items-center justify-center">
                <h1 class= "flex flex-col items-center font-bold text-3xl text-[#849bf5]">
                    <span>
                    Widget
                    </span>
                    <span>
                    Point
                    </span>
                </h1>
                <div class = "p-5 text-[#849bf5] font-bold text-7xl">
                W
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer