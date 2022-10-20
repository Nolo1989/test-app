<template>
	<section class="page-wrap">
		<h2 class="page-title">Izaberite listić za igru:</h2>
		<ul class="list">
			<router-link class="card" :class="{'not-clickable': $parent.$parent.$parent.notClickable}" :style="getThemeColor" :to="{name: 'SmallGame'}">Mali listić</router-link>
			<router-link class="card" :class="{'not-clickable': $parent.$parent.$parent.notClickable}" :style="getThemeColor" :to="{name: 'MediumGame'}">Srednji listić</router-link>
			<router-link class="card" :class="{'not-clickable': $parent.$parent.$parent.notClickable}" :style="getThemeColor" :to="{name: 'LargeGame'}">Veliki listić</router-link>
		</ul>
		<h2 class="page-title">
			<router-link :to="{name: 'MyGame'}" class="my-game-link" :class="{'not-clickable': $parent.$parent.$parent.notClickable}">
				<span>
					Napravi svoj listić! 
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
	computed: {
		getThemeColor() {
			let color = '';
			let theme = this.$attrs.themeColor;

			if (theme === 'blue')
				color = '';
			else if (theme === 'pink')
				color = '#E91E63';
			else if (theme === 'yellow')
				color = '#FFEB3B';
			else if (theme === 'deep-purple')
				color = '#673AB7';
			else if (theme === 'green')
				color = '#4CAF50';
			else if (theme === 'deep-orange')
				color = '#FF5722';
			else if (theme === 'red')
				color = '#F44336';
			else if (theme === 'indigo')
				color = '#3F51B5';
			else if (theme === 'cyan darken-3')
				color = '#00838F';
			else if (theme === 'teal')
				color = '#009688';
			else if (theme === 'lime')
				color = '#CDDC39';
			else if (theme === 'blue-grey')
				color = '#607D8B';

			return {
				'border-color': color
			};
		}
	}
});
</script>