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
        <header class="masthead" style="background-image: url('frontend/assets/img/post-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>Man must explore, and this is exploration at its greatest</h1>
                            <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
                            <span class="meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on August 24, 2023
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN" @submit.prevent="post.store">
                                <div class="form-floating">
                                    <input v-model="post.title" class="form-control" id="title" type="text" placeholder="Enter your title..." data-sb-validations="required" />
                                    <label>Title</label>
                                    <div class="invalid-feedback" data-sb-feedback="name:required">A title is required.</div>
                                </div>
                                    <!-- <div class="form-floating">
                                    <input v-model="post.sub-title" class="form-control" id="sub-title" type="text" placeholder="Enter your sub title..." data-sb-validations="required" />
                                    <label>Sub Title</label>
                                    <div class="invalid-feedback" data-sb-feedback="sub-title:required">A sub title is required.</div>
                                </div> -->
                                <div class="form-floating">
                                    <input v-model="post.email" class="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
                                    <label for="email">Email address</label>
                                    <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div class="form-floating">
                                    <textarea v-model="post.text" class="form-control" id="message" placeholder="Enter your message here..." style="height: 12rem" data-sb-validations="required"></textarea>
                                    <label for="message">Message</label>
                                    <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                <br />
                                <!-- Submit success message-->
                                <!---->
                                <!-- This is what your users will see when the form-->
                                <!-- has successfully submitted-->
                                <div class="d-none" id="submitSuccessMessage">
                                    <div class="text-center mb-3">
                                        <div class="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <!-- Submit error message-->
                                <!---->
                                <!-- This is what your users will see when there is-->
                                <!-- an error submitting the form-->
                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                                <!-- Submit Button-->
                                <button class="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Send</button>
                            </form>
                    </div>
                </div>
            </div>
        </article>
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
       name: 'PostPage',
        data() {
            return {
                post: {}
            }
        },
        methods: {
            store() {
axios.post("http://127.0.0.1:8000/api/post", this.post)
    .then(response => this.title = response);

            }
        }
    }
  </script>
<style></style>