//var db = window.openDatabase("test", "1.0", "FoodbankDB", 1000000);
//db.transaction(this.populateDB, this.errorCB, this.successCB);



// JavaScript Document
Ext.define('Foodbank_v1.store.FoodItems', {
    extend: 'Ext.data.Store',
    config: {
		autoLoad: true,
        model: 'Foodbank_v1.model.FoodItemOffline',
		proxy: {
		  //timeout: 3000, // How long to wait before going into "Offline" mode, in milliseconds.
			type: 'jsonp',
			url: 'http://foodbank.redemptionmedia.co.uk/foodItems.php',
			 reader:{
			type:'json',
			rootProperty:''
			 }
		}
		/*proxy: {
                type: 'SqliteProxy',
				dbConfig :{
					tablename 	: 'FoodItems',
					dbConn 	: db,
					//dbQuery : 'SELECT * FROM contact_table limit 0,1' //dbQuery only works with read operation
				},
				reader : {
					idProperty : 'ID'
				}
			},
            writer: {
                type: 'json'
            },
		autoLoad: true // Will load programmatically later
		*/}
 });
 