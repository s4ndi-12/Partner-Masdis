import "vue-toastification/dist/index.css";
import Swal from "sweetalert2";
import axios from 'axios';
import qs from 'qs';

export default {
    auth: "guest",
    data() {
        return {
            client_id: "MDEXTRANETCID",
            client_secret: "MDEXTRANETCS",
            email: "solehudin.informasi@gmail.com",
            password: "123123123",
            grant_type: "password",
        };
    },

    // mounted() {
    //     this.$nextTick(() => {
    //         this.$nuxt.$loading.start()
    //         setTimeout(() => this.$nuxt.$loading.finish(), 500)
    //     })
    // },

    methods: {
        button_show_password() {
            if ($("#password").attr("type") == "text") {
                $("#password").attr("type", "password");
                $("#icon-password").addClass("bx-low-vision");
                $("#icon-password").removeClass("bx-show-alt");
            } else if ($("#password").attr("type") == "password") {
                $("#password").attr("type", "text");
                $("#icon-password").removeClass("bx-low-vision");
                $("#icon-password").addClass("bx-show-alt");
            }
        },

        async handleSubmit() {
            if (!this.email && !this.password) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                })

                Toast.fire({
                    icon: 'error',
                    title: 'Your Email And Password Has Not Been Filled'
                })
            } else if (!this.email) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                })

                Toast.fire({
                    icon: 'error',
                    title: 'Your Email Has Not Been Filled'
                })
            } else if (!this.password) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                })

                Toast.fire({
                    icon: 'error',
                    title: 'Your Password Has Not Been Filled'
                })
            } else {
                const data = {
                    client_id: this.client_id,
                    client_secret: this.client_secret,
                    username: this.email,
                    password: this.password,
                    grant_type: this.grant_type,
                };
                try {
                    let res = await this.$auth.loginWith("local", {
                        data: qs.stringify(data),
                    });

                    console.log(res);

                    setTimeout(() =>
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Successful',
                            text: 'Welcome to the MasterDiskon Partner Site',
                        })
                        , 1000)

                } catch (error) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    })

                    Toast.fire({
                        icon: 'error',
                        title: 'The Email Or Password You Entered Is Wrong'
                    })
                }
            }

            // const url = "https://devapi.masterdiskon.com/";
            // var dataString = new URLSearchParams();
            // dataString.append("client_id", "MDEXTRANETCID");
            // dataString.append("client_secret", "MDEXTRANETCS");
            // dataString.append("username", this.email);
            // dataString.append("password", this.password);
            // dataString.append("grant_type", "password");
            // const pathUrl = url + 'v1/auth/token/partner';
            // let axiosConfig = {
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     }
            // }
            // return await axios.post(pathUrl, dataString, axiosConfig)
            //     .then((response) => {
            //         // handle success
            //         if (response.data.access_token) {
            //             const { access_token, refresh_token } = response.data
            //             localStorage.setItem('token', JSON.stringify({
            //                 token: access_token,
            //                 refresh_token: refresh_token
            //             }));
            //         }

            //         console.log(response.data.access_token);
            //         return this.$router.push(`/Page/`);
            //     }).catch((error) => {
            //         // handle error
            //         return error.response.data

            //     })
        }

    },
};