Ext.define('Myapp.view.main.home.login', {
	extend: 'Ext.Container',
	xtype: 'login',
	cls: 'login',
	layout: 'card',
	items: [{
		xtype:'panel',
		viewModel: {
			type: 'test'
		},
	defaultType: 'textfield',
	defaults:{
		flex:1
	},
	items:[{
		html: 'Login Form',
		style: 'background-color:violet'
	},
	{
		xtype:'textfield',
		fieldLabel: 'Login',
		name:'login',
		id:'userid',
		//inputType:'login',
		//value:'Enter your UserName',
	//	bind:'{login}'
	},
	{
		xtype:'textfield',
		fieldLabel: 'Password',
		name:'password',
		id:'passid',
		//inputType:'password',
		//value:'Enter your Password',
		//bind:'{password}'
	},
	
	{
		xtype:'button',
		text:'Submit',
		handler: function(){
		var login=Ext.getCmp('userid').getValue();
		var password=Ext.getCmp('passid').getValue();
			Ext.Ajax.request({
			url: 'http://localhost:3000/posts',
			method:'Post',
			jsonData:{
				uname: login,
				upassword:password
			},
			success:function(response){
				Ext.msg.alert("successful");
			},
			failure:function(response){
				Ext.msg.alert("failure");
				
			},
			})
		}
	},

]
}]
});
