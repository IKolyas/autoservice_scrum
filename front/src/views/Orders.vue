<template>
    <b-container>
        <div v-show="!$store.getters['getOrders']">
            <div class="d-flex justify-content-center mb-3">
                <b-spinner class="mt-5"></b-spinner>
            </div>
        </div>
        <div v-show="$store.getters['getOrders']">
            <b-row v-for="order in $store.getters['getOrders']" v-bind:key="order.id">
                <b-card :title="order.status" header-tag="header" footer-tag="footer">
                    <template #header>
                        <h6 class="mb-0">id: <span>{{ order.id }}</span></h6>
                    </template>
                    <b-card-text>
                        <p>VIN code: <span>{{ order.vin_code }}</span></p>
                        <p>description: <span>{{ order.description }}</span></p>
                        <p>completed_work: <span>{{ order.completed_work }}</span></p>
                        <p>status: <span>{{ order.status }}</span></p>
                    </b-card-text>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                    <template #footer>
                        <em>Footer Slot</em>
                    </template>
                </b-card>
            </b-row>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'Orders',
    data() {
        return {}
    },
    computed: {},
    mounted() {
        this.$store.dispatch('getOrders')
    }

}
</script>

<style scoped>

</style>
