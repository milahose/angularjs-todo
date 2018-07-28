
angular
	.module('app')
	.controller('TodoController', TodoController);

	TodoController.$inject = [];
	function TodoController() {
		vm = this;
		console.log('test')
		vm.list = [{
			title: 'First todo item',
			completed: false
		}, {
			title: 'Second todo item',
			completed: false
		}, {
			title: 'Third todo item',
			completed: false
		}];
	}
