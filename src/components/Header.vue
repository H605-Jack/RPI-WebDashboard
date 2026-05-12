<template>
    <div class="header-content">
        <div class="logo">
            <RouterLink to="/" style="display:flex;">
                <img src="../assets/img/RPi-Logo-White.png" width="48px" height="48px" style="filter:invert(100%)">
                <span class="icon-description sidebar-style"><strong class="sysui-style" style="color: #000;"><span ref="host" class="sysui-style">Host</span><br> Web Service</strong></span>
            </RouterLink>
        </div>
        <div class="header-button-region">
            <RouterLink to="/about" class="header-button"><span class="sysui-style header-color">about</span></RouterLink>
            <RouterLink to="/settings" class="header-button">
                <span class="hover-border sysui-style header-color">settings</span>
            </RouterLink>
            <!-- Combobox button -->
            <div class="header-button">
                <img src="../assets/img/im-user.svg">
            </div>
        </div>  
    </div>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue'
import { RouterLink } from 'vue-router';

const host = useTemplateRef("host");

async function retrieve_host() {
    const response = await fetch("http://kiet-pifive.local/src/webinfo.php", {
        method: "GET",
        headers: {
            'Authorization': 'Bearer abc'
        }
    })
    const data = await response.json();
    host.value.innerHTML = data.hostname;
}

onMounted(retrieve_host);
</script>