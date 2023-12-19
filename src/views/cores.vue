<template>
	<div class="container">
		<div class="title">Cores da imagem</div>
		<div class="text"> Aqui você pode ver cores de uma respectiva imagem. A seguir você pode ver parâmetros para ultilizar na sua requisição. </div>
		<div class="subtitle">Parâmetros de URL</div>
		<div class="text">A tabela a seguir mostra os parâmetros de solicitação que você pode usar na chamada da API.</div>
		
		<div class="url">https://api.pauloferraco.com.br/v3/colors.php?img={URL_IMG}&amp;num={QUANTIDADE}</div>
		
		<table>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Tipo</th><th>Requerido</th><th>Detalhes</th>
				</tr>
			</thead>
			<tr>
				<td>URL_IMG</td>
				<td>String</td>
				<td>Sim</td>
				<td>Link da imagem.</td>
			</tr>
			<tr><td>QUANTIDADE</td><td>Number</td><td>Sim</td><td>Quantidade de cores.</td></tr>
		</table>
		<div class="subtitle">Resposta da URL</div>
		<div class="text">A tabela a seguir mostra o retorno das informações da solicitação da API.</div>
		
		<table>
			<thead>
				<tr>
					<th>Nome</th><th>Tipo</th><th>Detalhes</th>
				</tr>
			</thead>
			<tr>
				<td>Cores</td><td>Array</td><td>Array simples com cores em hexadecimais. <br> Ex.: ["#FFFFFF", "#000000"]</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'CoresPage'
	}
</script>

<style scoped>

</style>