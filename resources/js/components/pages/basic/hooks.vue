<template>
    <div>
        <h3>Hooks</h3>
        <h2>My name is:{{data}}</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: "sathish"
            }
        },
        beforeCreate () {

            console.log("dataa bcreated ",this.data);
        },
        created () {
            console.log("dataa created ",this.data);
        },
        mounted () {
            console.log("dataa mounded ",this.data);
        },
    }
</script>

<style lang="scss" scoped>

</style>
