//var foodItesmObj;
Ext.ns('DbConnection');
var foodItemsStore;

Ext.define('Foodbank_v1.controller.FoodItems', {
	extend: 'Ext.app.Controller',
	
	config: {
		views: ['ShoppingList'],
		refs: {
			shoppingList: '#shoppingList'
		},
		control: {
		shoppingList: {
			loadFoodItems: 'onLoadFoodItems'
			}
		}
	},
	
	onLoadFoodItems : function(view){
		console.log('in foodItems view controller');
		//Ext.Msg.alert('Notice', 'In Load View Function');
		
		//check if online
		var online = navigator.onLine;
		console.log('C:FI  var online: ' + online);
		
		if(online){
			var shoppingList = Ext.create('Foodbank_v1.store.FoodItems');
			
			
			shoppingList.load({
				callback: function(records, operation, success){
					
					this.updateDB(shoppingList);
				},
				
				scope : this
			});
			
			 var items = []
				   
				   items.push({
					   xtype: 'list', itemTpl: '{name}', title: 'Shopping List', store: shoppingList
				   });
				   
				   //set view items
				 	view.setItems(items);
					
					
		}else{
		
			Ext.DbConnection = window.openDatabase("test", "1.0", "FoodbankDB", 1000000);
			Ext.DbConnection.transaction(this.populateDB, this.errorCB, this.successCB(view));
		}
		
		
		//var db = window.openDatabase("test", "1.0", "FoodbankDB", 1000000);
		//db.transaction(this.populateDB, this.errorCB, this.successCB);
	
		//var dbconnval =  {dbName : "FoodbankDB", dbDescription: "testdb"};
		
		//Ext.DbConnection = new Ext.Sqlite.Connection(dbconnval);
	
	},
	
	populateDB: function(tx){
		 tx.executeSql('CREATE TABLE IF NOT EXISTS FoodItems (id, name)');
		 //tx.executeSql('INSERT INTO FoodItems (name) VALUES ("Cereal")');
		//tx.executeSql('INSERT INTO FoodItems (name) VALUES ("Cabage")');
		//console.log('C:FI test daata added');
	},
	
	errorCB : function(err){
	  Ext.Msg.alert('Notice', 'SQL error', Ext.emptyFn); //alert the user that they are in offline mode
	console.log(err);
	},
	
	successCB : function(view){
		//Ext.Msg.alert('Notice', 'SQL success', Ext.emptyFn); //alert the user that they are in offline mode
		
		
		console.log("C:FI; in successCB function");
		
		//get table data...
		Ext.DbConnection.transaction(function (tx){
			tx.executeSql('SELECT * from FoodItems', [], function(tx, results){
					console.log("in read loop 2");
					var len = results.rows.length, i;
					var arrFoodItems = new Array();
					for (i = 0; i < len; i++){
						var arrFoodItem = new Array();
						arrFoodItem.name = results.rows.item(i).name;
						arrFoodItem.id = results.rows.item(i).id;
					 	console.log(results.rows.item(i));
					 	arrFoodItems.push(arrFoodItem);
					  
				   }
				   
				   console.log(arrFoodItems);
				   
				   foodItemsStore = Ext.create('Ext.data.Store', {
						model: 'Foodbank_v1.model.FoodItemOffline',
						data : arrFoodItems
					});
				   
				   var items = []
				   
				   items.push({
					   xtype: 'list', itemTpl: '{name}', title: 'Shopping List', store: foodItemsStore
				   });
				   
				 	view.setItems(items);
				  	//xtype: 'list', itemTpl: '{name}', title: 'Shopping List', store: foodItemsStore
				  
				}, this.errorCB);
		});
	  
	  /*
	  modelobj = Ext.regModel('foodItems', {
            fields: [{			
					name : 'anme',
					type : 'string'
				},{
					name : 'ID',
					type : 'int',
					fieldOption : 'PRIMARY KEY ASC'
				}],
            proxy: {
                type: 'SqliteProxy',
				dbConfig :{
					tablename 	: 'FoodItems',
					dbConn 	: Ext.DbConnection.dbConn,
					//dbQuery : 'SELECT * FROM contact_table limit 0,1' //dbQuery only works with read operation
				},
				reader : {
					idProperty : 'ID'
				}
			},
            writer: {
                type: 'json'
            }
        });
        
        foodItemsStore = new Ext.data.Store({
            autoLoad:true,
            model : 'foodItems'
        });
		*/
	  
	},
	
	updateDB: function(store){
		
		var arrayItems = new Array();
		
		arrayItems = store.data.items;
		
		Ext.DbConnection = window.openDatabase("test", "1.0", "FoodbankDB", 1000000);
		
		//clear table data
		Ext.DbConnection.transaction(function (tx){
				tx.executeSql('DELETE from FoodItems', [], function(tx, results){}, this.errorCB);});
		
		for(i=0; i<arrayItems.length; i++){
			console.log(arrayItems[i].data.name);
			var id = arrayItems[i].data.id;
			var name = arrayItems[i].data.name;
			//add table data
			this.addFoodItem(id, name);
		}
		
		
	},
	
	addFoodItem: function(id, name){
		Ext.DbConnection = window.openDatabase("test", "1.0", "FoodbankDB", 1000000);
		
		Ext.DbConnection.transaction(function (tx){
				tx.executeSql('INSERT INTO FoodItems (id, name) VALUES (?, ?) ', [id, name], function(tx, results){}, this.errorCB);});
	}
	
});

