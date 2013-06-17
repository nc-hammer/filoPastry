Ext.define('Foodbank_v1.model.About', {
    extend: "Ext.data.Model",
    config: {
        fields: [
            {name: 'id', type: 'string'},
            {name: 'title', type: 'string'},
			{name: 'content', type: 'string'}
        ]
    }
});