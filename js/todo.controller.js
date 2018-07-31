
angular
	.module('app')
	.controller('TodoController', TodoController);

	TodoController.$inject = ['TodoService'];
	function TodoController(TodoService) {
		const vm = this;
		
		vm.newTodo = '';
		vm.list = [];

		vm.addTodo = () => {
			if (!vm.newTodo) return;

			TodoService
				.create({ title: vm.newTodo, completed: false })
				.then(data => {
					vm.list.unshift(data);
					vm.newTodo = '';
				});
		}

		vm.updateTodo = (item, index) => {
			if (!item.title) {
				vm.removeTodo(item, index);
				return;
			}

			if (item.id > 200) {
				item = item;
			} else {
				TodoService.update(item);
			}
		}

		vm.getTodos = () => {
			TodoService
				.retrieve()
				.then(data => vm.list = data);
		}

		vm.removeTodo = (item, index) => {
			if (item.id > 200) {
				vm.list.splice(index, 1);
				return;
			} else {
				TodoService
					.remove(item)
					.then(() => vm.list.splice(index, 1));
			}
		}

		vm.getRemaining = () => {
			return vm.list.filter(item => {
				return !item.completed;
			}).length;
		}

		vm.toggleState = (item) => {
			if (item.id > 200) {
				item.id = !item.id;
				return;
			} else {
				TodoService
					.update(item)
					.then(() => {}, () => { item.completed = !item.completed });
			}
		}

		vm.getTodos();
	}
