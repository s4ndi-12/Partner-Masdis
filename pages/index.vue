<template>
  <div class="background_login">
    <center>
      <img src="~/assets/image/logo_partner.png" alt="" class="image_logo" />
    </center>
    <div class="card_login">
      <br />
      <center>
        <h5 style="color: #1a83c6">Welcome to Partnership MasterDiskon</h5>
        <p>
          Sign in to manage your Store from creating your products and checking
          reservations
        </p>
      </center>

      <form @submit.prevent="handleSubmit">
        <div>
          <label>Your E-mail Address :</label>
          <input
            id="email"
            type="paemailssword"
            autocomplete="off"
            class="form_login"
            v-model="email"
            placeholder="Enter Email"
          />
        </div>

        <div class="mt-3 mb-3">
          <label>Your Password :</label>
          <input
            id="password"
            type="password"
            autocomplete="off"
            class="form_login"
            v-model="password"
            placeholder="Enter Password"
          />
        </div>

        <div class="grid-2-2">
          <div>
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              Remember Me
            </b-form-checkbox>
          </div>
          <div style="text-align: right">
            <NuxtLink to="/">Forget Password ?</NuxtLink>
          </div>
        </div>
        <br />
        <center>
          <button class="button_login">Login Now</button>
          <p class="mt-3 mb-3">
            Don't have an account yet?
            <NuxtLink to="/Partner/Dashboard">Sign up now</NuxtLink>
          </p>
        </center>
      </form>

      <br />
      <div class="grid-2-2">
        <a
          href="https://play.google.com/store/apps/details?id=com.masterdiskon"
          target="_blank"
        >
          <center>
            <img
              src="https://masterdiskon.com/assets/front/img/icon/google-play-badge.svg"
              alt=""
              style="width: 75%"
            />
          </center>
        </a>
        <a
          href="https://apps.apple.com/id/app/masdis/id1549125351"
          target="_blank"
        >
          <center>
            <img
              src="https://masterdiskon.com/assets/front/img/icon/id-badge-ios.png"
              alt=""
              style="width: 70%"
            />
          </center>
        </a>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script src="~/javascript/index.js"></script>

<style scoped>
@import "boxicons";
@import "@/assets/css/index.css";
</style>