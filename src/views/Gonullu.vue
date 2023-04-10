<template>
    <div class="Gonullu">
        <div class="ml-auto mr-auto bg-gray-600 ">            
            <div class="border-2 ml-auto mr-auto pt-10 h-full w-1/2 rounded-md bg-white pb-20"> 
                <div class="text-4xl font-bold ml-3">
                    <h1>Gönüllü Formu</h1>
                </div>             
                <form class="w-full m-30 bg-white text-left pl-40 rounded-xl pt-10 ">
                    <label class="text-gray-800 inline-block text-xs uppercase tracking-wider font-bold mt-2 mb-4 mx-0">İSİM :</label>
                    <input class="block w-4/5 box-border px-6 py-3 border-b-solid border-b-black border-b " type="text" required v-model="text">

                    <label class="text-gray-800 inline-block text-xs uppercase tracking-wider font-bold mt-2 mb-4 mx-0">SOYİSİM :</label>
                    <input class="block w-4/5 box-border px-6 py-3 border-b-solid border-b-black border-b " type="text" required v-model="text">

                    <label class="text-gray-800 inline-block text-xs uppercase tracking-wider font-bold mt-2 mb-4 mx-0">TELEFON :</label>
                    <input class="block w-4/5 box-border px-6 py-3 border-b-solid border-b-black border-b " type="tel" required v-model="phone">

                    <label class="text-gray-800 inline-block text-xs uppercase tracking-wider font-bold mt-2 mb-4 mx-0">İL :</label>
                    <select class="block w-4/5 box-border py-3 border-b-solid border-b-black border-b ">
                        <option value="il">------------------</option>
                        <option value="il">------------------</option>
                        <option value="il">------------------</option>
                        <option value="il">------------------</option>
                        <option value="il">------------------</option>
                        
                    </select>
                    <label class="text-gray-800 inline-block text-xs uppercase tracking-wider font-bold mt-4 mb-8 mx-0">İLÇE :</label>
                    <select class="block w-4/5 box-border py-3 border-b-solid border-b-black border-b ">
                        <option value="ilce">------------------</option>
                        <option value="ilce">------------------</option>
                        <option value="ilce">------------------</option>
                        <option value="ilce">------------------</option>
                        <option value="ilce">------------------</option>
                    </select>
                </form>        
                <div>
                    <button class="rounded-full border-2 h-10  bg-black text-neutral-50 mt-10 w-4/5">Kayıt Oluştur</button>
                </div>                   
            </div>    
        </div>    
    </div>

</template>

<script>
export default {
    name:'Gonullu'
}
</script>

<style>

</style>