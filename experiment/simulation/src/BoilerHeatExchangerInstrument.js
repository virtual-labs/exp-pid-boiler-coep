
function BoilerHeatExchangerInstrument()
{
	
	
	var InstrMasterJson = {};
	var StdCompInstruCount=23;
	var StdTTCount=6;
	var StdPTCount=1;
	var StdFTCount=2;
	var StdLTCount=1;
	var StdLSLCount=4;
	var StdLSHCount=2;
	var StdTSHCount=1;
	var StdTSLCount=1;
	var StdPSHCount=1;
	var StdVFDCount=2;
	var StdPLCCount=1;
	var StdSCRCount=1;
	
	var perTTCount;
	var perPTCount;
	var perFTCount;
	var perLTCount;
	var perLSLCount;
	var perLSHCount;
	var perTSHCount;
	var perTSLCount;
	var perPSHCount;
	var perVFDCount;
	var perPLCCount;
	var perSCRCount;
	
	var tt;
	var pt;
	var ft;
	var lt;
	var lsl;
	var lsh;
	var tsh;
	var tsl;
	var psh;
	var vfd;
	var plc;
	var scr;
	
	
	var totalComp1;
	
	$("#Header").html("	<center><span >BOILER HEAT EXCHANGER - INSTRUMENT DIAGRAM</span></center>");
	$("#Selection").css({"overflow": "auto","height":" 837px"});
	htm=''
		+'<div class="row titlePart" style="    border-style: unset;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
		
		
     	+'<div class="row conf" >'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of temperature transmitter (TT)</b></label>'
		+' <input class="form-select" id="tt"  type="number" min="0" max="6" value="0" tabindex="1"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of pressure transmitter (PT)</b></label>'
		+' <input class="form-select" id="pt" type="number" min="0" max="5" value="0" tabindex="2"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of flow transmitter (FT)</b></label>'
		+' <input class="form-select" id="ft" type="number" min="0" max="5" value="0" tabindex="3"></input>'
		+'</div>'

		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Level transmitter (LT)</b></label>'
		+' <input class="form-select" id="lt" type="number" min="0" max="5" value="0" tabindex="4"></input>'
		+'</div>'
	
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of level switch low (LSL)</b></label>'
		+' <input class="form-select" id="lsl" type="number" min="0" max="5" value="0" tabindex="5"></input>'
		+'</div>'
		
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of level switch high (LSH)</b></label>'
		+' <input class="form-select" id="lsh" type="number" min="0" max="5" value="0" tabindex="6"></input>'
		+'</div>'
		 
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of temperature switch low (TSL) </b></label>'
		+' <input class="form-select" id="tsl" type="number" min="0" max="5" value="0" tabindex="7"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of temperature switch high (TSH)</b></label>'
		+' <input class="form-select" id="tsh" type="number" min="0" max="5" value="0" tabindex="8"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of pressure switch high (PSH)</b></label>'
		+' <input class="form-select" id="psh" type="number" min="0" max="5" value="0" tabindex="9"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Programmable Logic Controller (PLC)</b></label>'
		+' <input class="form-select" id="plc" type="number" min="0" max="5" value="0" tabindex="10"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of variable frequency drive (VFD)</b></label>'
		+' <input class="form-select" id="vfd" type="number" min="0" max="5" value="0" tabindex="11"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of silicon controlled rectifier (SCR)</b></label>'
		+' <input class="form-select" id="scr" type="number" min="0" max="5" value="0" tabindex="12"></input>'
		+'</div>'
		
		
		
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyInstr" style="margin-top:10px;width:100%" data-toggle="modal" data-target="#myModal1" tabindex="13">Verify Instrument </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal1">'
		+'    <div class="modal-dialog " id="modelDialog1">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle1"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody1">'
		
		+'	        </div>'
//		+'	        <!-- Modal footer -->'
		+'	        <div class="modal-footer">'
		+'	          <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
		+'	        </div>'
		+'	      </div>'
		+'	    </div>'
		+'	  </div>'
//		+'	  <!-- End Modal -->'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="nextLevel2" style="margin-top:10px;margin-bottom:10px;width:100%" tabindex="14" hidden>Next level</button>'
		+'</div>'
		
		+'</div>'
		
	$("#Selection").html(htm);
	
       var temp=0;
	  
	   var flag=0;
	$("#verifyInstr").click(function(){
		
		 tt=parseInt($("#tt").val());
		 pt=parseInt($("#pt").val());
		 ft=parseInt($("#ft").val());
		 lt=parseInt($("#lt").val());
		
		 lsl=parseInt($("#lsl").val());
		 lsh=parseInt($("#lsh").val());
		 tsh=parseInt($("#tsh").val());
		 tsl=parseInt($("#tsl").val());
		
		 psh=parseInt($("#psh").val());
		 vfd=parseInt($("#vfd").val());
		 plc=parseInt($("#plc").val());
		 scr=parseInt($("#scr").val());
		
		 CountComp1();
         console.log(" tt"+tt);
         console.log(" pt"+pt);
         console.log(" ft"+ft);
         console.log(" lt"+lt);
         
         console.log(" lsl"+lsl);
         console.log(" lsh"+lsh);
         console.log(" tsl"+tsl);
         console.log(" tsh"+tsh);
         
         console.log(" psh"+psh);
         console.log(" vfd"+vfd);
         console.log(" plc"+plc);
         console.log(" scr"+scr);
         
		 
		  if(totalComp1==0){
				$("#modelDialog1").addClass("modal-md");
				$("#modelTitle1").html("Error box");
				  $("#modelBody1").html("<b>Select Components</b> ");
				  $("#modelBody1").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp1();
			  }else {
				  if(flag==0){
					  $("#modelDialog1").addClass("modal-xl");
					  $("#modelTitle1").html("Required configuration ");
						htm=''
					  
						+'<div class="col-sm-12" >'
						+'<center>REQUIRED COMPONENTS</center>'
						+'</div>'
					  +'<div class="col-sm-12" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td><center>TT</center></td>'
						+'     <td><center>PT</center></td>'
						+'     <td><center>FT</center></td>'
						+'     <td><center>LT</center></td>'
						
						+'     <td><center>LSL</center></td>'
						+'     <td><center>LSH</center></td>'
						+'     <td><center>TSL</center></td>'
						+'     <td><center>TSH</center></td>'
						
						+'     <td><center>PSH</center></td>'
						+'     <td><center>PLC</center></td>'
						+'     <td><center>VFD</center></td>'
						+'     <td><center>SCR</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>6</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>2</center></td>'
						+'     <td><center>1</center></td>'
						
						+'     <td><center>4</center></td>'
						+'     <td><center>2</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>2</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
					    +' </tbody>'
						+'</table>'
						+'</div>'
						+"<img src='images/boilerHeatExchanger.png' class='img-fluid' style='border-style: double;border-color: black;'>"
						 $("#modelBody1").html(htm);
						  $("#modelBody1").css("color","red"); 
				  }
				  else
					  {
					  CountComp1();
					  }
				
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp1(){
		
		if((tt==StdTTCount) && (pt==StdPTCount) && (ft==StdFTCount) && (lt==StdLTCount) && (lsl==StdLSLCount) && (lsh==StdLSHCount)
				&& (tsh==StdTSHCount) && (tsl==StdTSLCount) && (psh==StdPSHCount) && (vfd==StdVFDCount) && (plc==StdPLCCount) && (scr==StdSCRCount) ){
			$("#modelDialog1").removeClass("modal-xl");
			 $("#modelDialog1").addClass("modal-md");
			 $("#modelTitle1").html("Message box");
			 $("#modelBody1").html("<b>Click on 'Next level' button.</b>");
			$("#modelBody1").css("color","green");
			$("#tt,#ft,#pt,#lt,#lsl,#lsh,#tsh,#tsl,#vfd,#psh,#plc,#scr,#verifyInstr").prop("disabled",true);
			addToMasterJson();
		
			flag=1;
			htm=''
				+'<div class="col-sm-12" >'
				+"<img src='images/boilerHeatExchanger.png' class='img-fluid' id='partB1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
				+'</div>'
			  $("#diagram").html(htm);
			  $("#partB1").animate(
			          {
			            width: "1000px",
			            height: "700px",
			            left: "+=100px",
			          },
			          1000,
			          
			        );
				$("#nextLevel2").prop("hidden",false);
		}
		else{
			 perTTCount=parseFloat((tt*100)/StdTTCount);
			 perPTCount=parseFloat((pt*100)/StdPTCount);
			 perFTCount=parseFloat((ft*100)/StdFTCount);
			 perLTCount=parseFloat((lt*100)/StdLTCount);
			 
			 perLSLCount=parseFloat((lsl*100)/StdLSLCount);
			 perLSHCount=parseFloat((lsh*100)/StdLSHCount);
			 perTSHCount=parseFloat((tsh*100)/StdTSHCount);
			 perTSLCount=parseFloat((tsl*100)/StdTSLCount);
			 
			 perPSHCount=parseFloat((psh*100)/StdPSHCount);
			 perVFDCount=parseFloat((vfd*100)/StdVFDCount);
			 perPLCCount=parseFloat((plc*100)/StdPLCCount);
			 perSCRCount=parseFloat((scr*100)/StdSCRCount);
			 
			
			 console.log(" perTTCount "+perTTCount);
			 console.log(" perPTCount "+perPTCount);
			 console.log(" perFTCount "+perFTCount);
			 console.log(" perLTCount "+perLTCount);
			 
			 console.log(" perLSLCount "+perLSLCount);
			 console.log(" perLSHCount "+perLSHCount);
			 console.log(" perTSHCount "+perTSHCount);
			 console.log(" perTSLCount "+perTSLCount);
			 
			 console.log(" perPSHCount "+perPSHCount);
			 console.log(" perVFDCount "+perVFDCount);
			 console.log(" perPLCCount "+perPLCCount);
			 console.log(" perSCRCount "+perSCRCount);
			 
				totalComp1=perTTCount+perPTCount+perFTCount+perLTCount+perLSLCount+perLSHCount+perTSHCount+perTSLCount+perPSHCount+perVFDCount+perPLCCount+perSCRCount;
			  avg=parseInt(totalComp1/12);
			  
			  console.log(" avg "+avg);
			
				 $("#modelDialog1").removeClass("modal-xl");
				$("#modelDialog1").addClass("modal-md");
				
				if((StdTTCount<tt)||(StdPTCount<pt)||(StdFTCount<ft)||(StdLTCount<lt)||(StdLSLCount<lsl)||(StdLSHCount<lsh)||(StdTSHCount<tsl)||(StdTSLCount<tsl)||(StdVFDCount<vfd)||(StdPLCCount<plc)||(StdSCRCount<scr)){
					
					$("#modelBody1").css("color","red"); 
					$("#modelTitle1").html("Error box");
					$("#modelBody1").html("<b>More components than expected.</b>");
				}else
					{
						if(avg<100){
							$("#modelTitle1").html("Message box");
							$("#modelBody1").css("color","red");
							 $("#modelBody1").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody1").css("color","red");
							$("#modelTitle1").html("Error box");
							 $("#modelBody1").html("<b>More components than expected. </b>");
						}
					}
				
		}
		
	}
	function addToMasterJson()
	{
		tempMasterJsonInstr = {
				"TSHH":"1",
				"PSHH":"2",
				"PSLL":"2",
				"PLC":"1",
				"VFD":"2",
				"AFR":"1",
				"VI":"1",
				"PI":"1",
				"TT":"2",
				"FT":"1",
				"SCR":"1",
				};
				
		InstrMasterJson.Instrument=tempMasterJsonInstr;
		console.log(InstrMasterJson);
	}
	$("#nextLevel2").click(function(){
		if(flag==1){
			BoilerHeatExchangerPreQuestion();
		}
	
	});
	
	
	
}

