Ext.define('Foodbank_v1.model.Update', {
    extend: "Ext.data.Model",
    config: {
        fields: [
            {name: 'id', type: 'string'},
             {name: 'content', type: 'string'},
			{name: 'dateTime', type: 'string'}
        ]
    }
});