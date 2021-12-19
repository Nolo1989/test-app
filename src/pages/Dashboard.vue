<template>
	<section class="page-wrap">
		<h2 class="page-title">Izaberite listic za igru:</h2>
		<ul class="list">
			<router-link class="card" :to="{name: 'SmallGame'}">Mali listic</router-link>
			<router-link class="card" :to="{name: 'MediumGame'}">Srednji listic</router-link>
			<router-link class="card" :to="{name: 'LargeGame'}">Veliki listic</router-link>
		</ul>
	</section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
	name: "Home",
	data: function() {
		return {};
	},
});
</script>