import { ShowTable, Header, Hero, Footer } from '../sections';

const Login = () => {
  return (
    <login>
        <Header/>
        <div class="hero bg-cweam pb-10">
            <div class="hero-content flex-col">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold text-soft-red pb-4">Login</h1>
                </div>
                <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <form class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-navy-sucks">Email</span>
                            </label>
                            <input type="email" placeholder="email" class="input input-bordered bg-white" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-navy-sucks">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered bg-white" required />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover text-navy-sucks hover:text-[#5e7aeb]">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary bg-dashing-pink hover:bg-[#db5656] text-white border-dashing-pink hover:border-dashing-pink hover:text-[#c0c0c0]">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <section class = "bg-dashing-pink p-6">
        </section>
        <Footer />
    </login>
  )
}

export default Login