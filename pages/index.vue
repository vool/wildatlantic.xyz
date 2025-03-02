<script setup>
useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  },
})
</script>
<template>
  <div>
<div id="top" class="flex h-screen justify-center items-center bg-wax-grey">
  <NuxtLink
     href="#intro"
   >
  <img src="/img/wax_logo.png" alt="WILD ATLANTIC XYZ" >
 </NuxtLink>
</div>
<div id="intro" class="md:h-screen h-[50vh] bg-wax-green flex text-wax-grey justify-center items-center">
  <NuxtLink
     href="#launch"
   >
   <div class="w-[60vw] text-xl md:text-4xl lg:text-5xl/16 text-center ">
   <i>An alternative guide to the Wild Atlantic Way, from <span class="text-wax-blue">Wild Atlantic Apartments</span> to <span class="text-wax-blue">Wild Atlantic Yoga</span> and everything in between.</i>
 </div>
 <!-- via Wild Atlantic Things -->

</Nuxtlink>
</div>

<div id="launch" class=" h-[50vh]  bg-wax-blue text-wax-grey flex justify-center items-center md:text-3xl text-xl">
  <div class="text-right p-4 border-r-4 border-wax-green">
    <p class="md:text-6xl8 text-4xl/14">1st April</p>
    <p>6:30 PM</p>
  </div>

  <div class="text-left p-4 text-wax-green">
    <p><b>Kerry County Library</b></p>
    <p>Moyderwell</p>
  <p>Tralee</p>
</div>
</div>

    <div id="launch" class=" h-[40vh] bg-wax-grey text-wax-green flex justify-center items-center text-3xl">
      <a href="https://mastodon.ie/@phelan" target="_blank">
        <font-awesome :icon="['fab', 'mastodon']" class="p-5 hover:text-wax-blue"  />
      </a>
      <a href="https://bsky.app/profile/vool.ie" target="_blank">
        <font-awesome :icon="['fab', 'bluesky']" class="p-5 hover:text-wax-blue" />
      </a>
      <a href="https://www.instagram.com/_keithphelan_/" target="_blank">
        <font-awesome :icon="['fab', 'instagram']" class="p-5 hover:text-wax-blue" />
      </a>
      <a href="mailto:keith@vool.ie" target="_blank">
        <font-awesome :icon="['fas', 'envelope']" class="p-5 hover:text-wax-blue" />
      </a>
</div>

<NuxtLink
   href="#top"
 >
  <div class="flex justify-center text-wax-blue bg-wax-grey  text-3xl">
    <div>
      <font-awesome :icon="['fas', 'up-long']" class="p-5 hover:text-wax-green" />
    </div>
  </div>
 </NuxtLink>




  </div>
</template>
