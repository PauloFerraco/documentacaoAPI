<template>
	<div class="tooltip" :style="{top: top, lineHeight: line}" v-html="title"></div>
</template>

<script>

export default {
	name: "ToolTip",
	props: ['title', 'top', 'line']
}
</script>

<style scoped>

.tooltip {
position: absolute;
top: -42px;
left: 50%;
width: auto;
height: auto;
text-align: center;
line-height: 38px;
background-color: rgba(0,0,0,.8);
border-radius: 4px;
font-size: 14px;
font-weight: 500;
color: #fff;
white-space: nowrap;
transform: translateX(-50%);
z-index: 99;
overflow: inherit;
padding: 0 10px;
text-transform: none;
box-shadow: 0 1px 5px rgba(0,0,0,.1);
opacity: 0;
visibility: hidden;
transition: all .3s ease-in;
}

.box:hover > .tooltip,
.tip:hover .tooltip {opacity: 1;visibility: visible;}

.tooltip >>> .subtitle {
font-size: 13px;
font-weight: 400;
}

.tooltip >>> .desc {
font-size: 11px;
font-weight: 300;
}
</style>