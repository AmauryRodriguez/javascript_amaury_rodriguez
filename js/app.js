function Calculadora()
{
	this.prinum=0.0;
	this.segnum=0.0;
	this.restot=0.0;
	this.opeant="";
	this.opeact="";
	this.estope=0;
	this.ternum=0.0;

	this.tiepar;
	this.opeint=false;
	this.teclas = ["on","sign","raiz","dividido","7","8","9","por","4","5","6","menos","3","2","1","0","punto","igual","mas"];



	this.mousedown = function (tecla) //tecla presionada
	{		
		var locobjpre = document.getElementById(tecla);
	 	locobjpre.style['transform'] = 'scale(0.9)'; //element.style['transform'] = 'rotate(30deg)';
		locobjpre.style['msTransform'] = 'scale(0.9)'; // IE
		locobjpre.style['MozTransform'] = 'scale(0.9)'; // Firefox
		locobjpre.style['WebkitTransform'] = 'scale(0.9)'; // Chrome
		locobjpre.style['OTransform'] = 'scale(0.9)'; // Opera
	}
	this.mouseup = function (tecla) // tecla soltada
	{
		var locobjpre = document.getElementById(tecla);
		locobjpre.style['transform'] = 'scale(1.1)'; //element.style['transform'] = 'rotate(30deg)';
		locobjpre.style['msTransform'] = 'scale(1.1)'; // IE
		locobjpre.style['MozTransform'] = 'scale(1.1)'; // Firefox
		locobjpre.style['WebkitTransform'] = 'scale(1.1)'; // Chrome
		locobjpre.style['OTransform'] = 'scale(1.1)'; // Opera		
	}

	this.mouseout = function (tecla) // Fuera de la Tecla
	{	
		this.mouseup(tecla);
	}
	
	this.click = function (tecla) // Click a la Tecla
	{		
		switch (tecla)
		{
			case "on":this.clickon();
			        break;
			case "sign":this.clicksign();
			        break;
			case "raiz":this.clickraiz();
			        break;
			case "dividido":this.procesar_operador('/');
			        break;
			case "7":this.clickdigito("7");
			        break;
			case "8":this.clickdigito("8");
			        break;
			case "9":this.clickdigito("9");
			        break;
			case "por":this.procesar_operador('*');
			        break;
			case "4":this.clickdigito("4");
			        break;
			case "5":this.clickdigito("5");
			        break;
			case "6":this.clickdigito("6");
			        break;
			case "menos":this.procesar_operador('-');
			        break;
					
			case "3":this.clickdigito("3");
			        break;
			case "2":this.clickdigito("2");
			        break;
			case "1":this.clickdigito("1");
			        break;
			case "0":this.clickdigito("0");
			        break;
            case "punto":this.clickpunto();
			        break;
			case "mas":this.procesar_operador('+');
			        break;					
			case "igual":this.procesar_igual('=');
			        break;					
					
					
		}
	}

	this.clickdigito=function (tecla)
	{
		this.agregar_digito(tecla);
	}
	this.clickpunto=function ()
	{
		this.agregar_punto();
	}
	this.clickon=function ()
	{
		this.cancelar();
	}

	this.clicksign= function ()
	{
		this.intercambiar_signo();
	}

	this.clickraiz= function ()
	{
		this.calcular_raiz();
	}

	//metodos****************************************************
	this.mostrar_enpantalla=function(parnum)
	{
		var loccadtot = String(parnum);
		document.getElementById('display').innerHTML= loccadtot.substring(0,this.tamano_cadena(loccadtot));
	}

	this.comprobar_punto=function()
	{
		var locdis = document.getElementById('display').innerHTML;
		if(locdis.indexOf(".")!=-1)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	this.agregar_punto=function()
	{
		if (this.opeint == true) 
		{
			this.opeint = false;
			this.cancelar();
		}
		var locdis = document.getElementById('display').innerHTML;
		if (this.estope==0 || this.estope==4) {
			this.inicializar();
			this.display_vacio();
			this.mostrar_enpantalla("0.");
			this.estope=1;
		}
		else
		{
			if (this.estope==2) 
			{
				this.estope=3;
				this.display_vacio();
				this.mostrar_enpantalla("0.");
			}
			else
			{
				if (this.estope==1 || this.estope==3) 
				{
					if (this.comprobar_punto()==false) 
					{
						if (locdis.length<=7) {
							document.getElementById('display').innerHTML= locdis+".";
						}
						else
						{
						}
					}
					else
					{
					}
				}
				else
				{					
				}
			}
		}
	}

	this.agregar_digito=function(digito)
	{
		if (this.opeint == true) 
		{
			this.opeint = false;
			this.cancelar();
		}

		if (this.estope==4) {
			this.inicializar();
			this.display_vacio();
		}

		var locdis=document.getElementById('display').innerHTML;

		if (locdis.length<this.tamano_cadena(locdis))
		{
			if (this.estope==0) {
				this.estope=1;
			}
			else
			{
				if (this.estope==2) {
					this.estope=3;
				}
			}
			if (locdis.length>1)
			{
				this.mostrar_enpantalla(locdis+digito);
			}
			else
			{
				if (parseInt(locdis)!=0) {
					this.mostrar_enpantalla(locdis+digito);
				}
				else
				{
					if (digito!=0) 
					{
						this.mostrar_enpantalla(digito);
					}
				}
			}
		}
		else 
		{
		}
	}


	this.inicializar= function ()
	{
		this.prinum=0.0;
		this.segnum=0.0;
		this.restot=0.0;
		this.opeant="";
		this.opeact="";
		this.estope=0;
		this.ternum=0.0;
	}

	this.cancelarentrada= function ()
	{
		this.segnum=0.0;	
		this.estope=3;		
	}

	this.reiniciar = function ()
	{
		this.display_vacio();
	}
	this.cancelar = function ()
	{
		this.opeint=false;
		switch(this.estope) {
			case 0:
			    this.inicializar(); 
				this.reiniciar();
				break;
			case 1:
			    this.inicializar();
				this.reiniciar();
				break;
			case 2:
				this.inicializar();
				this.reiniciar();
				break;
			case 3:
				this.cancelarentrada();
				this.reiniciar();
				break;
			case 4:
			    this.inicializar();
				this.reiniciar();
				break;
			default:
				break;
		}
	}

	this.intercambiar_signo = function ()
	{
		var locdis = this.obtener_display();
		if (this.estope==1 || this.estope==3) {
			
			if (locdis!=0) 
			{
				locdis = -1*locdis;
				this.mostrar_enpantalla(locdis);
			}
		}
		else
		{
			if (this.estope==4) 
			{
				if (locdis!=0) 
				{
					locdis = (-1*locdis);
					this.mostrar_enpantalla(locdis);
					this.restot= locdis;
					this.prinum=this.restot;
				}
			}
		}
	}

	this.detener = function ()
	{
		//window.clearTimeout(this.tiepar);
	}
	this.calcular_raiz = function ()
	{
		var locdis = this.obtener_display();
		if (this.estope==1) 
		{
			locdis = this.redondear(Math.sqrt(locdis),8);
			this.mostrar_enpantalla(locdis);
			// this.prinum=locdis;
			// this.ternum=this.prinum;			
			// this.restot = this.prinum;
			// this.mostrar_resultado();
			// this.estope=4;
			this.opeint=true;
		}
		else
		{
			if (this.estope==3) {
				
				if (locdis>0) 
				{
					locdis = this.redondear(Math.sqrt(locdis),8);
					this.mostrar_enpantalla(locdis);
					this.opeint = true;
				}
			}
			else
			{
				if (this.estope==4) 
				{
					if (locdis>0)
					{
						locdis = this.redondear(Math.sqrt(locdis),8);
						this.mostrar_enpantalla(locdis);
						this.restot= locdis;
						this.prinum=this.restot;
						this.estope = 1;
						this.opeint = true;
					}
				}
			}
		}
	}

	this.obtener_display=function ()
	{
		var locdis = String(document.getElementById('display').innerHTML);
		if (locdis.trim()=="") 
		{
			locdis="0";
		}
		
		var locnum;
		if (locdis.indexOf(".")==-1)
		{
			locnum=parseInt(locdis); 
			return locnum;			
		}
		else
		{
			locnum= parseFloat(locdis);
			return locnum;
		}
		
	}
	this.convertir_cadena_numero = function (parcad)
	{
		if (parcad.trim()=="") 
		{
			parcad="0";
		}
		
		var locnum;
		if (parcad.indexOf(".")==-1)
		{
			locnum=parseInt(parcad); 
			return locnum;			
		}
		else
		{
			locnum= parseFloat(parcad);
			return locnum;
		}
		
	}
	this.display_vacio=function ()
	{
		if (this.estope==0 || this.estope==1 || this.estope==2 || this.estope==4) {
			this.inicializar();
			document.getElementById('display').innerHTML="0";
		}
		else
		{
			if (this.estope==3) {
				if (this.obtener_display().length==0) {
					this.inicializar();
					document.getElementById('display').innerHTML="0";
				}
				else
				{
					document.getElementById('display').innerHTML="";
				}
			}
			
		}
	}
	this.redondear=function (num,dec)
	{
		num=num*Math.pow(10,dec);
		num=Math.round(num);
		num=num/Math.pow(10,dec);
		return num;
	}

	this.tamano_cadena = function(parcadtot)
	{
		var totdig = 8;
		if (parcadtot.indexOf("-")!=-1) {
			totdig = totdig+1;
		}
		if (parcadtot.indexOf(".")!=-1) {
			totdig = totdig+1;
		}
		return totdig;
	}

	this.mostrar_resultado=function ()
	{
		var loctot = String(this.restot);
		if (loctot.length<=8) 
		{
			document.getElementById('display').innerHTML=loctot;
		}
		else
		{
			locnumtot = this.convertir_cadena_numero(loctot);

			this.restot=this.redondear(locnumtot,8);
			var loccadtot = String(this.restot);

			document.getElementById('display').innerHTML= loccadtot.substring(0,this.tamano_cadena(loccadtot));

		}
	}//window.clearTimeout(this.tiepar);

	this.establecer_tipo_numerico= function()
	{
		if (this.comprobar_punto(String(this.prinum))==true ||
		 this.comprobar_punto(String(this.segnum))==true) 
		{
			this.prinum=parseFloat(this.prinum);
			this.segnum=parseFloat(this.segnum);

		}
		else
		{
			this.prinum=parseInt(this.prinum);
			this.segnum=parseInt(this.segnum);
		}
	}

	this.ejecutar_operacion = function (signo)
	{
		//this.establecer_tipo_numerico();
		switch(signo) {
			case "+":
				this.restot = this.prinum+this.segnum;
				break;

			case "-":
				this.restot = this.prinum-this.segnum;
				break;

			case "*":
				this.restot = this.prinum*this.segnum;
				break;

			case "/":
				this.restot =this.prinum/this.segnum;
				break;
			default:
				 break;
		}
	}

	this.procesar_resultado= function (signo)
	{
		if (signo=="=") {
			this.ejecutar_operacion(this.opeant);
		}
		else 
		{
			this.restot = this.ejecutar_operacion(signo);//no es necesario enviar pri ni seg pq estos son globales
			this.prinum=this.segnum;
			this.segnum=0;
			this.opeant=this.opeact;
			this.opeact="";
		}
	}

	this.display_blanco = function ()
	{
		document.getElementById('display').innerHTML="";	
	}
	this.procesar_operador=function (signo)
	{
		this.opeint=false;
		if (this.estope==1 || this.estope==0) 
		{
			this.opeact=signo;
			this.prinum=this.obtener_display();
			this.estope=2;
		}
		else 
		{
			if (this.estope==2) {
				this.opeact=signo;
			}
			else 
			{
				if (this.estope==3) 
				{
					this.segnum=this.obtener_display();
					this.ejecutar_operacion(this.opeact);
					this.prinum=this.restot;
					this.segnum=0;
					this.opeant=this.opeact;
					this.opeact=signo;
					this.estope=2;
				}
				else
				{
					this.prinum=this.restot;
					this.segnum=0;
					this.opeant=this.opeact;
					this.opeact=signo;
					this.estope=2;
				}
			}
		}
		this.display_blanco();
	}

	this.procesar_igual=function ()
	{
		this.opeint=false;
		if (this.estope==1 || this.estope==0) 
		{
			this.prinum=this.obtener_display();
			this.ternum=this.prinum;			
			this.restot = this.prinum;
			this.mostrar_resultado();
			this.estope=4;
		}
		else 
		{
			if (this.estope==2) 
			{

				this.ternum=this.prinum;
				this.segnum=this.ternum;
				this.ejecutar_operacion(this.opeact);
				this.opeant=this.opeact;
				this.opeact=this.opeact;
				this.mostrar_resultado();
				this.estope=4;
			}
			else 
			{
				if (this.estope==3) 
				{
					this.ternum=this.obtener_display();
					this.segnum=this.ternum;
					this.ejecutar_operacion(this.opeact);
					this.mostrar_resultado();
					this.prinum=this.restot;
					this.segnum=0;
					this.opeant=this.opeact;
					this.opeact=this.opeact;
					this.estope=4;
				}
				else
				{
					this.prinum=this.restot;
					this.segnum=this.ternum;
					this.ejecutar_operacion(this.opeant);
					this.mostrar_resultado();
					this.prinum=this.restot;
					this.segnum=0;			
					this.opeant=this.opeact;
					this.opeact=this.opeact;
					this.estope=4;
				}
			}
		}
	}
}



var objcalculadora=new Calculadora();
