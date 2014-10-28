var toDo = function(){
	var self = this;
	self.edit = 0; 
	self.taskInput = document.getElementById('taskInput');
	self.taskList = document.getElementById('taskList');
	self.calendar = document.getElementById('calendar');
	self.assignees = document.getElementById('assignees');

	self.newTask = function(){

		//create list item
		var listItem = document.createElement('li');

		//create checkbox
		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.setAttribute('class', 'checkbox');

		//create task text anchor
		var taskText = document.createElement('a');
		taskText.href = '#';

		var dueDate = document.createElement('span');
		var due = "Due: " + self.calendar.value;
		dueDate.setAttribute('class', 'options');

		if(self.calendar.value == ""){
			dueDate.style.display = 'none';			
		}

		//create assignees
		var taskDoer = document.createElement('span');
		var assignTo = "Assign to: " + self.assignees.value;
		taskDoer.setAttribute('class', 'options');

		//create edit button
		var editBtn = document.createElement('a');
		editBtn.setAttribute('class', 'edit-btn');
		editBtn.innerHTML = 'Edit';
		editBtn.style.display = 'none';
		editBtn.href = '#';

		//create delete button
		var deleteBtn = document.createElement('a');
		deleteBtn.setAttribute('class', 'delete-btn');
		deleteBtn.innerHTML = 'Delete';
		deleteBtn.style.display = 'none';
		deleteBtn.href = '#';

		//add elements to document
		self.taskList.appendChild(listItem);
		listItem.appendChild(checkbox);
		listItem.appendChild(taskText);
		listItem.appendChild(dueDate);
		listItem.appendChild(taskDoer);
		listItem.appendChild(editBtn);
		listItem.appendChild(deleteBtn);

		self.edit = listItem;
		self.updateTask();
		
		listItem.onmouseover = function(){
			editBtn.style.display = "inline-block";
			deleteBtn.style.display = "inline-block";
		}

		listItem.onmouseout = function(){
			editBtn.style.display = "none";
			deleteBtn.style.display = "none";
		}

		checkbox.onclick= function checkValidation(e){
			if (this.checked) {
	            taskText.style.textDecoration = 'line-through';
	        } else {
	            taskText.style.textDecoration = 'none';
	        }
		}

		deleteBtn.onclick = function(){
			self.taskList.removeChild(listItem);
		}


		editBtn.onclick = function(){
			self.taskInput.value = taskText.text;
			self.calendar.value = dueDate.innerHTML.substring(5, dueDate.innerHTML.length);
			self.assignees.value = taskDoer.innerHTML.substring(11, taskDoer.innerHTML.length);

			self.edit = listItem;
		}
	}

	self.updateTask = function(){
		self.edit.children[1].innerHTML = self.taskInput.value;
		self.edit.children[2].innerHTML = "Due: " + self.calendar.value;
		self.edit.children[3].innerHTML = "Assign to: " + self.assignees.value;
		

		self.edit = 0;
		self.taskInput.value = "";
		self.calendar.value = self.today(new Date);
		self.assignees.value = "me";
	}

	self.today = function(date){

	    var dd = date.getDate();
	    var mm = date.getMonth()+1; 
	    var yyyy = date.getFullYear();

	    if(dd < 10){dd = '0' + dd} 
	    if(mm < 10){mm = '0' + mm} 
	    return yyyy + '-' + mm + '-' + dd;     

	}

	self.onTaskSubmit = function(){
		if(self.edit == 0){
			self.newTask();
		} else {
			self.updateTask();
		}
	}

	self.init = function(){
		self.calendar.value = self.today(new Date);

		self.taskInput.onkeypress = function(e){
			//if enter is pressed
			if(e.which == 13) {
				self.onTaskSubmit();
			}
		}
	}

	self.init();
	
}();
