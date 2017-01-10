/*

INSTRUCTION FOR STYLING:

# Change background, color of the horizontal menu bar:
.em_nav .hnav { }

# Change font, color of hyperlinks:
.em_nav a { }
.em_nav a:hover { }

# Menu item's links when hover or active:
.em_nav li:hover > a, .em_nav li.active > a { }


# Top level's menu:
# -----------------

# Change padding, font, color of top menu item:
.hnav .menu-item-depth-0 a { }

# Change position of the drop-down menu of top level menu:
.hnav .menu-item-depth-0 > .menu-container,
.em-catalog-navigation.horizontal > li > ul,
.em-catalog-navigation.horizontal > li:hover > ul { top:50px }

# Level 2+ menu:
# -----------------

# Change background color, padding of container of level 2+ menu container:
.em_nav .menu-item-link > ul,
.em_nav .em-catalog-navigation ul { }

# Change font, color of hyperlink of level 2+ menu items:
.em_nav .menu-item-depth-1 a,
.em_nav .em-catalog-navigation li li a { }

# Change font, color of hover/active hyperlink of level 2+ menu items:
.em_nav .menu-item-depth-1 li:hover > a, 
.em_nav .menu-item-depth-1 li.active > a,
.em_nav .em-catalog-navigation li li:hover > a,
.em_nav .em-catalog-navigation li li.active > a { }


# ----------------

# Add a gutter between 2 children of hbox:
.em_nav .menu-item-hbox > .menu-container > li { margin-left:10px }
.em_nav .menu-item-hbox > .menu-container > li:first-child { margin-left:0 }

# Fix hbox on mobile view
.adapt-0 .menu-item-hbox > .menu-container { white-space:normal }
.adapt-0 .menu-item-hbox > .menu-container > li { display:block; margin-left:0 }



BELOW BASE CSS SHOULD NOT BE CHANGED:
===============================================================================
*/


ul ul, ul ol, ol ol, ol ul { font-size:100% }

.em_nav ul { margin:0;text-align:left;clear:both;}


/* horizontal menu */

.hnav .menu-item-depth-0 {position:relative;float:left;}
.hnav .menu-item-depth-0 a { display:block; /*height:20px; line-height:20px;*/ /*padding:5px 20px*/ }
.hnav.sample-menu-fixed .menu-item-depth-1 a { padding:5px 20px;}
.hnav .menu-item-depth-0 > .menu-container { position:absolute; top:30px; left:-9999px; z-index:999 }

/* vertical menu */

.vnav { width:200px }
.vnav .menu-item-depth-0 { position:relative }
.vnav .menu-item-depth-0 a { display:block;}

.vnav .menu-item-depth-0 > .menu-container { position:absolute; top:0; left:-9999px; z-index:9999 }

/* general */
.menu-item-parent > a { margin-right:31px }
.em_nav a.arrow span { display:block; /* add background arrow here */ }

/* ---------- level 2+ ---------- */

/* horizontal menu */

.hnav .menu-item-depth-0:hover > .menu-container,
.hnav .menu-item-depth-0.hover > .menu-container {}

/* vertical menu */

.vnav .menu-item-depth-0:hover > .menu-container,
.vnav .menu-item-depth-0.hover > .menu-container { left:75% }
.vnav.nav-right .menu-item-depth-0:hover > .menu-container,
.vnav.nav-right .menu-item-depth-0.hover > .menu-container { left:auto; right:100% }


.menu-item-hbox > .menu-container { white-space:nowrap }
.menu-item-hbox > .menu-container > li {white-space:normal; vertical-align:top;  }

.menu-item-link > .menu-container { min-width:180px;}

.menu-item-depth-0 .menu-item-link { position:relative }
.menu-item-depth-0 .menu-item-link > .menu-container { position:absolute; top:0; left:-9999px; z-index:9999 }

.em-catalog-navigation li:hover > ul,
.em-catalog-navigation li.hover > ul,
.menu-item-depth-0 .menu-item-link:hover > .menu-container,
.menu-item-depth-0 .menu-item-link.hover > .menu-container { left:100%; top:-11px; }
.nav-right .menu-item-depth-0 .menu-item-link:hover > .menu-container,
.nav-right .menu-item-depth-0 .menu-item-link.hover > .menu-container { left:auto; right:100% }

/* Catalog Navigation */
.em-catalog-navigation li.parent > a { margin-right:31px }
.em-catalog-navigation li.parent > a.arrow { margin-right:0;}
.em-catalog-navigation ul { /*min-*/width:180px;}
.em-catalog-navigation li { position:relative }
.em-catalog-navigation li > ul { position:absolute; top:0; left:-9999px; z-index:999 }

.nav-right .em-catalog-navigation li:hover > ul,
.nav-right .em-catalog-navigation li.hover > ul { left:auto; right:100% }


/* Catalog Navigation with vertical style of top level */
.em-catalog-navigation.horizontal > li {float:left;}
.em-catalog-navigation.horizontal > li > ul { top:38px }
.em-catalog-navigation.horizontal > li:hover > ul { left:0px; top:38px }

/* Mobile view */
@media (max-width:767px) {
	.menu-item-link, 
	.menu-item-text,
	.menu-item-hbox,
	.menu-item-vbox,
	.em-catalog-navigation li { display:block; float:none; width:100% }

	.menu-container,
	.em-catalog-navigation ul { width:100% !important; top:0 !important; }
	
	.hnav .menu-item-depth-0 > .menu-container,
	.menu-item-link > .menu-container,
	.em-catalog-navigation li > ul,
	.menu-item-depth-0 .menu-item-link > .menu-container	{display:none;position:static;}
	.menu-item-link.mhover > .menu-container,
	.em-catalog-navigation li.mhover > ul ,
	.menu-item-depth-0 .menu-item-link.mhover > .menu-container{display:block;position:static; }
}
/* Clear Divs */
.em_nav .hnav:after,
.em_nav .vnav:after,
#nav > .menu-container:after,
.menu-item-hbox:after { content:'.';display:block;clear:both;visibility:hidden;height:0;overflow:hidden }

/* workaround for touch devices 
.menu-item-parent > .menu-container { display:none }
.menu-item-parent:hover > .menu-container { display:block }
.em-catalog-navigation li.parent > ul { display:none }
.em-catalog-navigation li.parent:hover > ul { display:block }*/


