<template>
    <div>
        <h3>Likes : {{like}}</h3>
        <button @click="update(1)">+</button>
        <button @click="update(-1)">-</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                like: 0
            }
        },
        methods: {
            update(num) {
                this.like+=num
            },

        },
        created () {
            this.like=100;
        },
    }
</script>

<style lang="scss" scoped>

</style>
