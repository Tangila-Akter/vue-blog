<template>
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="index.html">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><router-link to="/" style="color:white;">Home</router-link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><router-link to="/about" style="color:white;">About</router-link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><router-link to="/post" style="color:white;">Sample Post</router-link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><router-link to="/get" style="color:white;">Get list</router-link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><router-link to="/contact" style="color:white;">Contact</router-link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><router-link to="/login" style="color:white;">Login</router-link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><router-link to="/register" style="color:white;">Register</router-link></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Page Header-->
        <header class="masthead" style="background-image: url('frontend/assets/img/about-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="page-heading">
                            <h1>Login</h1>
                            <span class="subheading">Welcome back.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
        <main class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="card col-md-10 col-lg-8 col-xl-7">
                        <div class="card-body">
                        <form @submit.prevent="login">
                        <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" v-model="log.email" class="form-control" placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" v-model="log.password" class="form-control" placeholder="your password">
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Login</button>
                        </form>
                        </div>
    
                    </div>
                </div>
            </div>
        </main>
        <!-- Footer-->
        <footer class="border-top">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <ul class="list-inline text-center">
                            <li class="list-inline-item">
                                <a href="#!">
                                    <span class="fa-stack fa-lg">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!">
                                    <span class="fa-stack fa-lg">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!">
                                    <span class="fa-stack fa-lg">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div class="small text-center text-muted fst-italic">Copyright &copy; Your Website 2023</div>
                    </div>
                </div>
            </div>
        </footer>
</template>
  <script>
    import axios from 'axios';
  export default {
    name: 'LoginPage',
    data() {
            return {
                log: {}
            }
        },
    methods: {
            login() {
axios.get("http://127.0.0.1:8000/api/login", this.log)
    .then(response => this.title = response);

            }
        }
  };
  </script>
<style></style>