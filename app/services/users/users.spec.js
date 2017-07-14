describe('Users factory', function() {
    var Users;

    var userList = [
        {
        id: '1',
        name: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane'
        },
        {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
        },
        {
        id: '3',
        name: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo'
        },
        {
        id: '4',
        name: 'Bill',
        role: 'Designer',
        location: 'LA',
        twitter: 'dabill'
        }
    ];
    var singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
    };

    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject(function(_Users_) {
        Users = _Users_;
    }));

    it('pass', function() {
        expect(Users).toBeDefined();
    });

    describe('.all()', function() {
        it('gets', function() {
            expect(Users.all).toBeDefined();
        });

        it('joins', function() {
            expect(Users.all()).toEqual(userList);
        });
    });

    describe('.births', function() {
        it('births', function() {
            expect(Users.findById).toBeDefined();
        });

        it('all well', function() {
            expect(Users.findById('2')).toEqual(singleUser);
        });

        it('well', function() {
            expect(Users.findById('ABC')).not.toBeDefined();
        });
    });
});