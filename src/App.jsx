import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"
export default function App() {
  return (
    <main className="nin-h-svh bg-offwhitebg py-20 px-6 antialised lg:flex justify-center items-center" >
      <section className="lg:flex">
        <div className="bg-orange p-12 rounded-t-lg ">
        <img src={iconSedans} alt=" Icones dos carros sedan" className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SEDANS</h2>
        <p className="font-lexend mb-7 text-offwhite" >Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange"href="https://www.webmotors.com.br/sedans" target="_blank" >Ver mais</a>
        </div>

        <div className="bg-green p-12">
          <img src={iconSuvs} alt="icone dos carros SUV" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
          <p className="font-lexend mb-7 text-offwhite">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green" href="https://www.webmotors.com.br/suvs?gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwzZmwBhD8ARIsAH4v1gX07sz9Nd7FEAonlVTThUyipdjuONYl6u-wJCiLmkZ1H5g5blXz7qkaAqgOEALw_wcB" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green p-12 rounded-b-lg"  >
        <img src={iconLuxury} alt="icone dos carros de luxo" className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
        <p className="font-lexend mb-7 text-offwhite">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
        </div>
      </section>
    </main>
  )
}
