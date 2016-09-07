describe('UserService', function () {
	beforeEach(module('app'));

	var UserService, $httpBackend;

	beforeEach(inject(function($injector) {
			OurService = $injector.get('OurService');
			$httpBackend = $injector.get('$httpBackend');

			$httpBackend.when('GET', '/rest/user').respond({user: 'Scott Mescudi', email: 'kwzrd@wickedawesome.com'});
	}));
	
	
	it('should get the current users information', function(done) {
				$httpBackend.expectGET('/rest/user/');

				UserService
					.getUser()
					.then(function(res) {
						var data = res.data;

						if(data.user == "Scott Mesucdi") {
							done();
						};				
		});	
	});			
});	

