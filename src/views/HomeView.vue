<template>
  <div class="home">
    <div class="arkaplan ">
      <div class="text-center text-8xl font-bold pt-64 ">
          <span class="text-white">
          AFET YARDIM PLATFORMU
        </span>
      </div>
      
    </div>
    
    
    <div class="bg-gray-100 pt-24 ">
      <h2 class="text-center text-6xl font-bold text-gray-900">Neler Yapıyoruz</h2> 
      <div class="w-4/5 m-auto pt-12 text-2xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-12 lg:max-w-none lg:py-8">
          <h2 class="text-6xl font-bold text-gray-900">Nasıl Çalışıyoruz</h2>
          <div class="mt-12 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            <div v-for="callout in callouts" :key="callout.name" class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img :src="callout.imageSrc" :alt="callout.imageAlt" class="h-full w-full object-cover object-center" />
              </div>
              <h3 class="mt-2 text-sm text-gray-500">
                <a :href="callout.href">
                  <span class="absolute inset-0" />
                  {{ callout.name }}
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>


const callouts = [
  {
    name: 'Verleri Toplarız',
    description: 'Work from home accessories',
    imageSrc: 'data:image/png;base64,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',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Verileri Kontrol Ederiz',
    description: 'Journals and note-taking',
    imageSrc: 'https://s3.eu-central-1.amazonaws.com/nkariyer/images/5e091d04bc2cb5092087a508/830x467/5e091d04bc2cb5092087a508_0.jpeg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Koordine Oluruz',
    description: 'Daily commute essentials',
    imageSrc: 'https://yenigungazetesinet.teimg.com/yenigungazetesi-net/uploads/2023/02/1677153211-bb-afet-koordinasyon-merkezi-3.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  
  {
    name: 'Harekete Geçeriz',
    description: 'Daily commute essentials',
    imageSrc: 'https://www.esnafhabertv.com/i/dosya/haber/afad-esnafi-afetlere-karsi-bil_1628319812_wmCJBP.jpg/jpg-90-1280-720',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
</script>
<style >

.arkaplan{
  background-size: 100% 100vh;
  height: 700px;
  background-size:cover no-repeat;
  background-image: url(../assets/afad_background\ .jpg) ;    
}



</style>
