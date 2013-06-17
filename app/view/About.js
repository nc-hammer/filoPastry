var about = Ext.create('Foodbank_v1.store.About');

Ext.define('Foodbank_v1.view.About', {
	extend: 'Ext.navigation.View', 
	xtype: 'about',

	config: {
		title: 'About',
		iconCls: 'info',
		
		items: {
			xtype: 'list',
			itemTpl: '<bold>{dateTime}</bold><br/>{title}',
			title: 'About',
			
			store: about
		}
	}
});