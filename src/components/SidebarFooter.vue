<template>
    <div class="sidebar-footer-content">
        <span class="footer-text font-info-gray" ref="temp"></span><br>
        <span class="footer-text font-info-gray" ref="memswap"></span><br>
        <span class="footer-text font-info-gray">--------------------<br></span>
        <span class="footer-text font-info-gray" ref="version"></span><br>
        <span class="footer-text font-info-gray">Last login: <span ref="track-time">php echo track_time();</span></span><br>
    </div>
</template>

<script setup>
import { useTemplateRef, onMounted, ref } from 'vue';
const temp = useTemplateRef("temp");
const memswap = useTemplateRef("memswap");
// api call against serverhealth.php
async function updateStats() {
    const response = await fetch("http://kiet-pifive.local/src/internals/serverhealth.php", {
        method: 'GET', 
        headers: {
            'Authorization': 'Bearer abc',
            // See RFC 7231, Section 3.1.1.5 for Content-Type
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    
    temp.value.innerHTML = `temp: ${data.temp.slice(0, 2)}.${data.temp.slice(2, 3)}°C`;
    memswap.value.innerHTML = `mem/swap: ${Math.round((data.mem / data.mem_max) * 100)}%/${Math.round((data.swap / data.swap_max) * 100)}%`
}


const version = useTemplateRef("version");
const time = useTemplateRef("track-time");
async function trackTimeAndVersion() {
    const response = await fetch("http://kiet-pifive.local/src/webinfo.php", {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer abc',
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    
    time.value.innerHTML = data.time;
    version.value.innerHTML = data.version;
}

    
onMounted(() => {
    updateStats();
    setInterval(updateStats, 10000);
    trackTimeAndVersion();
})
</script>