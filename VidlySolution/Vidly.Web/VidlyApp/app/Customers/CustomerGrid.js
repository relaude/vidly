Ext.define('Vidly.Customers.CustomerGrid', {
    id: 'grid-customers',
    extend: 'Ext.grid.Panel',
    xtype: 'customergrid',
    store: { type: 'customerstore' },
    title: 'Customers',

    columns: [
        { text: 'ID', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'displayName', flex: 1 },
        { text: 'Membership', dataIndex: 'membership', flex: 1 },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: "center",
            header: "Update",
            id: 'customer-update',
            icon: '/content/icons8-update-50.png',
            tooltip: 'Update Customer',
            handler: 'onUpdateItemClick'
        },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: "center",
            header: "Delete",
            id: 'customer-delete',
            icon: '/content/icons8-minus-50.png',
            tooltip: 'Delete Customer',
            handler: 'onDeleteItemClick'
        }
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            id: 'searchField',
            xtype: 'textfield',
            bind: '{search}',
            emptyText: 'search'
        }, {
            xtype: 'button',
            text: 'Search',
            listeners: {
                click: 'onClickButtonSearch'
            }
        }, {
            xtype: 'button',
            text: 'Add',
            listeners: {
                click: 'onClickAddButton'
            }
        }],
    }],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});