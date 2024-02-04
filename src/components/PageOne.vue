<template>
    <div class="form-login-container">
        <video data-autoplay loop muted playsinline class="video-background">
            <source src="https://cdn.discordapp.com/attachments/1110557920791367782/1201909154386821191/god-one-punch-man.3840x2160.mp4" type="video/mp4">
        </video>
        <Form class="flex-item" ref="form" />
        <div class="text-center text-white text-xl" ref="or">
            OR
        </div>
        <Login class="flex-item" ref="login" />
    </div>
</template>

<script>
import Form from "./Form.vue"
import Login from "./Login.vue"
import anime from 'animejs'

export default {
    components: {
        Form,
        Login,
    },
    mounted() {
        this.$nextTick(() => {
            anime({
                targets: [this.$refs.form.$el, this.$refs.or, this.$refs.login.$el],
                translateY: [-100, 0], // slide up
                opacity: [0, 1], // fade in
                duration: 1000,
                delay: anime.stagger(1000), // delay each animation by 200ms
                easing: 'easeOutQuad',
            });
        });
    }
}
</script>

<style scoped>
.form-login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.flex-item {
    flex: 1;
}
</style>