<template>
  <div>
    <NavBar />
    <div class="container">
      <header>
        <div class="background-image" :style="backgroundImage" />
        <div class="title">
          <h1>Design <br>Made in Italy</h1>
        </div>
      </header>
      <main>
        <div class="products">
          <CardProduct :image="oliver" />
          <CardProduct :image="oliver" />
          <CardProduct :image="oliver" />
          <CardProduct :image="oliver" />
          <CardProduct :image="oliver" />
          <CardProduct :image="oliver" />
        </div>
        <section>
          <div class="words">
            <h2>Equilibrio</h2>
            <p>
              Le collezioni Sofà Italia, sono l’equilibrio tra <strong>design contemporaneo e moderna classicità</strong>,
              coniugando confort ed eleganza e proponendo una serie di prodotti progettati ed ingegnerizzati
              per rispondere in modo puntuale ad una varietà di situazioni diverse. 
            </p>
          </div>
          <img :src="oliver" />
        </section>
        <section class="words-right">
          <div class="words">
            <h2>Versatilità e Praticità</h2>
            <p>
              Oltre ai vari modelli e forme, per rispondere ai gusti ed alle esigenze degli spazi e di design, le collezioni Sofà Italia presentano
              <strong>accessori funzionali</strong> che ne aumentano la <strong>versatilità e la praticità</strong>. Il sistema relax con recliner
              elettrico, dotato di schienali reclinabili o le versioni trasformabili, rendono le <strong>collezioni
              confortevoli</strong> e pronte ad accogliere tutti i momenti di riposo.
            </p>
          </div>
          <img :src="oliver" />
        </section>
        <section class="with-background">
          <div class="words">
            <h2>Tessuti e Pellami ricercati</h2>
            <p>
              I prodotti Sofà Italia, sono avvolti da tessuti e pellami <strong>ricercati e rifiniti</strong> da preziose cuciture,
              dettagli sartoriali che donano un carattere distintivo ad ogni proposta. La gamma dei rivestimenti
              viene costantemente aggiornata, <strong>sempre al passo con le evoluzioni tecnologiche e l’andamento
              della moda</strong>, consentendo una vasta scelta di colori.
            </p>
          </div>
          <div :style="background(tessuti)" class="section-background" />
        </section>
        <section>
          <div class="words">
            <h2>Esperienza</h2>
            <p>
              L’esperienza e il <strong>know-how</strong> raggiunto nella confezione del <strong>prodotto su misura</strong> e la <strong>precisione
              industriale</strong>, esaltano la qualità e la flessibilità della produzione di Sofà Italia.
              L’attenzione al cliente e la grande capacità di personalizzazione, ne fanno il punto di riferimento per chi ama lo stile e il
              <strong>Made in Italy.</strong>
            </p>
          </div>
          <img :src="oliver" />
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import CardProduct from '@/components/CardProduct'
import oliver from '@/assets/oliver.jpg'
import tessuti from '@/assets/azienda.jpg'

export default {
  name: "Home",
  components: {
    NavBar,
    CardProduct
  },
  data () {
    this.oliver = oliver
    this.tessuti = tessuti
    this.backgroundImage = {"background-image": `url(${oliver})`}
    return {}
  },
  methods: {
    background(image) {
      return {"background-image": `url(${image})`}
    }
  }
}
</script>

<style lang="scss" scoped>

.container header {
  position: relative;
  width: 100%;
  height: 70vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container .background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 75%;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
  }
} 

.container .title {
  z-index: 1;
  
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 24px;
  }
}

.products {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 50px .5rem;
  max-width: 1200px;
  flex-wrap: wrap;

  & > * {
    flex: 1 1 250px;
    margin: .5rem;
  }
}

section {
  padding: 150px .5rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 500px;
    object-fit: cover;
  }

  &.with-background {
    max-width: 100%;
    align-content: flex-end;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
    position: relative;
    padding: .5rem;
    height: 100vh;

    .words {
      max-width: 550px;
      z-index: 2;
      color: white;
      padding: 2rem;
      margin-right: 0;
    }

    .section-background {
      background-position: 80%;
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      &::before {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        position: absolute;
      }
    }
  }
}


@media screen and (min-width: $medium) {

  .container .background-image::before {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .products {
    margin: 70px 3rem;
  }
}

@media screen and (min-width: $large) {
  .products {
    margin-left: auto;
    margin-right: auto;

    & > * {
      flex: 0 1 300px;
    }
  }

  section {
    flex-direction: row;
    padding-left: 3rem;
    padding-right: 3rem;

    .words {
      text-align: left;
      margin-right: 2rem;
    }

    &.words-right > .words{
      text-align: right;
      margin-left: 2rem;
    }


    &.words-right {
      flex-direction: row-reverse;
    }

    &.with-background {
      height: 70vh;
      padding-top: 150px;
      padding-bottom: 150px;
      align-content: center;
      align-items: center;
      justify-content: flex-end;

      .words {
        background-color: #f4f4f4;
        color: black;
      }

      .section-background {
        width: 50%;
        background-position-x: 100%;
      }
    }
  }
}

</style>