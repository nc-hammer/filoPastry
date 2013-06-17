Ext.define('Foodbank_v1.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            about: 'about',
			update: 'updates',
			shoppingList: '#shoppingList'
        },
        control: {
            'about list': {
				itemtap: 'showAbout'
        	},
			'updates list': {
				itemtap: 'showUpdate'
        	},
			 shoppingList: {
				'loadFoodItems': 'onLoadFoodItems'
			}
		}
    },
	
	showPost: function(list, index, element, record) {
		this.getBlog().push({
			xtype: 'panel',
			title: record.get('title'),
			html: record.get('content'),
			scrollable: true,
			styleHtmlContent: true
		});
	},
	
	showAbout: function(list, index, element, record) {
		this.getAbout().push({
			xtype: 'panel',
			title: record.get('title'),
			html: record.get('content'),
			scrollable: true,
			styleHtmlContent: true
		});
	},
	
	showUpdate: function(list, index, element, record) {
		this.getUpdate().push({
			xtype: 'panel',
			title: record.get('dateTime'),
			html: record.get('content'),
			scrollable: true,
			styleHtmlContent: true
		});
	},
	
	init : function () {
	
	//var db = window.openDatabase("test", "1.0", "FoodbankDB", 1000000);
	//db.transaction(this.populateDB, this.errorCB, this.successCB);
	
	/*
	var onlineStore = Ext.getStore('FoodItems'),
      localStore = Ext.create('Ext.data.Store', {
        model: "Foodbank_v1.model.FoodItemOffline"
      }),
      me = this;

	

    localStore.load();

    
     // When app is online, store all the records to HTML5 local storage.
    // This will be used as a fallback if app is offline more
     
    onlineStore.on('refresh', function (store, records) {

		console.log('ONLINE');
      // Get rid of old records, so store can be repopulated with latest details
      localStore.getProxy().clear();

      store.each(function(record) {
		
        var rec = {
          name : record.data.name + ' (from localStorage)' // in a real app you would not update a real field like this!
        };

        localStore.add(rec);
        localStore.sync();
      });

    });

    //If app is offline a Proxy exception will be thrown. If that happens then use
    // the fallback / local stoage store instead
    
    onlineStore.getProxy().on('exception', function () {
	
	Ext.getStore('Foodbank_v1.store.FoodItems').setStore(localStore);
      //me.getShoppingList().setData(localStore); //rebind the view to the local store
      localStore.load(); // This causes the "loading" mask to disappear
      Ext.Msg.alert('Notice', 'You are in offline mode', Ext.emptyFn); //alert the user that they are in offline mode
    });
	*/

  },
  
  populateDB: function(tx){
         tx.executeSql('CREATE TABLE IF NOT EXISTS FoodItems (id unique, name)');
        // tx.executeSql('INSERT INTO FoodItems (id, data) VALUES (1, "Cereal")');
         //tx.executeSql('INSERT INTO FoodItems (id, data) VALUES (2, "Cabage")');
  },
  
  errorCB : function(err){
	  Ext.Msg.alert('Notice', 'SQL error', Ext.emptyFn); //alert the user that they are in offline mode
  },
  
  successCB : function(){
	  Ext.Msg.alert('Notice', 'SQL success', Ext.emptyFn); //alert the user that they are in offline mode
  },
  
  onLoadFoodItems : function(){
		console.log('in main view controller');
		//Ext.Msg.alert('Notice', 'In Load View Function');
		
		/*
		var db = window.openDatabase("test", "1.0", "FoodbankDB", 1000000);
	
	modelobj = Ext.regModel('FoodItems', {
            fields: [{			
					name : 'name',
					type : 'string'
				},{
					name : 'id',
					type : 'int',
					fieldOption : 'PRIMARY KEY ASC'
				}],
            proxy: {
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
            }
        });
        
        foodItemsStore = new Ext.data.Store({
            autoLoad:true,
            model : 'FoodItems'
        });
		*/
	}
   
});