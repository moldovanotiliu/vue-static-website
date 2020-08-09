<template>
  <div>
    <div class="page-header  ">
      <parallax
        class="page-header-image"
        style="background-image: url('IoanaImg2/backg2.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Croitorie și Design Ioana Moldovan</h1>
          <div class="text-center">
            <a class="btn btn-primary btn-round" v-scroll-to="'#AboutUs'">
              <i class="now-ui-icons education_paper"> Despre Noi</i>
            </a>
            <a href="/portofoliu" class="btn btn-primary btn-round" >
              <i class="now-ui-icons media-1_album"> Portofoliu</i>
              
            </a>
            <a  class="btn btn-primary btn-round" href="/servicii" >
              <i class="now-ui-icons location_map-big"> Servicii</i>
            </a>
            <a href="/" class="btn btn-primary btn-round" v-scroll-to="'#Contact'" >
              <i class="now-ui-icons location_map-big"> Contact</i>
            </a>
            
            <a
                class="btn btn-primary btn-icon btn-round"
                rel="tooltip"
                title="Like us on Facebook"
                data-placement="bottom"
                href="https://www.facebook.com/ioana.moldovan.100"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
                
            </a>
            
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us" id="AboutUs" >
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title" >Ce înseamnă a fi croitor? </h2>
            <h4 class="description">
              <b>Pentru a avea succes ca și croitor, trebuie să fii orientat spre detalii, să deții 
              cunoștințe de design și construcția îmbrăcamintei. Un croitor excepțional va
              demonstra abilități excelente de comunicare, gestionare a 
              timpului, cusut și rezolvare de probleme pentru a asigura mulțumirea clientului.</b>
            </h4>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('IoanaImg2/backg5.jpg')"
              >
                <!-- First image on the left side -->
                
              </div>
              
            </div>
            <div class="col-md-6">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('IoanaImg2/backg6.jpg')"
              ></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section section-contact-us text-center" id="Contact">
      <div class="container">
        
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                 <div>
                    <div class="icon-block pb-3 align-left">
                        
                        <h3 class="icon-block__title align-left mbr-fonts-style display-5">Pentru colaborări vă oferim următoarele informații de contact: </h3>
                    </div>
                    <div class="icon-contacts pb-3">
                        <h5 class="align-left mbr-fonts-style display-7"> 
                          <b>Adresa Croitoriei:</b> 
                          Str. Aurel Vlaicu nr.8 sc.3 ap.49, Cluj-Napoca</h5>
                        <h5 class="align-left mbr-fonts-style display-7">
                          <b> Număr de telefon:</b>+40 741 014 884<br>
                          <b>Email:</b>moldovanioanapfa@gmail.com</h5>
                    </div>
                </div>
                <div class="google-map" style="margin-bottom:50px"><iframe frameborder="0" style="width: 100%;height:400px; " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.310956152977!2d23.61806214413305!3d46.77847675424193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd09f8109141052fa!2sCroitorie%20%26%20Design%20Ioana%20Moldovan!5e0!3m2!1sro!2sro!4v1596020866358!5m2!1sro!2sro" allowfullscreen=""></iframe></div>
            </div>
            <div class="col-md-6">
                
               
                <div data-form-type="formoid" >
                    <form
                      action="https://formspree.io/xbjzwykn"
                      method="POST"
                    >
                     <h3 style="margin-bottom:50px">
                        Pentru a trimite un mesaj direct folosiți formularul de mai jos 
                     </h3>
                    
                      <p >
                        
                        <input aria-describedby="addon-right addon-left" placeholder="Nume..." name="name" type="text" class="form-control">
                      </p>
                      <p>
                        
                        
                        <input aria-describedby="addon-right addon-left" placeholder="Adresă de Email..." type="email" name="_replyto" class="form-control">
                      </p>
                      <p>
                        Mesajul Dumneavoastră:
                        <textarea aria-describedby="addon-right addon-left" class="form-control" name="message"></textarea>
                      </p>
                      <input  type="submit" value="Trimiteți" class="btn btn-round btn-primary">
                    </form> 
                </div>
            </div>
        </div>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>

<style>

</style>
