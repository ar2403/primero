function BuscarPorNombre(Quien)
{
	alert("funcioba");
	alert(Quien);
	datos
	 = "Evento="+Quien;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.182/EventosINAOE/consultanombre_evento.php",
		data: datos
	}).done(function(msg){
		alert(msg);
		var DatosJSON=JSON.parse(msg);
		if (DatosJSON.datos==1)
		{
			alert("datos");
			$('#ResultadosE').empty();
			for (var i=0; i<DatosJSON.evento.length;i++)
			{
				
			  $('#ResultadosE').append('<div align="justify" style="clear:both"><div style="float:left; width:50%"><h4>Nombre:</h4><div id="NombreE">'+DatosJSON.evento[i].NombreE+'</div><h4>Fecha:</h4><div id="FechaE">'+DatosJSON.evento[i].FechaE+'</div><h4>Lugar:</h4><div id="LugarE">'+DatosJSON.evento[i].LugarE+'</div></div><div style="float:left; width:50%"><img src="http://192.168.1.177/EventosINAOE/recursos/fotos/'+DatosJSON.evento[i].nombre_evento+'.jpg" class="FotosE"></div></div>');	
			}
			$('.FotosE').width($('#ResultadosE').width()*0.5);
			$('#Evento').trigger('pagecreate');
		}
if (DatosJSON.datos==0)
		{
			alert('No hay Eventos que Mostrar con ese Nombre');
		}		
		
		
	});
}

function BuscarPorParticipante(Quien)
{
	
	datos = "nombre_participante="+Quien;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.182/EventosINAOE/consultanombre_participante.php",
		data: datos
	}).done(function(msg){
		alert(msg);
		var DatosJSON=JSON.parse(msg);
		if (DatosJSON.datos==1)
		{
			
			$('#ResultadosP').empty();
			for (var i=0; i<DatosJSON.par.length;i++)
			{
				
			  $('#ResultadosP').append('<div align="justify" style="clear:both"><div style="float:left; width:50%"><h4>Nombre:</h4><div id="NombreP">'+DatosJSON.par[i].NombreP+'</div><h4>ApellidoPaterno:</h4><div id="ApPaterno">'+DatosJSON.par[i].ApellidoP+'</div><h4>Domicilio:</h4><div id="DomicilioP">'+DatosJSON.par[i].DireccionP+'</div></div>');	
			}
			
		}
if (DatosJSON.datos==0)
		{
			alert('No hay Participantes que Mostrar con ese Nombre');
		}		
		
		
	});
}

function Listado()
{
	
	$.ajax({
		type: "POST",
		url: "http://192.168.1.182/catalogopeliculas/consultalistado.php",
		
	}).done(function(msg){
		alert(msg);
		var DatosJSON=JSON.parse(msg);
		if (DatosJSON.datos==1)
		{
			
			$('#Tabla').empty();
			for (var i=0; i<DatosJSON.peli.length;i++)
			{
				
			  $('#Tabla').append('<div align="justify" style="clear:both"><div style="float:left; width:50%"><h4>Id Pelicula:</h4><div id="RIdPelicula">'+DatosJSON.peli[i].Id+'</div><h4>Nombre:</h4><div id="RNombre">'+DatosJSON.peli[i].Nombre+'</div><h4>Director:</h4><div id="RDirector">'+DatosJSON.peli[i].Director+'</div><h4>Genero:</h4><div id="RGenero">'+DatosJSON.peli[i].Genero+'</div><h4>Duracion:</h4><div id="RDuracion">'+DatosJSON.peli[i].Duracion+'minutos</div></div><div style="float:left; width:50%"><img src="http://192.168.1.177/catalogopeliculas/recursos/fotos/'+DatosJSON.peli[i].Id+'.jpg" class="FotosP"></div><strong><hr></strong></div>');	
			}
			$('.FotosP').width($('#Tabla').width()*0.5);
			$('#Nom').trigger('pagecreate');
		}
if (DatosJSON.datos==0)
		{
			alert('No hay Peliculas que Mostrar');
		}		
		
		
	});
}



$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
		
  $('#PEvento').tap(function(){
	  
    BuscarPorNombre($('#buscarE').val());
  });
  
  $('#PParticipante').tap(function(){
	  
    BuscarPorParticipante($('#buscarP').val());
  });
  
  $('#ListadoP').tap(function(){
	 
    Listado();
	$.mobile.changePage('#Lis');
  });
  
  
 },false); //deviceready
 
}); //document ready 
