// JavaScript Document
Ext.define('Foodbank_v1.store.Updates', {
    extend: 'Ext.data.Store',
    config: {
        autoLoad: true,
        model: 'Foodbank_v1.model.Update',
        proxy: {
					type: 'jsonp',
					url: 'http://foodbank.redemptionmedia.co.uk/updates.php',
					 reader:{
                    type:'json',
                    rootProperty:''
               		 }
				}
    }
})