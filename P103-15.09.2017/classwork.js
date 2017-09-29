

function siyahiniGosder(list) {
		var neticeHtml='<table border="1">';

		neticeHtml+='<tr>';
			neticeHtml+='<th>AD</th>';
			neticeHtml+='<th>SOYAD</th>';
			neticeHtml+='<th>number</th>';
		neticeHtml+='</tr>';

	for (var i = 0; i < list.length; i++) {
		
		neticeHtml+='<tr>';
		neticeHtml+='<th>'+list[i].name+'</th>';
		neticeHtml+='<th>'+list[i].surname+'</th>';
		neticeHtml+='<th>'+list[i].number+'</th>';
		neticeHtml+='</tr>';

	}
	neticeHtml+='</table>';

	document.write(neticeHtml);
}

var studentList=[
	{
		
		name:'Yasin',
		surname:'Quliyev'
	},
	{
		name:'Yasin 657r',
		surname:'Quliyev 1'
	},
	{
		name:'Yasin 657',
		surname:'Quliyev 1'
	},
	{
		name:'Yasin 56',
		surname:'Quliyev 1'
	}
];

siyahiniGosder(studentList);