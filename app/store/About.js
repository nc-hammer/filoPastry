// JavaScript Document
Ext.define('Foodbank_v1.store.About', {
    extend: 'Ext.data.Store',
    config: {
        autoLoad: true,
        model: 'Foodbank_v1.model.About',
      proxy: {
					type: 'jsonp',
					url: 'http://foodbank.redemptionmedia.co.uk/about.php',
					 reader:{
                    type:'json',
                    rootProperty:''
               		 }
				}
    }
})// JavaScript Document