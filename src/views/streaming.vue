<template>
	<div class="container">
		<div class="title">Dados da streaming</div>
		<div class="text"> Aqui você pode ver informações dos dados da sua streaming. A seguir você pode ver parâmetros para ultilizar na sua requisição. </div>
		<div class="subtitle">Parâmetros de URL</div>
		<div class="text">A tabela a seguir mostra os parâmetros de solicitação que você pode usar na chamada da API.</div>
		<div class="url">https://api.pauloferraco.com.br/radio/status/{IP}/{PORTA}/{TIPO}</div>
		
		<table>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Tipo</th>
					<th>Requerido</th>
					<th>Detalhes</th>
				</tr>
			</thead>
			<tr>
				<td>IP</td>
				<td>String</td>
				<td>Sim</td>
				<td>Ip do streaming.</td>
			</tr>
			<tr>
				<td>PORTA</td>
				<td>Number</td>
				<td>Sim</td>
				<td>Porta do streaming.</td>
			</tr>
			<tr>
				<td>TIPO</td>
				<td>Nunber</td>
				<td>Sim</td>
				<td>Local onde o streaming está hospedado. [ShoutCast = 1, IceCast = 2]</td>
			</tr>
			<tr>
				<td>TIPO</td>
				<td>Nunber</td>
				<td>Sim</td>
				<td>Local onde o streaming está hospedado. [ShoutCast = 1, IceCast = 2]</td>
			</tr>
		</table>
		
		<div class="subtitle">Resposta da URL</div>
		<div class="text">A tabela a seguir mostra o retorno das informações da solicitação da API.</div>
		
		<table>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Tipo</th>
					<th>Detalhes</th>
				</tr>
			</thead>
			<tr>
				<td>Locutor</td>
				<td>String</td>
				<td>Nome da locução.</td>
			</tr>
			<tr>
				<td>Programa</td>
				<td>String</td>
				<td>Nome da progrmação.</td>
			</tr>
			<tr>
				<td>Ouvintes</td>
				<td>Number</td>
				<td>Quantidade de ouvintes únicos na rádio.</td>
			</tr>
			<tr>
				<td>Music</td>
				<td>String</td>
				<td>Nome da música que está tocando.</td>
			</tr>
			<tr>
				<td>Streampath</td>
				<td>String</td>
				<td>Caminho do aúdio da rádio.</td>
			</tr>
			<tr>
				<td>Content</td>
				<td>String</td>
				<td>Formato do aúdio.</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'StreamPage'
	}
</script>

<style scoped>

</style>