import { Header, Footer } from '../sections';

const CreateAccount = () => {
  return (
    <createAccount>
        <Header />
        <div class="hero bg-cweam pb-10">
            <div class="hero-content flex-col">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold text-soft-red pb-4">Create Account</h1>
                </div>
                <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <form class="card-body">
                    <div class="form-control">
                            <label class="label">
                                <span class="label-text text-navy-sucks">Username</span>
                            </label>
                            <input type="username" placeholder="username" class="input input-bordered bg-white" required />
                        </div>
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
                            <label class="label flex-col items-start">
                                <a href="/Login" class="label-text-alt link link-hover text-navy-sucks hover:text-[#5e7aeb]">Already have an account? Login Here</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary bg-dashing-pink hover:bg-[#db5656] text-white border-dashing-pink hover:border-dashing-pink hover:text-[#c0c0c0]">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <section class = "bg-dashing-pink p-6">
        </section>
        <Footer />
    </createAccount>
  )
}

export default CreateAccount