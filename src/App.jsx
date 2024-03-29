import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"
export default function App() {
  return (
    <main>
      <section>
        <div className="bg-orange">
        <img src={iconSedans} alt=" Icones dos carros sedan" />
        <h2 className="">SEDANS</h2>
        <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a href="https://www.webmotors.com.br/sedans" target="_blank" >Ver mais</a>
        </div>

        <div className="bg-green">
          <img src={iconSuvs} alt="icone dos carros SUV" />
          <h2>SUVs</h2>
          <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs?gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwzZmwBhD8ARIsAH4v1gX07sz9Nd7FEAonlVTThUyipdjuONYl6u-wJCiLmkZ1H5g5blXz7qkaAqgOEALw_wcB" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green">
        <img src={iconLuxury} alt="icone dos carros de luxo" />
        <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
        </div>
      </section>
    </main>
  )
}
