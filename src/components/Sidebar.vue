<template>
    <div class="services">
        <RouterLink class="services-button sidebar-button-highlight" id="netservice" to="/nettools">
            <span class="services-button-text">Networking Tools</span>
        </RouterLink>
        <a class="services-button sidebar-button-highlight" id="servers">
            <span class="services-button-text">Servers</span>
        </a>
    </div>
    <div class="sidebar-footer sidebar-wrapper">
        <SidebarFooter />
        <span class="footer-text font-info-gray" ref="time"><noscript>Live clock unavailable. JavaScript is disabled.</noscript></span><br>
    </div>
</template>

<script setup>
import { useTemplateRef, onMounted } from 'vue'
import SidebarFooter from './SidebarFooter.vue'

// the first argument must match the ref value in the template
const input = useTemplateRef('time')

onMounted(() => {
    timeNow();
    setInterval(timeNow, 1000);
    
    console.log("abc");
})

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function timeNow() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    input.value.innerHTML = "Server time: " + h + ":" + m + ":" + s;
}


</script>