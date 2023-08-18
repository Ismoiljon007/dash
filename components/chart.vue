<script setup>
import Chart from 'chart.js/auto';
const labels = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];
const data = {
    labels: labels,
    datasets: [{
        // label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: '#D16F6F',
        tension: 0.1
    }]
};
const config = {
    type: 'line',
    data: data,
};


onMounted(() => {
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    )
})
</script>
<template>
    <canvas id="myChart"></canvas>
</template>



<style lang="scss" scoped>
#myChart {
    width: 100% !important;
    // height: 100% !important;
    // object-fit: cover !important;
}
</style>