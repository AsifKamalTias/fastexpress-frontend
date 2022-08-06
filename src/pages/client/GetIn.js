import ClientNav from "../../components/ClientNav";

const GetIn = () => {
    return (
        <>
            <ClientNav></ClientNav>
            <section className="mt-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <h1>Get in</h1>
                            <br/><br/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            {/* @if(Session()->has('invalid-auth'))
                                <p class="text-danger">{{Session::get('invalid-auth')}}</p>
                            @endif
                            @if(Session()->has('password-changed'))
                                <p class="text-success">{{Session::get('password-changed')}}</p>
                            @endif */}
                            <br/><br/>
                            <form action="" method="POST">
                                <div className="form-outline mb-4">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control form-control-lg" name="email"
                                        placeholder="Enter a valid email address"/>
                                        {/* @error('email')
                                        <span class="input-err">{{ $message }}</span>
                                        @enderror */}
                                </div>
                                <div className="form-outline mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control form-control-lg" name="password"
                                        placeholder="Enter password" />
                                        {/* @error('password')
                                        <span class="input-err">{{ $message }}</span>
                                        @enderror */}
                                </div>
            
                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox -->
                                    <!--
                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-2" type="checkbox" name="remember" value="remember" checked/>
                                        <label class="form-check-label" for="remember">
                                        Remember me
                                        </label>
                                    </div>
                                    --> */}
                                    <a href="/" className="text-body">Forgot password?</a>
                                </div>
            
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-success btn-lg"
                                        >Get in</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="{{ route('register') }}"
                                        className="link-danger">Register</a></p>
                                </div>            
                            </form>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </section>
        </>
    );
}

export default GetIn;