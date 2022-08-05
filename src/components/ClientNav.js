const ClientNav = () => {
    return (
        <>
         <nav class="navbar navbar-expand-lg bg-white shadow-sm">
            <div class="container">
            <a class="navbar-brand fs-3 text-success" href="/">FastExpress</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/get-in">Get in</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/blogs">Blogs</a>
                </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
export default ClientNav;