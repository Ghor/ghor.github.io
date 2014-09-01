function GameCardController( gameinfo )
{
	var node = document.createElement( "div" );
		node.setAttribute( "class", "panel panel-default gamecard" );
		
		var headerNode = document.createElement( "div" );
			headerNode.setAttribute( "class", "panel-heading gamecard-header" );
			node.appendChild( headerNode );
			var header_text_node = document.createElement( "h1" );
				header_text_node.innerText = gameinfo.title;
				headerNode.appendChild( header_text_node );
			
		var bodyNode = document.createElement( "div" );
			bodyNode.setAttribute( "class", "gamecard-body" );
			node.appendChild( bodyNode );
		
			var iconNode = document.createElement( "img" );
				iconNode.setAttribute( "src", gameinfo.icon );
				iconNode.setAttribute( "class", "gamecard-icon" );
				bodyNode.appendChild( iconNode );
			
			var contentNode = document.createElement( "div" );
				contentNode.setAttribute( "class", "gamecard-content" );
				contentNode.innerHTML = gameinfo.card_description;
				bodyNode.appendChild( contentNode );
		
		if ( gameinfo.tools != undefined )
		{
			var tools_node = document.createElement( "div" );
				tools_node.setAttribute( "class", "gamecard-languagebar" );
				tools_node.innerHTML = "Tools: "+gameinfo.tools;
				bodyNode.appendChild( tools_node );
		}
		
		var linkBarController = new LinkBarController();
			for ( i=0, i_end=gameinfo.links.length; i<i_end; ++i )
			{
				linkBarController.addLinkButton( gameinfo.links[i] );
			}
		
		var footerNode = linkBarController.node;
			footerNode.setAttribute( "class", "panel-footer games-linkbar gamecard-footer" );
			node.appendChild( footerNode );
		
	this.node = node;
	this.header_text_node = header_text_node;
}

GameCardController.prototype.fitHeaderText = function()
{
	var parent_computed_style = window.getComputedStyle( this.header_text_node.parentNode );
	var parent_box_height = this.header_text_node.parentNode.clientHeight - parseInt( parent_computed_style.getPropertyValue( "padding-top" ) ) - parseInt( parent_computed_style.getPropertyValue( "padding-bottom" ) );
	
	var computed_style = window.getComputedStyle( this.header_text_node );
	var fontsize = parseInt( computed_style.fontSize );
	while ( ( fontsize > 8 ) && ( this.header_text_node.clientHeight > parent_box_height ) )
	{
		fontsize -= 1;
		this.header_text_node.style.fontSize = String( fontsize )+"px";
	}
}