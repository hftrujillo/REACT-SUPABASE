import PinkButton from '../components/PinkButton';

const Hero = () => {
  return (
    <hero>
      <div class="bg-cweam">
          <h1 class = "text-soft-red font-bold flex flex-col items-start p-16 text-8xl ">
              <span>
                  Making Life Easier,
              </span>
              <span class="pt-4">
                  One Widget at a Time.
              </span>
          </h1>
          <div class = "flex flex-row">
            <h2 class = "pl-20 pb-8 lg:max-w-lg info-text text-navy-sucks text-xl">
              Discover our newest and most popular widgets we have to offer to the market, create an account and sign up to our newsletter for widget deals and coupons.
            </h2>
            <PinkButton label = "Register" class = "p-20"/>
          </div>
      </div>
    </hero>
  )
}

export default Hero