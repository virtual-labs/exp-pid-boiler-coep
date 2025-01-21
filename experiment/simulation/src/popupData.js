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
					+'<td>Drum Temperature </td>'
					+'<td>TT01</td>'
					+'</tr>'
					+'<tr>'
					+'<td>Steam Temperature </td>'
					+'<td>TT02</td>'
					+'</tr>'
					+'<tr>'
					+'<td>HE Outlet Water Temperature </td>'
					+'<td>TT03</td>'
					+'</tr>'
					+'<tr>'
					+'<td>Inlet Water Temperature_HE </td>'
					+'<td>TT04</td>'
					+'</tr>'
					+'<tr>'
					+'<td>Boiler feed water Temperature_Condensor </td>'
					+'<td>TT05</td>'
					+'</tr>'
					
					+'<tr>'
					+'<td>Boiler feed water Temperature</td>'
					+'<td>TT06</td>'
					+'</tr>'
					
					+'<tr>'
					+'<td>Boiler Feed Water Flow Inf Feed Pump_101 </td>'
					+'<td>FT1</td>'
					+'</tr>'
					+'<tr>'
					+'<td>Steam Flow </td>'
					+'<td>FT2</td>'
					+'</tr>'
					+'<tr>'
					+'<td>Feed Water Flow HE Inlet </td>'
					+'<td>FT3</td>'
					+'</tr>'
					+'<tr>'
					+'<td>Steam Pressure Transmitter</td>'
					+'<td>PT</td>'
					+'</tr>'
					+'<tr>'
					+'<td>Control Valve</td>'
					+'<td>FCV</td>'
					+'</tr>'
					+'<tr>'
					+'<td>Silicon Controlled Rectifier</td>'
					+'<td>SCR</td>'
					+'</tr>'
					+'  <tr>'
					+' <td> Mod Sov 1</td>'
					+' <td>MSV1</td>'  
					+'  </tr>'
					+'  <tr>'
					+' <td>Mod Sov 2</td>'
					+' <td>MSV2</td>'  
					+'  </tr>'
					
					+'  <tr>'
					+' <td>Feed Pump Speed_Inlet(VFD_101)</td>'
					+' <td>PY1</td>'
					+'  </tr>'
					+'  <tr>'
					+' <td>	Feed Pump_HE_Water(VFD_201)</td>'
					+' <td>PY2</td>'
					+'  </tr>'
				
					+'  <tr>'
					+' <td>Level Transmitter Drum</td>'
					+' <td>LT</td>'
					+'  </tr>'
					
					
					
					+'</tbody>'
					+'</table>'
				$("#proStrBody").html(htm);
			});
			
			