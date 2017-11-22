<template>
	<main>
		<div>
			<input type="text" name="" v-model="msg" value="" placeholder="输入微信号"/>
			<input type="submit" @click="gai" name="" id="" value="提交" />
		
		</div>
	</main>
</template>

<script>
	
		export default{
			data(){
				return{
					msg:''
				}
			},
			methods:{
				gai(){
					this.$store.state.name=this.msg;
					var inpt=document.getElementsByTagName("input")[0]
					inpt.value=""
				}
			},
		computed:{
			name(){
				return this.$store.state.name;
			}
		}
	}
</script>

<style scoped>
	main{
		width: 100%;
		
	}
	main>div{
		position: fixed;
		top: 200px;
		left: 50%;
		margin-left: -200px;
		width: 400px;
		height: 100px;
	}
	main>div>input:nth-of-type(1){
		width: 200px;
		height: 30px;
		line-height: 30px;
	}
	main>div>input:nth-of-type(2){
		width: 50px;
		height: 30px;
	}
</style>