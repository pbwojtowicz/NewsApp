<template>
  <div class="root d-flex">
    <p>logowanie</p>
    <section class="u-clearfix u-section-1" id="sec-42f4">
      <div class="u-border-3 u-border-palette-3-light-3 u-container-style u-expanded-width-xs u-group u-group-1">
        <div class="u-container-layout u-container-layout-1">
          <h2 class="u-align-center u-text u-text-1">Zaloguj się</h2>
          <div class="u-align-center u-form u-form-1">
            <form action="#" method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" style="padding: 10px"  name="form">
              <div class="u-form-group u-form-name">
                <label for="name-efba" class="u-form-control-hidden u-label">Nazwa</label>
                <input type="text" placeholder="Nazwa" id="name-efba" name="name" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="">
              </div>
              <div class="u-form-group u-form-group-2">
                <label for="text-30bd" class="u-form-control-hidden u-label"></label>
                <input type="text" placeholder="Haslo" id="text-30bd" name="text" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white">
              </div>
              <div class="u-align-center u-form-group u-form-submit">
                <a href="#" class="u-btn u-btn-submit u-button-style u-palette-3-light-2 u-text-black u-btn-1">Prześlij</a>
                <input type="submit" value="submit" class="u-form-control-hidden">
              </div>
              <div class="u-form-send-message u-form-send-success"> Dziękujemy! Twoja wiadomość została wysłana. </div>
              <div class="u-form-send-error u-form-send-message"> Błędne dane. Logowanie niemożliwe </div>
              <input type="hidden" value="" name="recaptchaResponse">
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>


</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
.u-section-1 .u-group-1 {
  width: 800px;
  box-shadow: 0 0 8px 0 rgba(245,214,84,1);
  margin: 0 auto 40px;
}

.u-section-1 .u-container-layout-1 {
  padding: 30px;
}

.u-section-1 .u-text-1 {
  font-weight: 700;
  line-height: 1.3;
  margin: 22px 15px 0 -15px;
}

.u-section-1 .u-form-1 {
  height: 221px;
  width: 499px;
  margin: 38px auto 0;
}

.u-section-1 .u-form-group-2 {
  margin-left: 0;
}

.u-section-1 .u-btn-1 {
  background-image: none;
  border-style: none;
}

@media (max-width: 991px) {
  .u-section-1 .u-group-1 {
    width: 720px;
  }

  .u-section-1 .u-text-1 {
    margin-right: 0;
    margin-left: 0;
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-group-1 {
    width: 540px;
  }

  .u-section-1 .u-container-layout-1 {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 575px) {
  .u-section-1 {
    min-height: 433px;
  }

  .u-section-1 .u-group-1 {
    margin-bottom: 0;
    min-height: 450px;
    margin-right: initial;
    margin-left: initial;
    width: auto;
  }

  .u-section-1 .u-form-1 {
    width: 320px;
  }
}
</style>
