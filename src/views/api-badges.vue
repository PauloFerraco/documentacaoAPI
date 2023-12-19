<template>
	<div>
		<div class="container">
			<div class="title">Emblemas Habblet Hotel</div>
			<div class="text">Aqui você pode ver as ultimas 'Emblemas' adicionados no Habblet Hotel. A seguir você pode ver parâmetros para ultilizar na sua requisição.</div>
			<div class="subtitle">Parâmetros de URL</div>
			<div class="text">A tabela a seguir mostra os parâmetros de solicitação que você pode usar na mesma chamada da API.</div>
			
			<div class="url">https://api.pauloferraco.com.br/v3/habblet_badges/{LIMITE}/{PAGINACAO}[?search={PESQUISAR}]</div>
			
			<table>
				<thead>
					<th>Nome</th>
					<th>Tipo</th>
					<th>Requerido</th>
					<th>Detalhes</th>
				</thead>
			
				<tr>
					<td>Limite</td>
					<td>Number</td>
					<td>Sim</td>
					<td>Você pode passar o parâmetro <span class="param">all</span>, para retornar todos os valores.</td>
				</tr>
				<tr>
					<td>Paginação</td>
					<td>Number</td>
					<td>Sim</td>
					<td>Inicialmente valor '1'</td>
				</tr>
				<tr>
					<td>Pesquisar</td>
					<td>String</td>
					<td>Não</td>
					<td>Pesquisar por <span class="param">code</span> ou <spam class="param">name</spam> do emblema.</td>
				</tr>
			</table>
			
			<div class="info">
				<i class="fa-solid fa-circle-info"></i>
				<span>Pasando o valor <span class="param">all</span>, precisa-se passar o valor  <span class="param">1</span> em paginação.</span>
			</div>
			
			<div class="subtitle">Resposta da URL</div>
			<div class="text">A tabela a seguir mostra o retorno das informações da solicitação da API.</div>
			
			<table>
				<thead>
					<th>Nome</th>
					<th>Tipo</th>
					<th>Detalhes</th>
				</thead>
				<tr>
					<td>Badges</td>
					<td>Array</td>
					<td>Caso passe <span class="param">limite</span> vai ser retonado um array <i>(Code, Name, Description, Time)</i> da quantidade do limite.</td>
				</tr>
				<tr>
					<td>Code</td>
					<td>Number</td>
					<td>Cpdigo do emblema hospedado no hotel.</td>
				</tr>
				<tr>
					<td>Name</td>
					<td>String</td>
					<td>Nome do emblema hospedado no hotel.</td>
				</tr>
				<tr>
					<td>Description</td>
					<td>String</td>
					<td>Descrição do emblema hospedado no hotel.</td>
				</tr>
				<tr>
					<td>Time</td>
					<td>Number</td>
					<td>Quando o emblema foi hospedado no hotel.</td>
				</tr>
				<tr>
					<td>Prev</td>
					<td>Number</td>
					<td>Paginação anterior, caso estaja na página '1' o mesmo retorna 1.</td>
				</tr>
				<tr>
					<td>Next</td>
					<td>Number</td>
					<td>Paginação proxima.</td>
				</tr>
				<tr>
					<td>Total</td>
					<td>Number</td>
					<td>Total de paginação.</td>
				</tr>
				<tr>
					<td>New</td>
					<td>Boonlean</td>
					<td><span class="param">true</span> caso o emblema seja novo, <span class="param">false</span> caso contrario.</td>
				</tr>
			</table>
			<div class="info"><i class="fa-solid fa-circle-info"></i><span>A data dos emblemas inicia em 02/09/2022.</span></div>
		</div>
		<div class="testing">
			<div class="title">Veja um exemplo de como requisitar a API.</div>
			<div class="code">
				<pre>function getBadges(limit){
					&nbsp;return fetch('https://api.pauloferraco.com.br/v3/habblet_badges/'+limit+'/1', {
							&nbsp;&nbsp;method: "GET",
							&nbsp;&nbsp;&nbsp;	headers: {
								&nbsp;&nbsp;&nbsp;&nbsp;'Accept': 'application/json',
								&nbsp;&nbsp;&nbsp;&nbsp;'Content-Type': 'application/json',
							&nbsp;&nbsp;&nbsp;}
						&nbsp;})
						&nbsp;.then((response) =&gt; response.json())
					}

					getBadges(10);
				</pre>
			</div>
			<div class="subtitle">Resultado da API.</div>
			<div class="exemple">
				<div class="box" v-for="(b, i) in badges" :key="i" :style="{backgroundImage: 'url(https://images.habblet.city/c_images/album1584/'+b.code+'.gif)'}">
					<ToolTip :title="b.name" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ToolTip from '@/components/util/tooltip.vue'
import axios from 'axios'

export default {
	name: 'BadgesApi',
	components: {
		ToolTip,
	},
	data() {
		return {
			badges: [],
		}
	},
	methods: {
		async getBadges(){
			const req = await axios.get('https://api.pauloferraco.com.br/v3/habblet_badges/36/1')
			this.badges = req.data.badges
		}
	},
	mounted(){
		this.getBadges()
	}
}
</script>

<style scoped>

</style>