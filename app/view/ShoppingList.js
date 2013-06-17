
//set up refs to the two stores
/*
var foodItem = Ext.getStore('FoodItems');
var foodItemLocal = Ext.getStore('FoodItemsLocal');

//load the localStorage store
foodItemLocal.load();

// check if localStorage contains data
if ((foodItemLocal.getCount()) == 0) {
	// nothing found so  we need to load the data from external source
	console.log('localStorage data not found');
	//hand off to onMarkerStoreLoad function (below)
	foodItem.on({
		load: 'onFoodItemLoad',
		scope: this
	});
	//call load to trigger above
	foodItem.load();
} else {
	// we are ok, just print some debug
	console.log('localStorage data found');
	console.log('localStorage count:' + foodItemLocal.getCount());
}
//finally set the list's store to localStorage
this.getListMarkersCard().setStore(foodItemLocal);

//



onFoodItemLoad: function() {
        //set up refs
        var foodItemLocal= Ext.getStore('FoodItemLocal');
        var foodItem = Ext.getStore('FoodItem');
            //loop through each data item and add to localStorage
        foodItem.each(function(item){
            foodItemLocal.add(item);
        });
        foodItemLocal.sync();
}
*/

//var shoppingList = Ext.create('Foodbank_v1.store.FoodItems');


Ext.define('Foodbank_v1.view.ShoppingList', {
	extend: 'Ext.navigation.View', 
	xtype: 'shoppinglist',
	//requires: ['Foodbank_v1.store.FoodItems'],

	config: {
		title: 'Shoppinglist',
		iconCls: 'list',
		id: 'shoppingList',
		/*
		items: {
			xtype: 'list',
			itemTpl: '{name}',
			title: 'Shopping List',
			store: shoppingList
		},*/
		/*listeners:  {
              retrunFoodItemsStore: function(){  Ext.Msg.alert('I was painted to the screen'); }
       	}*/
	},
	
	 initialize: function () {
		 console.log('view intialixed')
		 this.fireEvent('loadFoodItems', this);
	 }
});