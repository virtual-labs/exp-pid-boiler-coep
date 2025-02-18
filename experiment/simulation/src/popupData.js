		$("#simDemo").click(function () {

			 $("#modelDialog").removeClass("modal-md");
			 $("#modelDialog").removeClass("modal-sm");
			 $("#modelDialog").removeClass("modal-xl");
			 $("#modelDialog").addClass("modal-xl");
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
			$("#proStrBody").html(htm);
			
		});
			$("#procedure").click(function () {
				 $("#modelDialog").removeClass("modal-md");
				 $("#modelDialog").removeClass("modal-sm");
				 $("#modelDialog").removeClass("modal-xl");
				 $("#modelDialog").addClass("modal-sm");
//				$("#modalTitle").html("PROCEDURE");
				htm=''
					+'PROCEDURE '
				$("#proStrBody").html(htm);
			});
			$("#tagDetails").click(function () {
				 $("#modelDialog").removeClass("modal-md");
				 $("#modelDialog").removeClass("modal-sm");
				 $("#modelDialog").removeClass("modal-xl");
				 $("#modelDialog").addClass("modal-md");
//				$("#modalTitle").html("PROCEDURE");
				htm=''
					+'<table class="table table-bordered table-hover" style="font-size:larger;">'
					+' <thead>'
					+'<tr class="table-info">'
					+'<th>Tag</th>'
					+'<th>Tag Details</th>'
					+'</tr>'
					+'</thead>'
					+' <tbody>'
					+'<tr>'
					+'<td>TT1</td>'
					+'<td>Drum Temperature </td>'
					+'</tr>'
					+'<tr>'
					+'<td>TT2</td>'
					+'<td>Steam Temperature </td>'
					+'</tr>'
					+'<tr>'
					+'<td>TT3</td>'
					+'<td>HE Outlet Water Temperature </td>'
					+'</tr>'
					+'<tr>'
					+'<td>TT4</td>'
					+'<td>Inlet Water Temperature_HE </td>'
					+'</tr>'
					+'<tr>'
					+'<td>TT5</td>'
					+'<td>Boiler feed water Temperature_Condensor </td>'
					+'</tr>'
					+'<tr>'
					+'<td>TT6</td>'
					+'<td>Boiler feed water Temperature</td>'
					+'</tr>'
					+'<tr>'
					+'<td>FT1</td>'
					+'<td>Boiler Feed Water Flow Inf Feed Pump_101 </td>'
					+'</tr>'
					+'<tr>'
					+'<td>FT2</td>'
					+'<td>Steam Flow </td>'
					+'</tr>'
					+'<tr>'
					+'<td>FT3</td>'
					+'<td>Feed Water Flow HE Inlet </td>'
					+'</tr>'
					+'<tr>'
					+'<td>PT</td>'
					+'<td>Steam Pressure Transmitter</td>'
					+'</tr>'
					+'<tr>'
					+'<td>FCV</td>'
					+'<td>Control Valve</td>'
					+'</tr>'
					+'<tr>'
					+'<td>SCR</td>'
					+'<td>Silicon Controlled Rectifier</td>'
					+'</tr>'
					+'  <tr>'
					+' <td>MOV1</td>' 
					+' <td> Mod Sov 1</td>' 
					+'  </tr>'
					+'  <tr>'
					+' <td>MOV2</td>'  
					+' <td>Mod Sov 2</td>'
					+'  </tr>'
					+'  <tr>'
					+' <td>PY1</td>'
					+' <td>Feed Pump Speed_Inlet(VFD_101)</td>'
					+'  </tr>'
					+'  <tr>'
					+' <td>PY2</td>'
					+' <td>	Feed Pump_HE_Water(VFD_201)</td>'
					+'  </tr>'
					+'  <tr>'
					+' <td>LT</td>'
					+' <td>Level Transmitter Drum</td>'
					+'  </tr>'
					
					
					
					+'</tbody>'
					+'</table>'
				$("#proStrBody").html(htm);
			});
			
			