import{c as a,d as t,e as r,x as l}from"./index.bf56c37c.js";var i=a({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const s=t(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>r("div",{class:s.value},l(o.default))}}),p=a({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const s=t(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>r("div",{class:s.value},l(o.default))}});export{p as Q,i as a};