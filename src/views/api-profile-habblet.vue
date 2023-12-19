<template>
	<div class="container">
		<div class="title">Perfil de usuário do Habblet Hotel</div>
		<div class="text"> Aqui você pode ver as imformações de um usuário do Habblet Hotel. A seguir você pode ver parâmetros para ultilizar na sua requisição. </div>
		<div class="subtitle">Parâmetros de URL</div>
		<div class="text">A tabela a seguir mostra os parâmetros de solicitação que você pode usar na mesma chamada da API.</div>
		
		<div class="url">https://api.pauloferraco.com.br/v3/habblet_profile/{USER}</div>
		
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
					<td>USER</td>
					<td>String</td>
					<td>Sim</td>
					<td>Nick do usuário do hotel.</td>
				</tr>
			</table>
			
			<div class="subtitle">Resposta da URL</div>
			<div class="text">A tabela a seguir mostra o retorno das informações da solicitação da API.</div>
			
			<table>
				<thead>
					<th>Nome</th>
					<th>Tipo</th>
					<th>Detalhes</th>
				</thead>
			<tr>
				<td>Text</td>
				<td>String</td>
				<td>Caso passe <span class="param">user</span> e não existir no hotel retorna apenas o <spam class="param">text</spam>.</td>
			</tr>
			<tr>
				<td>User</td>
				<td>Array</td>
				<td>Retorna dados do usuário pesquisado. Retorna do array '<span class="param">username</span>, <span class="param">reg_date</span>, <span class="param">achievement_points</span>, <span class="param">motto</span>, <span class="param">figure</span>, <span class="param">gender</span>, <span class="param">relationships</span>'.</td>
			</tr>
			<tr>
				<td>badges</td>
				<td>Array</td>
				<td>Retorna todos os emblemas do usuário <i>(Apenas <span class="param">code</span> do emblema).</i></td>
			</tr>
			<tr>
				<td>Friends</td>
				<td>Array</td>
				<td>Retorna todos os amigos do usuário. Retorna do array '<span class="param">figure</span>, <span class="param">reg_date</span>, <span class="param">username</span>'.</td>
			</tr>
			<tr>
				<td>Rooms</td>
				<td>Array</td>
				<td>Retorna todos os quartos do usuário. Retorna do array '<span class="param">access_type</span>, <span class="param">doorbell</span>, <span class="param">description</span>, <span class="param">max_users</span>, <span class="param">name</span>, <span class="param">score</span>, <span class="param">tags</span>'.</td>
			</tr>
			<tr>
				<td>Groups</td>
				<td>Array</td>
				<td>Retorna todos os grupos do usuário. Retorna do array '<span class="param">badge</span>, <span class="param">created</span>, <span class="param">description</span>, <span class="param">joined</span>, <span class="param">level</span>, <span class="param">name</span>, <span class="param">owner</span>, <span class="param">room_id</span>, <span class="param">type</span>'.</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: 'ProfileHabblet',
}
</script>

<style scoped>

</style>