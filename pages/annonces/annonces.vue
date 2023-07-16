<template>
  <div class="bg-[#DFE8CC] flex flex-row w-[100vw] h-[100vh] gap-10 items-center justify-center s">
    <div class="flex flex-col bg-white w-[475px] h-[475px] rounded-3xl justify-center items-center gap-5">
      <div class="mt-5 bg-[#D9D9D9] rounded-3xl w-80 h-14 justify-center items-center flex text-[#395144]">
        <h1 class="text-xl">Carte des plantes disponibles</h1>
      </div>
      <iframe
        class="w-[95%] h-[90%] pb-5 rounded-2xl"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7071.208098646584!2d3.8778249572711343!3d43.618216004438175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1682926609756!5m2!1sfr!2sfr"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <AnnoncesPlantsGalery />
  </div>
</template>
