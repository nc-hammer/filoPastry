var updates = Ext.create('Foodbank_v1.store.Updates');

Ext.define('Foodbank_v1.view.Updates', {
	extend: 'Ext.navigation.View', 
	xtype: 'updates',
	requires: ['Foodbank_v1.store.Updates'],

	config: {
		title: 'Updates',
		iconCls: 'star',
		
		items: {
			xtype: 'list',
			itemTpl: '<bold>{dateTime}</bold><br/>{content}',
			title: 'Updates',
			
			store: updates
		}
	}
});