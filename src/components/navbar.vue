<template>
	<div class="navbar">
		<div class="logo">
			<span>API Documentação</span>
		</div>
		<ul>
			<RouterLink :to="{path: '/', name: ''}">
				<li class="dash">
					<p>Página inicial</p>
				</li>
			</RouterLink>
			<ul class="subMain">
				<span>HABBLET HOTEL</span>
				<RouterLink :to="{path: '/habblet-badges', name: 'BadgesHabblet'}">
					<li>
						<p class="prem">Emblemas</p>
					</li>
				</RouterLink>
				<RouterLink :to="{path: '/habblet-mobs', name: 'MobsHabblet'}">
					<li><p class="prem">Mobs</p></li>
				</RouterLink>
				<RouterLink :to="{path: '/habblet-profile', name: 'ProfileHabblet'}">
					<li><p class="prem">Perfil do usuário</p></li>
				</RouterLink>
			</ul>
			<ul class="subMain">
				<span>EXTRAS</span>
				<RouterLink :to="{path: '/streaming', name: 'StreamPage'}">
					<li><p class="free">Status do streaming</p></li>
				</RouterLink>
				<RouterLink :to="{path: '/colors', name: 'CoresPage'}">
					<li><p class="prem">Cores</p></li>
				</RouterLink>
			</ul>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
}
</script>

<style scoped>

.navbar {
	position: fixed;
	width: 20%;
	height: 100%;
	top: 0;
	left: 0;
	padding-bottom: 20px;
	background-color: #4682b4;
	box-shadow: 0 2px 6px rgba(0,0,0,.15);
}

.logo {
	float: left;
	width: 100%;
	height: auto;
	text-align: center;
	font-size: 22px;
	font-weight: 300;
	color: #fff;
	margin: 20px 0 0 0;
}

.logo span {
    font-weight: 800;
}

ul {
	float: left;
    width: 100%;
    height: auto;
    margin: 10px 0 0 10px;
    color: #fff;
}

ul .dash,
ul span {
    float: left;
    width: 100%;
    height: 30px;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    margin-top: 10px;
}

ul li p {
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    height: 20px;
    display: inline-block;
    margin-top: 6px;
    line-height: 20px;
}

ul li p.free:after,
ul li p.prem:after {
    width: auto;
    height: auto;
    font-size: 11px;
    font-weight: 800;
    padding: 4px;
    border-radius: 4px;
    margin-left: 8px;
    color: #444;
}

ul li p.prem:after {
    content: "PREMIUM";
    background-color: #81e9a9;
}
ul li p.free:after {
    content: "FREE";
    background-color: #56cdf1;
}

ul .dash, ul span {
    float: left;
    width: 100%;
    height: 30px;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    margin-top: 10px;
}

ul.subMain {
    margin: 0;
}
</style>