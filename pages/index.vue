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
<div id="intro" class="md:h-screen h-[50vh] bg-wax-green text-wax-grey flex justify-center items-center">
  <NuxtLink
     href="#launch"
   >
   <div class="w-[60vw] text-xl md:text-4xl lg:text-5xl text-center " >
   <i>An alternative guide to the <b>Wild Atlantic Way</b>, from Wild Atlantic <b>Apartments</b> to Wild Atlantic <b>Yoga</b> and everything in between.</i>
 </div>
 <!-- via Wild Atlantic Things -->

</Nuxtlink>
</div>

<div id="launch" class=" h-[50vh]  bg-wax-blue text-wax-grey flex justify-center items-center text-3xl">
  6:30 PM<br>
  1st April, 2025<br>
  Kerry County Library<br>
  Tralee<br>
  IE<br>
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
