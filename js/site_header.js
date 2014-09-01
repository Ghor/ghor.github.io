document.write( '<title>Jeffrey Hunt</title>' )
document.write( '<link href="css/styles.css" rel="stylesheet">' )

var pages = [
{"name":"Home","url":"index.html"},
{"name":"About","url":"about.html"},
{"name":"Games","url":"games.html"},
{"name":"Code Samples","url":"code_samples.html"},
{"name":"Contact","url":"contact.html"}

]

function CreateChildElementWithAttributes( parent, tag, attributes )
{
	var node = document.createElement( tag );
	for ( key in attributes )
	{
		node.setAttribute( key, attributes[ key ] );
	}
	parent.appendChild( node );
	return node;
}

function SiteHeaderController( page_name )
{
	var node = document.createElement( "div" );
		node.setAttribute( "class", "navbar navbar-default" );
		
		var header_node = CreateChildElementWithAttributes( node, "div", { "class":"site_header"} );
			header_node.innerHTML = "<h1>Jeffrey Hunt</h1>"; //<h1>Ghor <small>this is a website</small></h1>
			
		var nav_container_node = document.createElement( "div" );
			nav_container_node.setAttribute("style","margin:8px");
			node.appendChild( nav_container_node );
		var nav_node = CreateChildElementWithAttributes( nav_container_node, "ul", { "class":"nav nav-pills"} );
		
		var CreateNavButton = function( text, url )
		{
			var button_node = document.createElement( "li" );
			button_node.innerHTML = "<a href=\""+url+"\">"+text+"</a>";
			if ( text == page_name )
			{
				button_node.setAttribute( "class", "active" );
			}
			nav_node.appendChild( button_node );
		}
		
		for ( i=0, i_end=pages.length; i<i_end; ++i )
		{
			CreateNavButton( pages[i].name, pages[i].url );
		}
		
	this.node = node;
}

function InsertInline( node )
{
	// Write a new node to the document that we can fetch by id to get the current insertion point in the document.
	document.write( "<div id='InsertInline_insertion_marker_node'></div>" );
	
	var insertion_marker_node = document.getElementById( "InsertInline_insertion_marker_node" );
	insertion_marker_node.parentNode.replaceChild( node, insertion_marker_node );
}

/*
document.write( '\
	<nav class="navbar navbar-default" role="navigation">\
		<div class="site_header">\
				<h1>Ghor <small>this is a website</small></h1>\
		</div>\
		<div style="margin:8px;">\
			<ul class="nav nav-pills">\
				<li><a href="#">Home</a></li>\
				<li><a href="#">About</a></li>\
				<li class="active"><a href="#">Games</a></li>\
				<li><a href="#">Code Samples</a></li>\
				<li><a href="#">Contact</a></li>\
			</ul>\
		</div>\
	</nav>\
');
*/