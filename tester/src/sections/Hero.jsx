import PinkButton from '../components/PinkButton';

const Hero = () => {
  return (
    <section>
      <div className="bg-cweam">
          <h1 className = "text-soft-red font-bold flex flex-col items-start pl-16 pt-12 pb-12 text-8xl ">
              <span>
                  Making Life Easier,
              </span>
              <span className="pt-4">
                  One Widget at a Time.
              </span>
          </h1>
          <div className = "flex justify-start gap-20 pb-10 items-center">
            <h2 className = "pl-20 pb-8 lg:max-w-lg info-text text-navy-sucks text-xl">
              Discover our newest and most popular widgets we have to offer to the market, create an account and sign up to our newsletter for widget deals and coupons.
            </h2>
            <a href="/CreateAccount">
              <PinkButton label = "Register"></PinkButton>
            </a>
          </div>
      </div>
    </section>
  )
}

export default Hero