<template>
	<section class="page-wrap">
		<h2 class="page-title">Izaberite listic za igru:</h2>
		<ul class="list">
			<router-link class="card" :to="{name: 'SmallGame'}">Mali listic</router-link>
			<router-link class="card" :to="{name: 'MediumGame'}">Srednji listic</router-link>
			<router-link class="card" :to="{name: 'LargeGame'}">Veliki listic</router-link>
		</ul>
		<h2 class="page-title">
			<router-link :to="{name: 'MyGame'}" class="my-game-link">
				<span>
					Napravi svoj listic! 
				</span>
				<img src="/img/arrow-down-outline.5cbf7a47.svg" alt="Down icon" class="icon">
			</router-link>
		</h2>
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