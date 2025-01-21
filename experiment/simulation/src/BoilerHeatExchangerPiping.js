
function BoilerHeatExchangerPiping()
{
	ComponentMasterJson = {};
	var StdCompPipingCount=12;
	var StdTankCount=4;
	var StdPumpCount=2;
	var StdHeatExchangerCount=1;
	var StdHeaterCount=1;
	var StdValvesCount=4;

	var preTankCount;
	var prePumpCount;
	var preHeatExchangerCount;
	var preHeaterCount;
	var preValvesCount;

	var tanks;
	var heatEx;
	var pumps;
	var heater;
	var valves;

	var TotalComp;
	
	
	$("#Header").html("	<center><span> BOILER HEAT EXCHANGER - PIPING DIAGRAM</span></center>");
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
	
     	+'<div class="row conf" >'
	
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of tanks</b></label>'
		+' <input class="form-select" id="tanks" type="number" min="0" max="5" value="0" tabindex="1" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of pumps</b></label>'
		+' <input class="form-select" id="pumps" type="number" min="0" max="5" value="0" tabindex="1" ></input>'
		+'</div>' 
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of valves</b></label>'
		+' <input class="form-select" id="valves"  type="number" min="0" max="5" value="0" tabindex="4" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of heat exchangers </b></label>'
		+' <input class="form-select" id="heatex" type="number" min="0" max="5" value="0" tabindex="5" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of boiler drum with heater</b></label>'
		+' <input class="form-select" id="bdheater" type="number" min="0" max="5" value="0" tabindex="1" ></input>'
		+'</div>' 
		+'<div class="col-sm-12">'
		+'<label><b>Utilities</b></label>'
		+'<select class="form-select" id="Utilities" multiple="multiple" tabindex="6">'
		+'  <option value="Water">Water</option>'
		+'  <option value="Air">Air</option>'
		+'  <option value="Steam">Steam </option>'
		+'  <option value="Electricity">Electricity</option>'
		+'  <option value="Sterile_Water">Sterile Water </option>'
		+'  <option value="Heating_Ventilation_Air_Conditioning(HVAC)"> Heating Ventilation Air Conditioning(HVAC)</option>'
		+'  <option value="CCTV_Surveillance">CCTV - Surveillance</option>'
		+'  <option value="Access_Control"> Access Control</option>'
		
	
		+'</select>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyComponents" style="margin-top:10px;margin-bottom:10px;width:100%" data-toggle="modal" data-target="#myModal" tabindex="7">Verify Components </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal">'
		+'    <div class="modal-dialog " id="modelDialog">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody">'
		
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
		+'<button type="button" class="btn btn-danger"  id="nextLevel1" style="margin-top:10px;margin-bottom:10px;width:100%" hidden>Next Level</button>'
		+'</div>'
		
		+'</div>'
	$("#Selection").html(htm);
	htm=''
		+'<div class="row statement" ><p>A problem statement is a crucial element in designing and developing a pilot plant. '
		+'It defines the problem or opportunity that the pilot plant aims to address, and it serves as a guiding force throughout the project.'
		+'Heres a general outline to help you define a problem statement for designing and developing a pilot plant:'
		+'<br>Problem Statement: You are given the responsibility as an Instrumentation and Control Engineer to design and commission a pilot '
		+'<br><b>A Boiler and Heat exchanger system to provide hot water at max 65°C and 800 lph</b>'
		+'<br><p><b>Background :</b> <br>The pilot plant will be used to test the new “control and automation” technologies.'
		+'<br><b>Key Performance Indicators (KPIs) :</b><br> You will be judged based on the accuracy of design, proper'
		+'selection of field and panel instruments, and successful commissioning of the plant in a stipulated time frame.'
		+'<br><b>Constraints and Assumptions :</b><br> As you are an Instrumentation and Control Engineer process related details are'
		+'not expected from you. You will receive the same from a process expert.</b></div>'
		+'<div class="row"><img src="images/boilerheatExchanger.jpg" class="img img-responsive"></img></div>'

		$("#diagram").html(htm);
       var temp=0;
	   var percentage=0;
	   var totalComp;
	   var flag=0;
	   var selectedValues;
	   var selectedArray=[];
	$("#verifyComponents").click(function(){
		 percentage=0;
		 tanks=parseInt($("#tanks").val());
		 heatEx=parseInt($("#heatex").val());
		 pump=parseInt($("#pumps").val());
		 heater=parseInt($("#bdheater").val());
		 valves=parseInt($("#valves").val());
		 const selectedValues = $("#Utilities").val();
		 
		 if (selectedValues) {
	          selectedValues.forEach(value => {
	            if (!selectedArray.includes(value)) {
	              selectedArray.push(value);
	            }
	          });

//	          $("#output").text("Values in Array: " + selectedArray.join(", "));
	        } 
		 
		 
		 
		 CountComp();
		 
		  console.log(" tanks "+tanks);
		  console.log(" heatex "+heatEx);
		  console.log(" pump "+	 pump);
		  console.log(" bdheater "+heater);
		  console.log(" valves "+valves);
		  
		  if(totalComp==0 ||(tanks === "" || heatEx === "" || pump === "" || heater=="" || valves=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box ");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp();
			  }else{
				  if(flag==0){
					  $("#modelDialog").removeClass("modal-md");
					  $("#modelDialog").addClass("modal-xl");
					  $("#modelTitle").html("Required configuration ");
					  htm=''
						  +'<div class="row">'
						  +'<div class="col-sm-6" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td colspan="2"><center>REQUIRED COMPONENTS</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>TANKS</center></td>'
						+'     <td><center>4</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>PUMP</center></td>'
						+'     <td><center>2</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>VALVES</center></td>'
						+'     <td><center>4</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>HEAT EXCHANGER</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'    <tr>'
						
						+'     <td><center>BOILER DRUM WITH HEATER</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						
					    +' </tbody>'
						+'</table>'
						+'</div>'
						 +'<div class="col-sm-6" >'
							+'<table class="table table-striped table-bordered">'
							+' <tbody>'
							+'    <tr class="table-dark text-dark">'
							+'     <td colspan="2"><center> REQUIRED UTILITIES</center></td>'
							+'   </tr>'
							+'    <tr>'
							+'     <td><center>AIR</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" style=""></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>ELECTRICITY</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>COMMUNICATION NETWORK</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>ACCESS CONTROL</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>CCTV</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							
							+'   </tr>'
						    +' </tbody>'
							+'</table>'
							+'</div>'
							+'</div>'

						+"<img src='images/boilerPiping.png' class='img-fluid' style='border-style: double;border-color: black;'>"
					  
						 $("#modelBody").html(htm);
						  $("#modelBody").css("color","red");   
				  }
				  else
					  {
					  CountComp();
					  }
				  
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp(){
		
		 if(totalComp==0 ||(tanks === "" || heatEx === "" || pump === "" || heater=="" || valves=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		
	else{
		
		
		if((tanks==StdTankCount) && (pump==StdPumpCount) && (heatEx==StdHeatExchangerCount) && (StdHeaterCount==heater) &&( StdValvesCount==valves)){
			
			if(selectedArray.length==0){
				
				 $("#modelDialog").removeClass("modal-xl");
					$("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Error box");
					  $("#modelBody").html("<b>Select utilities.</b> ");                                                                                                
					  $("#modelBody").css("color","red");
			}
			else
				{
					 $("#modelDialog").removeClass("modal-xl");
					 $("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Message box ");
					 $("#modelBody").html("<b>Click on 'Next level' button.</b>");
					$("#modelBody").css("color","green");
					$("#tanks,#heatex,#pumps,#bdheater,#verifyComponents,#Utilities,#valves").prop("disabled",true);
					
					flag=1;
					addToMasterJson();
					htm=''
						+'<div class="col-sm-12" >'
						+"<img src='images/boilerPiping.png' class='img-fluid' id='partA1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
						+'</div>'
						
					$("#diagram").html(htm);
					 $("#partA1").animate(
					          {
					            width: "1000px",
					            height: "700px",
					           left: "+=100px",
		//			            background-color:"red"
					            
					          },
					          1000,
					          
					        );
						$("#nextLevel1").prop("hidden",false);
				}	
		}
		else{
			
			
			preTankCount=parseFloat((tanks*100)/StdTankCount);
			perPumpCount=parseFloat((pump*100)/StdPumpCount);
			 preHeatExchangerCount=parseFloat((heatEx*100)/StdHeatExchangerCount);
			 perHeaterCount=parseFloat((heater*100)/StdHeaterCount);
			  perValvesCount=parseFloat((valves*100)/StdValvesCount);
//			 console.log(" perVesselsCount "+perVesselsCount);
//			 console.log(" perPumpCount "+perPumpCount);
//			 console.log(" perFansCount "+	 perFansCount);
//			 console.log(" perHeaterCount "+perHeaterCount);
			 console.log(" perHeaterCount "+perHeaterCount);
				totalComp=preTankCount+perPumpCount+preHeatExchangerCount+perHeaterCount+perValvesCount;
			  avg=parseInt(totalComp/5);
			  
			  console.log(" avg "+avg);
			
				 $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				if((tanks>StdTankCount) || (pump>StdPumpCount) || (heatEx>StdHeatExchangerCount) || (heater>StdHeaterCount) || (valves>StdValvesCount)){
					
					$("#modelBody").css("color","red"); 
					 $("#modelTitle").html("Error box");
					$("#modelBody").html("<b>More components than expected. </b>");
				}else
					{
						if(avg<100){
							$("#modelBody").css("color","red");
							$("#modelTitle").html("Message box");
							 $("#modelBody").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody").css("color","red");
							 $("#modelTitle").html("Error box");
							 $("#modelBody").html("<b>More components than expected.</b>");
						}
					}
		}
	}
		
	}
	function addToMasterJson()
	{
		
		tempMasterJsonComp = {
		"totalComponent":"12",
		"tank":"4",
		"pump":"2",
		"HeatExchanger":"1",
		"Heater":"1",
		"Valves":"4",
		
//		"Utilities":selectedArray,
		};
		
		ComponentMasterJson.Component=tempMasterJsonComp;
		ComponentMasterJson.Component.Utilities=selectedArray;
		console.log(ComponentMasterJson);
	}
	
	$("#nextLevel1").click(function(){
		BoilerHeatExchangerInstrument();
	});
	
	
	
}

